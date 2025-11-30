/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState, useRef, forwardRef } from "react"
import { Menu, Search, X, ArrowDown } from "lucide-react"
import { Link } from "react-router-dom";

// import { NewsPageComponent } from "@/components/news-page"

// Video section data
const videoSections = [
  {
    id: "hero",
    videoUrl: "./1.jpeg",
    title:
      "Agriculture is the backbone of the nation",
    subtitle: "Explore our vision",
  },
  {
    id: "architecture",
    videoUrl: "./2.jpeg",
    title:
      "Where the soil is rich , the people flourish",
    subtitle: "Residential Projects",
  },
  {
    id: "interiors",
    videoUrl: "./3.jpeg",
    title:
      "To plant a seed is to believe in tomorrow",
    subtitle: "Interior Design",
  },
  {
    id: "landscape",
    videoUrl: "./4.jpeg",
    title:
      "Smart farming builds a smarter future",
    subtitle: "Landscape Integration",
  },
//   {
//     id: "urban",
//     videoUrl: "./Hero5.mp4",
//     title:
//       "StudioKIA brings four decades of legacy into dialogue with a changing world — designing spaces across continents with purpose and perspective.",
//     subtitle: "Urban Design",
//   },
];

// Video Section Component
const VideoSection = (({ videoUrl, title, subtitle, scrollY, isActive, onScrollDown, sectionHeight }, ref) => {
  const sectionRef = useRef(null)
  const videoRef = useRef(null)

  // Forward the ref
  useEffect(() => {
    if (ref && typeof ref === "function") {
      ref(sectionRef.current)
    } else if (ref) {
      ref.current = sectionRef.current
    }
  }, [ref])

  // Calculate relative scroll position for this section
  const calculateRelativeScroll = () => {
    if (!sectionRef.current) return 0

    const sectionTop = sectionRef.current.offsetTop
    const sectionHeight = sectionRef.current.offsetHeight
    const relativeScroll = scrollY - sectionTop

    // Return a value between 0 and 1 representing how far through the section we've scrolled
    return Math.max(0, Math.min(1, relativeScroll / (sectionHeight / 2)))
  }

  const relativeScroll = calculateRelativeScroll()

  // Calculate effects based on relative scroll
  const blurAmount = Math.min(relativeScroll * 20, 20) // Max 20px blur
  const darkenAmount = Math.min(relativeScroll * 0.7, 0.7) // Max 0.7 opacity

  return (
    <div ref={sectionRef} className="relative z-10" style={{ height: sectionHeight }}>
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <img
          ref={videoRef}
          autoPlay
          muted
          loop
          src={videoUrl}
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            filter: `blur(${blurAmount}px)`,
            transform: "scale(1.1)", // Prevent blur from showing edges
          }}
        />

        {/* Darkening overlay that increases with scroll */}
        <div
          className="absolute inset-0 bg-black transition-opacity duration-100"
          style={{ opacity: darkenAmount }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center px-8 md:px-16 z-10">
        <div className="max-w-4xl">
          <h2
            className="text-white text-2xl md:text-5xl lg:text-7xl font-light leading-tight mb-8"
            style={{
              opacity: Math.max(1 - relativeScroll * 2, 0.2), // Fade out text with scroll
              transform: `translateY(${relativeScroll * 100}px)`, // Parallax effect
            }}
          >
            {title}
          </h2>

          <div
            className="flex items-center space-x-4 text-white/80"
            style={{
              opacity: Math.max(1 - relativeScroll * 3, 0), // Fade out faster than title
            }}
          >
            {/* <span className="text-lg">{subtitle}</span>
            <div className="h-px w-12 bg-white/60"></div>
            <a to="/about" className="text-white hover:underline">
              View Projects
            </a> */}
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator (only if there's a next section) */}
      {onScrollDown && isActive && (
        <button
          onClick={onScrollDown}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white flex flex-col items-center z-10"
          style={{
            animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
          }}
          aria-label="Scroll to next section"
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <ArrowDown className="h-5 w-5" />
        </button>
      )}
    </div>
  )
})

VideoSection.displayName = "VideoSection"

// Main component
export default function Home() {
  const [scrollY, setScrollY] = useState(0)
  const [activeSection, setActiveSection] = useState(0)
  const sectionRefs = useRef([null])

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)

      // Determine which section is currently in view
      const viewportHeight = window.innerHeight
      const scrollPosition = window.scrollY + viewportHeight / 2

      for (let i = 0; i < sectionRefs.current.length; i++) {
        const section = sectionRefs.current[i]
        if (!section) continue

        const sectionTop = section.offsetTop
        const sectionBottom = sectionTop + section.offsetHeight

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setActiveSection(i)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])



  // Scroll to next section
  const scrollToNextSection = () => {
    if (activeSection < videoSections.length - 1) {
      const nextSection = sectionRefs.current[activeSection + 1]
      if (nextSection) {
        window.scrollTo({
          top: nextSection.offsetTop,
          behavior: "smooth",
        })
      }
    }
  }

  // Initialize refs array
  useEffect(() => {
    sectionRefs.current = sectionRefs.current.slice(0, videoSections.length)
  }, [])

  return (
    <div id="home" className="relative">
      {/* Add global styles for scrollbar hiding */}
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
        
        body {
          margin: 0;
          padding: 0;
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
        
        /* Hide scrollbar for Chrome, Safari and Opera */
        ::-webkit-scrollbar {
          display: none;
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
      // `}</style>


      {/* Video Sections */}
      {videoSections.map((section, index) => (
        <VideoSection
          key={section.id}
          ref={(el) => (sectionRefs.current[index] = el)}
          videoUrl={section.videoUrl}
          title={section.title}
          subtitle={section.subtitle}
          scrollY={scrollY}
          isActive={activeSection === index}
          onScrollDown={index < videoSections.length - 1 ? scrollToNextSection : undefined}
          sectionHeight={index === 0 ? "100vh" : "100vh"}
        />
      ))}

              <div className="fixed right-3 bottom-5 z-40">
          <Link to='https://agrocast-chatbot-backend.onrender.com/'>
          <img src='/Chatbot.png' className='w-16 rounded-full'/>
          </Link>
        </div>
    </div>
  )
}

