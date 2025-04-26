"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
  stack: string[];
  link?: string;
};

const tailwindColors = {
  red: "bg-red-500 text-red-200",
  blue: "bg-blue-500 text-blue-200",
  green: "bg-green-500 text-green-200",
  yellow: "bg-yellow-500 text-yellow-200",
  purple: "bg-purple-500 text-purple-200",
  pink: "bg-pink-500 text-pink-200",
  indigo: "bg-indigo-500 text-indigo-200",
  teal: "bg-teal-500 text-teal-200",
  orange: "bg-orange-500 text-orange-200",
};

type TailwindColorKeys = keyof typeof tailwindColors;

function getRandomTailwindBaseColor(): TailwindColorKeys {
  const colors = Object.keys(tailwindColors) as TailwindColorKeys[];
  return colors[Math.floor(Math.random() * colors.length)];
}

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };
  return (
    <div className="max-w-sm md:max-w-7xl mx-auto antialiased font-sans px-4 md:px-8 lg:px-12 py-20">
      <div className="relative grid grid-cols-1 md:grid-cols-2  gap-20">
        <div>
          <div className="relative h-80 w-full">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.src}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: randomRotateY(),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : randomRotateY(),
                    zIndex: isActive(index)
                      ? 999
                      : testimonials.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: randomRotateY(),
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-bottom"
                >
                  <Image
                    src={testimonial.src}
                    alt={testimonial.name}
                    width={500}
                    height={500}
                    draggable={false}
                    className="h-full w-full rounded-3xl object-cover object-center"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        <div className="flex justify-between flex-col py-4">
          <motion.div
            key={active}
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
          >
            <h3 className="text-2xl font-bold dark:text-white text-black">
              {testimonials[active].link ? (
                <a
                  href={testimonials[active].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-blue-600 dark:text-blue-400"
                >
                  {testimonials[active].name} {"   "}👈
                </a>
              ) : (
                testimonials[active].name
              )}
            </h3>
            <p className="text-sm text-gray-500 dark:text-neutral-500">
              {testimonials[active].designation}
            </p>
            <motion.p className="text-lg text-gray-500 mt-8 dark:text-neutral-300">
              {testimonials[active].quote.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{
                    filter: "blur(10px)",
                    opacity: 0,
                    y: 5,
                  }}
                  animate={{
                    filter: "blur(0px)",
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.02 * index,
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
            <motion.div className="flex flex-wrap gap-2 mt-6">
              Tech Stack :{" "}
              {testimonials[active].stack.map((stack, index) => {
                const color = getRandomTailwindBaseColor();
                const colorClasses = tailwindColors[color as TailwindColorKeys];

                return (
                  <Badge key={index} className={colorClasses}>
                    {stack}
                  </Badge>
                );
              })}
            </motion.div>
          </motion.div>
          <div className="flex gap-4 pt-12 md:pt-0 items-center justify-center mt-3">
            <button
              aria-label="Previous"
              type="button"
              onClick={handlePrev}
              className="h-12 w-48 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center group/button"
            >
              <IconArrowLeft className="h-5 w-5 text-black dark:text-neutral-400 group-hover/button:rotate-12 transition-transform duration-300" />
            </button>
            <button
              aria-label="Next"
              type="button"
              onClick={handleNext}
              className="h-12 w-48 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center group/button"
            >
              <IconArrowRight className="h-5 w-5 text-black dark:text-neutral-400 group-hover/button:-rotate-12 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
