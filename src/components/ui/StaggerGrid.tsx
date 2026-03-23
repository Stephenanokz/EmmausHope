"use client";

import { Children, type ReactNode } from "react";
import { LazyMotion, domAnimation, m, useReducedMotion } from "framer-motion";

type StaggerGridProps = {
  children: ReactNode;
  className?: string;
};

export function StaggerGrid({ children, className }: StaggerGridProps) {
  const reduceMotion = useReducedMotion();

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        className={className}
        initial={reduceMotion ? false : "hidden"}
        whileInView={reduceMotion ? undefined : "visible"}
        viewport={reduceMotion ? undefined : { once: true, amount: 0.18 }}
        variants={reduceMotion ? undefined : {
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        {Children.map(children, (child, index) => (
          <m.div
            key={index}
            variants={reduceMotion ? undefined : {
              hidden: { opacity: 0, y: 24 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={reduceMotion ? undefined : { duration: 0.45, ease: "easeOut" }}
          >
            {child}
          </m.div>
        ))}
      </m.div>
    </LazyMotion>
  );
}