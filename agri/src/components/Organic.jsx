import { motion } from "framer-motion";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";

export default function Organic() {
  return (
    <ParallaxProvider>
      <section id="organic-farming" className="w-full bg-[#0c0c0c] text-white py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
<div>
              <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* SMALL TITLE */}
            <p className="text-[#E6AB66] tracking-[6px] text-xl">
              ORGANIC FARMING
            </p>

            {/* DIVIDER */}
            <div className="flex gap-2 items-center">
              <span className="h-[1px] w-8 bg-[#E6AB66]"></span>
              <span className="text-[#E6AB66] text-lg">✦</span>
              <span className="h-[1px] w-8 bg-[#E6AB66]"></span>
            </div>

            {/* MAIN HEADING */}
            <h2 className="text-4xl leading-tight text-[#E6AB66]">
             Organic farming is not just a method of growing crops — it’s a promise to protect the earth and nourish life.”
            </h2>

            {/* PARAGRAPH */}
            <p className="text-white leading-relaxed text-lg">
Organic farming is a sustainable approach to agriculture that focuses on nurturing the soil, protecting the environment, and producing healthier crops without the use of synthetic chemicals. By relying on natural fertilizers, crop rotation, composting, and biological pest control, organic farming strengthens soil fertility and promotes biodiversity. This method not only enhances the nutritional value of produce but also supports long-term ecological balance. Organic farming empowers farmers to work in harmony with nature, ensuring cleaner food, healthier soils, and a greener future for generations to come.
            </p>


            {/* BUTTON */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="mt-4 border border-[#E6AB66] text-[#E6AB66] px-8 py-3 text-sm tracking-widest"
            >
              READ MORE
            </motion.button>
          </motion.div>
</div>

          {/* RIGHT IMAGES */}
          <div className="relative">

            {/* BADGE */}
            <motion.div
              initial={{ opacity: 0, rotate: -20 }}
              whileInView={{ opacity: 1, rotate: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              viewport={{ once: true }}
              className="absolute -top-5 right-5 z-20"
            >
              <img
                src="./15.jpeg"
                alt="badge"
                className="w-56 opacity-90 rounded-xl"
              />
            </motion.div>

            {/* MAIN IMAGE (PARALLAX) */}
            <Parallax speed={-10}>
              <motion.img
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: true }}
                src="./14.jpeg"
                className="w-full h-[620px] object-cover rounded-xl"
              />
            </Parallax>

            {/* SMALL IMAGE OVERLAY */}
            <Parallax speed={5}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.7 }}
                viewport={{ once: true }}
                className="absolute -bottom-20 left-10"
              >
                {/* Gold pattern */}
                <div className="text-[#E6AB66] text-xs text-center tracking-widest mb-2">
                  ✦✦✦✦✦✦✦✦✦
                </div>

                <img
                  src="./16.jpeg"
                  className="w-[350px] h-[240px] object-cover rounded-xl"
                  alt="Chef"
                />
              </motion.div>
            </Parallax>
          </div>
        </div>
      </section>
    </ParallaxProvider>
  );
}
