
// import { useState, useEffect } from "react"
// import { ChevronLeft, ChevronRight } from 'lucide-react'
// import { motion, AnimatePresence } from "framer-motion"
// const slides = [
//   {
//     id: 1,
//     image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     title: "The LeBron James Innovation Center",
//     subtitle: "Nike World Headquarters, Beaverton, Oregon"
//   },
//   {
//     id: 2,
//     image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     title: "Modern Architectural Marvel",
//     subtitle: "Designed for performance research and product innovation"
//   },
//   {
//     id: 3,
//     image: "https://images.unsplash.com/photo-1526651197376-ada29b846227?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     title: "State-of-the-Art Facilities",
//     subtitle: "Home to the Nike Sport Research Lab"
//   },
//   {
//     id: 4,
//     image: "https://images.unsplash.com/photo-1527288012656-13ea8f91bd63?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     title: "Sustainable Design",
//     subtitle: "LEED Platinum certified building"
//   },
//   {
//     id: 5,
//     image: "https://static.wixstatic.com/media/57dd85_0313695480b4423d8743faa5b0d201e7.jpg/v1/fill/w_632,h_444,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/57dd85_0313695480b4423d8743faa5b0d201e7.jpg",
//     title: "Collaborative Spaces",
//     subtitle: "Fostering innovation across disciplines"
//   },
//   // {
//   //   id: 6,
//   //   image: "/placeholder.svg?height=800&width=1600",
//   //   title: "Advanced Technology",
//   //   subtitle: "Cutting-edge equipment for athlete assessment"
//   // },
//   // {
//   //   id: 7,
//   //   image: "/placeholder.svg?height=800&width=1600",
//   //   title: "Athlete Experience",
//   //   subtitle: "Testing grounds for elite performance"
//   // },
//   // {
//   //   id: 8,
//   //   image: "/placeholder.svg?height=800&width=1600",
//   //   title: "Future of Sport",
//   //   subtitle: "Where innovation meets athletic excellence"
//   // }
// ]

// export function CropNut() {
//   const [currentIndex, setCurrentIndex] = useState(0)
//   const [isAnimating, setIsAnimating] = useState(false)
  
//   const goToNext = () => {
//     if (isAnimating) return
//     setIsAnimating(true)
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length)
//   }
  
//   const goToPrevious = () => {
//     if (isAnimating) return
//     setIsAnimating(true)
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length)
//   }

//   const goToSlide = (index) => {
//     if (isAnimating || index === currentIndex) return
//     setIsAnimating(true)
//     setCurrentIndex(index)
//   }

//   // Auto-advance slides
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       goToNext()
//     }, 6000)
    
//     return () => clearTimeout(timer)
//   }, [currentIndex])

//   return (
//     <div className="relative md:w-[98.8vw] h-[90vh] overflow-hidden md:m-2">
//       {/* Navigation Arrows */}
//       <button 
//         onClick={goToPrevious}
//         className="absolute left-4 top-1/2 z-10 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
//         aria-label="Previous slide"
//       >
//         <ChevronLeft className="h-8 w-8" />
//       </button>
      
//       <button 
//         onClick={goToNext}
//         className="absolute right-4 top-1/2 z-10 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
//         aria-label="Next slide"
//       >
//         <ChevronRight className="h-8 w-8" />
//       </button>
      
//       {/* Slides */}
//       <AnimatePresence initial={false} mode="wait" onExitComplete={() => setIsAnimating(false)}>
//         <motion.div
//           key={currentIndex}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.7, ease: "easeInOut" }}
//           className="absolute inset-0"
//         >
//           <img
//             src={slides[currentIndex].image || "/placeholder.svg"}
//             alt={slides[currentIndex].title}
//             className="object-cover h-full w-full"
//           />
//           <div className="absolute inset-0 bg-black/30" />
          
//           <div className="absolute bottom-0 left-0 p-8 md:p-16 w-full">
//             <motion.h2
//               initial={{ y: 50, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ duration: 0.7, delay: 0.2 }}
//               className="text-4xl md:text-4xl lg:text-5xl font-medium text-white max-w-4xl"
//             >
//               {slides[currentIndex].title}
//             </motion.h2>
            
//             <motion.p
//               initial={{ y: 50, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ duration: 0.7, delay: 0.4 }}
//               className="text-xl md:text-2xl text-white/90 mt-4"
//             >
//               {slides[currentIndex].subtitle}
//             </motion.p>
//           </div>
//         </motion.div>
//       </AnimatePresence>
      
//       {/* Pagination */}
//       <div className="absolute bottom-6 right-6 z-10 flex items-center space-x-2">
//         <span className="text-white text-sm font-medium">
//           {currentIndex + 1} / {slides.length}
//         </span>
//       </div>
      
//       {/* Pagination Dots (optional) */}
//       <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex items-center space-x-2">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => goToSlide(index)}
//             className={`w-2 h-2 rounded-full transition-all ${
//               index === currentIndex ? "bg-white w-4" : "bg-white/50"
//             }`}
//             aria-label={`Go to slide ${index + 1}`}
//           />
//         ))}
//       </div>
//     </div>
//   )
// }


