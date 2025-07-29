"use client";
import * as React from "react";

import {
    motion,
    useMotionTemplate,
    useScroll,
    useTransform,
} from "framer-motion";

interface ISmoothScrollHeroProps {
    /**
     * Height of the scroll section in pixels
     * @default 1500
     */
    scrollHeight: number;
    /**
     * Background image URL for desktop view
     * @default "https://images.unsplash.com/photo-1511884642898-4c92249e20b6"
     */
    desktopImage: string;
    /**
     * Background image URL for mobile view
     * @default "https://images.unsplash.com/photo-1511207538754-e8555f2bc187?q=80&w=2412&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
     */
    mobileImage: string;
    /**
     * Initial clip path percentage
     * @default 25
     */
    initialClipPercentage: number;
    /**
     * Final clip path percentage
     * @default 75
     */
    finalClipPercentage: number;
}

interface ISmoothScrollHeroBackgroundProps extends ISmoothScrollHeroProps {}

const SmoothScrollHeroBackground: React.FC<
    ISmoothScrollHeroBackgroundProps
> = ({
    scrollHeight,
    desktopImage,
    mobileImage,
    initialClipPercentage,
    finalClipPercentage,
}) => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const clipStart = useTransform(
        scrollYProgress,
        [0, 1],
        [initialClipPercentage, 0],
    );
    const clipEnd = useTransform(
        scrollYProgress,
        [0, 1],
        [finalClipPercentage, 100],
    );

    const clipPath = useMotionTemplate`polygon(${clipStart}% ${clipStart}%, ${clipEnd}% ${clipStart}%, ${clipEnd}% ${clipEnd}%, ${clipStart}% ${clipEnd}%)`;

    const backgroundSize = useTransform(
        scrollYProgress,
        [0, 1],
        ["170%", "100%"],
    );

    return (
        <div ref={containerRef} className="relative w-full" style={{ height: `${scrollHeight}px` }}>
            <motion.div
                className="sticky top-0 h-screen w-full bg-black"
                style={{
                    clipPath,
                    willChange: "transform, opacity",
                }}
            >
                {/* Mobile background */}
                <motion.div
                    className="absolute inset-0 md:hidden"
                    style={{
                        backgroundImage: `url(${mobileImage})`,
                        backgroundSize,
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }}
                />
                {/* Desktop background */}
                <motion.div
                    className="absolute inset-0 hidden md:block"
                    style={{
                        backgroundImage: `url(${desktopImage})`,
                        backgroundSize,
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }}
                />
            </motion.div>
        </div>
    );
};

/**
 * A smooth scroll hero component with parallax background effect
 * @param props - Component props
 * @returns React component
 */
const SmoothScrollHero: React.FC<ISmoothScrollHeroProps> = ({
    scrollHeight = 1500,
    desktopImage = "https://images.unsplash.com/photo-1511884642898-4c92249e20b6",
    mobileImage = "https://images.unsplash.com/photo-1511207538754-e8555f2bc187?q=80&w=2412&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    initialClipPercentage = 25,
    finalClipPercentage = 75,
}) => {
    return (
        <SmoothScrollHeroBackground
            scrollHeight={scrollHeight}
            desktopImage={desktopImage}
            mobileImage={mobileImage}
            initialClipPercentage={initialClipPercentage}
            finalClipPercentage={finalClipPercentage}
        />
    );
};

export default SmoothScrollHero;