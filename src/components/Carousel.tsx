'use client';
import { motion, useTransform, useScroll } from 'framer-motion';
import { useRef } from 'react';

const Scroll = () => {
    return (
        <div className="bg-neutral-800 ml-64"> {}
            <div className="flex h-48 items-center justify-center">
                <span className="font-semibold uppercase text-neutral-500">
                    Featured
                </span>
            </div>
            <HorizontalScrollCarousel />
            <div className="flex h-48 items-center justify-center">
                <span className="font-semibold uppercase text-neutral-500">
                    Scroll Up
                </span>
            </div>
        </div>
    );
};

const HorizontalScrollCarousel = () => {
    const targetRef = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

    return (
        <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
            <div className="sticky top-0 flex h-[600px] items-center overflow-hidden">
                <motion.div style={{ x }} className="flex gap-4">
                    {cards.map((card) => {
                        return <Card card={card} key={card.id} />;
                    })}
                </motion.div>
            </div>
        </section>
    );
};

const Card = ({ card }: { card: CardType }) => {
    return (
        <div
            key={card.id}
            className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"
        >
            <div
                style={{
                    backgroundImage: `url(${card.url})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
            />
        </div>
    );
};

export default Scroll;

type CardType = {
    url: string;
    title: string;
    id: number;
};

const cards: CardType[] = [
    {
        url: "/Photos/Photo1.jpeg",
        title: "Photo1",
        id: 1,
    },
    {
        url: "/Photos/Photo2.jpeg",
        title: "Photo2",
        id: 2,
    },
    {
        url: "/Photos/Photo3.jpeg",
        title: "Photo3",
        id: 3,
    },
    {
        url: "/Photos/Photo4.jpeg",
        title: "Photo4",
        id: 4,
    },
    {
        url: "/Photos/Photo5.jpeg",
        title: "Photo5",
        id: 5,
    },
    {
        url: "/Photos/Photo6.jpeg",
        title: "Photo6",
        id: 6,
    }
];