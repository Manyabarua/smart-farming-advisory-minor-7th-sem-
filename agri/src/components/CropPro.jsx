import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Parallax } from "react-scroll-parallax";

export default function CropPro() {
  return (
    <section id="crop-protection" className="w-full bg-[#0c0c0c] text-white py-20 px-6 overflow-hidden">

      {/* TOP TEXT */}
      <motion.div
        className="text-center max-w-6xl mx-auto mb-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <p className="text-[#E6AB66] tracking-[6px] text-2xl mb-3 uppercase">
          Crop Protection
        </p>

        <div className="flex justify-center mb-4">
          <div className="flex items-center gap-2">
            <span className="h-[1px] w-8 bg-[#E6AB66]"></span>
            <span className="text-[#E6AB66] text-lg">✦</span>
            <span className="h-[1px] w-8 bg-[#E6AB66]"></span>
          </div>
        </div>

        <p className="text-white leading-relaxed text-lg">
          Crop protection is essential for ensuring healthy plant growth,
          improving yields, and safeguarding the farmer’s hard work. By
          preventing damage from pests, diseases, weeds, and environmental
          stress, crop protection methods help maintain the quality and quantity
          of produce. Modern agriculture uses a balanced approach that combines
          traditional practices, biological solutions, and safe, science-backed
          crop protection products to keep fields productive and sustainable.
        </p>
      </motion.div>

      {/* GRID */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 text-center">

        {/* CARD 1 */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Parallax speed={-10}>
            <img
              src="/5.jpeg"
              className="w-full h-[350px] object-cover rounded-xl"
              alt="Price Forecasting"
            />
          </Parallax>

          <h3 className="text-2xl mt-6">Weather App</h3>
          <Link to={'https://agrocast-weather-backend.onrender.com/'} target="_blank" className="text-[#E6AB66] text-xs tracking-[3px] mt-3">
            VIEW MORE
          </Link>
        </motion.div>

        {/* CARD 2 */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <Parallax speed={-8}>
            <img
              src="/6.jpeg"
              className="w-full h-[350px] object-cover rounded-xl"
              alt="Crop Recommendation"
            />
          </Parallax>

          <h3 className="text-2xl mt-6">Crop Recommendation</h3>
          <Link to={'https://crop-recommendation-system-frontend.vercel.app/'} target="_blank" className="text-[#E6AB66] text-xs tracking-[3px] mt-3">
            VIEW MORE
          </Link>
        </motion.div>

        {/* CARD 3 */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Parallax speed={-6}>
            <img
              src="/7.jpeg"
              className="w-full h-[350px] object-cover rounded-xl"
              alt="Crop Disease"
            />
          </Parallax>

          <h3 className="text-2xl mt-6">Crop Disease</h3>
          <Link to={'https://crop-disease-prediction-and-prevent.vercel.app/'} target="_blank" className="text-[#E6AB66] text-xs tracking-[3px] mt-3">
            VIEW MORE
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
