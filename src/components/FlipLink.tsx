'use client';
import React from "react";
import { motion } from "framer-motion";

export const FlipLink = () => {
    return (
        <section className="fixed left-0 top-0 h-screen w-64 flex flex-col justify-center gap-2 bg-sky-400 px-8 text-black">
            <RevealLinks href="#">Home</RevealLinks>
            <RevealLinks href="#">Featured</RevealLinks>
            <RevealLinks href="#">Projects</RevealLinks>
            <RevealLinks href="#">Contact</RevealLinks>
        </section>
    );
};

const DURATION = 0.25;
const STAGGER = 0.025;

const RevealLinks = ({ children, href }: { children: string; href: string }) => {
    return (
        <motion.a
            initial="initial"
            whileHover="hovered"
            href={href}
            className="relative block overflow-hidden whitespace-nowrap text-2xl font-black uppercase"
            style={{
                lineHeight: 0.75,
            }}
        >
            <div>
                {children.split("").map((l, i) => (
                    <motion.span
                        variants={{
                            initial: {
                                y: 0,
                            },
                            hovered: {
                                y: "-100%",
                            },
                        }}
                        transition={{
                            duration: DURATION,
                            ease: "easeInOut",
                            delay: STAGGER * i,
                        }}
                        className="inline-block"
                        key={i}
                    >
                        {l}
                    </motion.span>
                ))}
            </div>
            <div className="absolute inset-0">
                {children.split("").map((l, i) => (
                    <motion.span
                        variants={{
                            initial: {
                                y: "100%",
                            },
                            hovered: {
                                y: 0,
                            },
                        }}
                        transition={{
                            duration: DURATION,
                            ease: "easeInOut",
                            delay: STAGGER * i,
                        }}
                        className="inline-block"
                        key={i}
                    >
                        {l}
                    </motion.span>
                ))}
            </div>
        </motion.a>
    );
};