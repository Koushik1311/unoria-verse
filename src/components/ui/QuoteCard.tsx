"use client";

import { quoteStyles } from "@/utils/quoteStyles";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import DOMPurify from "isomorphic-dompurify";

interface QuoteCardProps {
  quote: string; // Expected to be HTML with <p> tags
  author: string;
  type: keyof typeof quoteStyles;
  keyId: string;
}

export default function QuoteCard({
  quote,
  author,
  type,
  keyId,
}: QuoteCardProps) {
  const style = quoteStyles[type] || quoteStyles.motivation;
  const sanitized = DOMPurify.sanitize(quote);
  const lines = sanitized
    .split(/<\/p>/i)
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => line + "</p>");

  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const lineVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        opacity: { duration: 1, ease: "easeOut" },
        y: { duration: 0.8, ease: "easeOut" },
      },
    },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <main
      className={`relative min-h-screen flex items-center justify-center px-4 ${style.bg}`}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={keyId}
          className="relative z-10 text-center max-w-md mx-auto"
          variants={containerVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <motion.div variants={containerVariants} className="space-y-2">
            {lines.map((line, i) => (
              <motion.div
                key={i}
                className={`font-serif text-lg leading-relaxed ${style.text}`}
                variants={lineVariants}
                dangerouslySetInnerHTML={{ __html: line }}
              />
            ))}
          </motion.div>

          <motion.p
            className={`text-xs mt-4 tracking-widest uppercase font-light ${style.accent}`}
            variants={lineVariants}
          >
            {author}
          </motion.p>

          <motion.div
            variants={{
              initial: { opacity: 0, scale: 0.9 },
              animate: { opacity: 1, scale: 1 },
              exit: { opacity: 0, scale: 0.9 },
            }}
            transition={{
              delay: 0.6,
              duration: 1,
              ease: "easeOut",
            }}
          >
            <Image
              width={300}
              height={300}
              quality={100}
              src={style.flower}
              alt="flower"
              className="mx-auto mt-8 w-32 sm:w-40"
            />
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </main>
  );
}
