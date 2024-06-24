import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import classNames from "classnames";
import "./claude-type.css"

let u = [
  "Become Billionare",
  "Your wife left",
  "Get AI Girlfriend",
  "Stephen Hawking",
  "Your mother",
  
  "You are alone",
  // "Analyze complex data",
  // "Collect your thoughts",
  // "Deepen understanding",
  // "Think visually",
  // "Find your flow",
  // "Think more broadly",
  // "Discover opportunities",
  // "Learn something new",
];
function App() {
  const [currentText, setCurrentText] = useState(u[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prevText) => {
        const nextIndex = (u.indexOf(prevText) + 1) % u.length;
        return u[nextIndex];
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{marginTop:'50px'}}>
      <h1 className="flex  flex-col  gap-[0.3em]  sm:gap-[0.15em]  items-center  text-center  text-text-200  tracking-tighter  font-copernicus    min-[380px]:mt-8  2xl:mt-14  break-words  leading-[1em]  text-[clamp(1rem,8vw,3.75rem)]  [&_span]:[backface-visibility:hidden]">
        <DynamicText text={currentText} />
        <div className="flex gap-[0.2em]">
          <div className="whitespace-nowrap">with</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 139 34"
            className="-mt-[0.0225em]"
            height="0.85em"
            fill="currentColor"
            aria-label="Claude"
          >
            <path d="M18.07 30.79c-5.02 0-8.46-2.8-10.08-7.11a19.2 19.2 0 0 1-1.22-7.04C6.77 9.41 10 4.4 17.16 4.4c4.82 0 7.78 2.1 9.48 7.1h2.06l-.28-6.9c-2.88-1.86-6.48-2.81-10.87-2.81-6.16 0-11.41 2.77-14.34 7.74A16.77 16.77 0 0 0 1 18.2c0 5.53 2.6 10.42 7.5 13.15a17.51 17.51 0 0 0 8.74 2.06c4.78 0 8.57-.91 11.93-2.5l.87-7.62h-2.1c-1.26 3.48-2.76 5.57-5.25 6.68-1.22.55-2.76.83-4.62.83Zm21.65-26.4.2-3.39H38.5l-6.33 1.9v1.02l2.8 1.3v23.79c0 1.62-.82 1.98-3 2.25V33h10.75v-1.74c-2.17-.27-3-.63-3-2.25V4.4Zm42.75 29h.83l7.27-1.38v-1.78l-1.03-.07c-1.7-.16-2.13-.52-2.13-1.9V15.58l.2-4.07h-1.15l-6.87.99v1.73l.67.12c1.85.28 2.4.8 2.4 2.1v11.3C80.9 29.13 79.2 30 77.19 30c-2.26 0-3.64-1.15-3.64-3.8V15.58l.2-4.07h-1.19l-6.87.99v1.73l.71.12c1.86.28 2.41.8 2.41 2.1v10.43c0 4.42 2.49 6.52 6.48 6.52 3.04 0 5.53-1.62 7.39-3.88l-.2 3.88Zm-20-14.06c0-5.65-3-7.82-8.4-7.82-4.79 0-8.27 1.97-8.27 5.25 0 1 .36 1.74 1.07 2.25l3.64-.47c-.16-1.1-.24-1.78-.24-2.05 0-1.86.99-2.8 3-2.8 2.97 0 4.47 2.09 4.47 5.44v1.11l-7.51 2.25c-2.49.67-3.91 1.27-4.86 2.65a5 5 0 0 0-.71 2.8c0 3.2 2.21 5.46 5.97 5.46 2.72 0 5.13-1.23 7.23-3.56.75 2.33 1.9 3.56 3.95 3.56 1.66 0 3.16-.68 4.5-1.98l-.4-1.38c-.59.16-1.14.23-1.73.23-1.15 0-1.7-.9-1.7-2.68v-8.26Zm-9.6 10.87c-2.05 0-3.31-1.19-3.31-3.28 0-1.43.67-2.26 2.1-2.73l6.08-1.94v5.85c-1.94 1.46-3.08 2.1-4.86 2.1Zm63.3 1.81v-1.78l-1.02-.07c-1.7-.16-2.14-.52-2.14-1.9V4.4l.2-3.4h-1.42l-6.32 1.9v1.02l2.8 1.3v7.83a8.84 8.84 0 0 0-5.37-1.54c-6.28 0-11.18 4.78-11.18 11.93 0 5.89 3.51 9.96 9.32 9.96 3 0 5.61-1.47 7.23-3.72l-.2 3.72h.83l7.27-1.39Zm-13.15-18.13c3 0 5.25 1.74 5.25 4.94v9a7.2 7.2 0 0 1-5.21 2.1c-4.31 0-6.48-3.4-6.48-7.94 0-5.1 2.48-8.1 6.44-8.1Zm28.52 4.5c-.55-2.64-2.17-4.15-4.42-4.15-3.36 0-5.7 2.53-5.7 6.17 0 5.37 2.85 8.85 7.44 8.85a8.6 8.6 0 0 0 7.38-4.35l1.35.36c-.6 4.66-4.82 8.14-10 8.14-6.08 0-10.27-4.5-10.27-10.9 0-6.45 4.54-11 10.63-11 4.54 0 7.74 2.73 8.77 7.48l-15.84 4.85V21.7l10.66-3.32Z"></path>
          </svg>
        </div>
      </h1>
    </div>
  );
}

const DynamicText = (e) => {
  const variants = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.025,
      },
    },
  };
  let { text: t } = e;
  let n = Array.from(t);
  let r = {
    hidden: {
      opacity: 0,
      translateY: -5,
      scale: 1.075,
    },
    show: {
      opacity: 1,
      translateY: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 860,
        damping: 38,
        mass: 1,
        opacity: {
          ease: "easeOut",
          duration: 0.1,
        },
      },
    },
  };
  return (
    <>
      <div aria-label={t} key={t}>
        <motion.div
          aria-hidden="true"
          variants={variants}
          initial="hidden"
          animate="show"
        >
          {n.map((e, t) => (
            <motion.span
              key={t}
              className={classNames(e !== " " && "inline-block")}
              variants={r}
            >
              {e}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default App;