import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const staggerParent = {
  show: {
    transition: {
      staggerChildren: 0.25
    }
  }
};

const CropNut = () => {
  return (
    <div id="crop-nutrition" className="bg-[#0c0c0c] text-[#E6AB66] overflow-hidden">
      {/* SECTION TITLE */}
      <motion.div
        variants={staggerParent}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-center max-w-6xl mx-auto pt-16"
      >
        <motion.p
          variants={fadeUp}
          className="text-[#E6AB66] tracking-[6px] text-2xl mb-3 uppercase"
        >
          Crop Nutrition
        </motion.p>

        <motion.div variants={fadeUp} className="flex justify-center mb-4">
          <div className="flex items-center gap-2">
            <span className="h-[1px] w-8 bg-[#E6AB66]"></span>
            <span className="text-[#E6AB66] text-lg">✦</span>
            <span className="h-[1px] w-8 bg-[#E6AB66]"></span>
          </div>
        </motion.div>
      </motion.div>

      {/* REUSABLE SECTION COMPONENT */}
      {sections.map((sec, index) => (
        <motion.div
          key={index}
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8"
        >
          {/* IMAGE LEFT OR RIGHT BASED ON EVEN/ODD */}
          {index % 2 === 0 ? (
            <>
              <motion.div
                variants={fadeUp}
                className="relative h-[600px]"
              >
                <motion.img
                  src={sec.image}
                  alt={sec.title}
                  className="w-full h-full object-cover rounded-xl"
                />
              </motion.div>

              <motion.div
                variants={staggerParent}
                className="flex flex-col justify-center lg:pl-16"
              >
                <motion.h2 variants={fadeUp} className="text-5xl font-light mb-8 tracking-tight">
                  {sec.title}
                </motion.h2>

                {sec.text.map((t, i) => (
                  <motion.p
                    key={i}
                    variants={fadeUp}
                    className="text-xl leading-relaxed text-white mb-4"
                  >
                    {t}
                  </motion.p>
                ))}
              </motion.div>
            </>
          ) : (
            <>
              <motion.div
                variants={staggerParent}
                className="flex flex-col justify-center lg:pl-16"
              >
                <motion.h2 variants={fadeUp} className="text-5xl font-light mb-8 tracking-tight">
                  {sec.title}
                </motion.h2>

                {sec.text.map((t, i) => (
                  <motion.p
                    key={i}
                    variants={fadeUp}
                    className="text-xl leading-relaxed text-white mb-4"
                  >
                    {t}
                  </motion.p>
                ))}
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="relative h-[600px]"
              >
                <motion.img
                  src={sec.image}
                  alt={sec.title}
                  className="w-full h-full object-cover rounded-xl"
                />
              </motion.div>
            </>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default CropNut;

// ------------------------------
// DATA SECTION
// ------------------------------
const sections = [
  {
    title: "Essential Nutrients for Plant Growth",
    image: "/8.jpeg",
    text: [
      "Plants require macro-nutrients like Nitrogen (N), Phosphorus (P), and Potassium (K) in large amounts.",
      "Micro-nutrients such as Zinc, Iron, Manganese, and Boron are needed in smaller amounts but are equally important."
    ]
  },
  {
    title: "Balanced Nutrition Improves Yield",
    image: "/10.jpeg",
    text: [
      "Correct nutrient balance strengthens roots, increases flowering, and boosts overall crop production.",
      "Proper nutrition also improves the quality of grains, fruits, and vegetables."
    ]
  },
  {
    title: "Soil Testing is the First Step",
    image: "/9.jpeg",
    text: [
      "Regular soil testing helps farmers understand nutrient deficiencies.",
      "It guides the right type and quantity of fertilizers to avoid wastage.",
      "Using the right fertilizer at the right time and in the right dosage increases nutrient uptake.",
      "Both organic (manure, compost) and inorganic fertilizers play a role in sustainable farming."
    ]
  },
  {
    title: "Role of Organic Matter",
    image: "/11.jpeg",
    text: [
      "Organic matter improves soil structure, water retention, and nutrient availability.",
      "Healthy soil microbes help break down organic matter and release nutrients.",
      "Biofertilizers (like Rhizobium, Azotobacter) enhance natural nutrient cycling."
    ]
  },
  {
    title: "Foliar Nutrition",
    image: "/13.jpeg",
    text: [
      "Spraying nutrients directly on leaves provides quick correction of deficiencies.",
      "Proper irrigation ensures nutrients reach plant roots effectively.",
      "Over-watering or under-watering can reduce nutrient uptake."
    ]
  },
  {
    title: "Crop Rotation & Residue Management",
    image: "/12.jpeg",
    text: [
      "Rotating crops maintains soil fertility and reduces nutrient depletion.",
      "Integrated Nutrient Management (INM) combines chemical, organic, and biological sources.",
      "This promotes long-term soil fertility and reduces environmental impact."
    ]
  }
];
