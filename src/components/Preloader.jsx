import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Preloader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1700);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-noir text-ivory"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative block h-24 w-24 overflow-hidden rounded-full"
          >
            <img
              src="/images/fb-profile.png"
              alt=""
              width={96}
              height={96}
              className="h-full w-full object-cover"
            />
          </motion.span>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 overflow-hidden text-center"
          >
            <span className="block font-serif text-3xl font-light italic md:text-4xl">
              Flowers &amp; The City
            </span>
            <span className="label-caps mt-3 block !text-[0.56rem] text-goldlight">
              where the city blooms
            </span>
          </motion.div>
          <motion.span
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.3, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 block h-px w-40 origin-left bg-goldlight/60"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
