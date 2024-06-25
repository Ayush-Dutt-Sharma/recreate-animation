import React ,{useState, useEffect} from "react"
import { motion } from 'framer-motion';
import './timer-accordion.css'

let features = [{
  index: 1,
  name: "UI/UX Design",
  description: "Our UI/UX Design service crafts engaging digital experiences that align with your brand.",
  // image: "/images/mobile-img.webp",
  // svg: (0, o.jsx)(g.I, {
  //     type: "UIUX"
  // })
}, {
  index: 2,
  name: "Brand Identity",
  description: "Our team creates compelling brand identities that communicate your message with your target audience.",
  // image: "/images/mobile-img.webp",
  // svg: (0, o.jsx)(g.I, {
  //     type: "man_female_puzzle"
  // })
}, {
  index: 3,
  name: "Mobile Development",
  description: "We deliver user-friendly apps with engaging interfaces and seamless functionality across platforms.",
  // image: "/images/mobile-img.webp",
  // svg: (0, o.jsx)(g.I, {
      // type: "Mobileusing"
  // })
}, {
  index: 4,
  name: "Web Development",
  description: "Our team create responsive websites with sleek designs and optimised performance to enhance user experience.",
  // image: "/images/mobile-img.webp",
  // svg: (0, o.jsx)(g.I, {
  //     type: "WebDevelopment"
  // })
}]

function F() {
  const [currentIndex, setCurrentIndex] = useState(1);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setCurrentIndex(currentIndex < 4 ? currentIndex + 1 : 1);
    }, 6000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [currentIndex]);
  return <div style={{margin:"0 200px"}}>
  <motion.ol className="list-none mt-10 max-w-xl text-base leading-7 lg:max-w-none">
      {features.map(feature => (
        <motion.li className="relative features-item" key={feature.name}>
          <motion.div className="py-2">
            <motion.div className="relative flex justify-between cursor-pointer">
              <h2
                className={`feature-title ${feature.index === currentIndex ? "text-black" : "text-[#535353]"}`}
                onClick={() => setCurrentIndex(feature.index)}
              >
                <span className="inline-flex mr-4 text-lg">{feature.index}. </span>
                {feature.name}
              </h2>
              {feature.index === currentIndex && (
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#000"
                  className="w-6 h-6 cursor-pointer"
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                </motion.svg>
              )}
            </motion.div>
            {feature.index === currentIndex && (
              <p className="text-lg text-[#888888] font-sans pl-6 pt-2 ml-1 w-3/4">
                {feature.description}
              </p>
            )}
            <svg className="w-full h-1 mt-4">
              {feature.index === currentIndex && (
                <motion.line
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                  strokeWidth={4.5}
                  stroke="#000"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ type: "tween", duration: 5 }}
                  className="z-10"
                />
              )}
              <line x1="0%" y1="0%" x2="100%" y2="0%" strokeWidth={2.5} stroke="#d6d6d6" />
            </svg>
          </motion.div>
        </motion.li>
      ))}
    </motion.ol>
    </div>

          }
export default F
