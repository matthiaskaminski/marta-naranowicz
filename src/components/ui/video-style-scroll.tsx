"use client";
import * as React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface VideoStyleScrollProps {
    desktopImage: string;
    mobileImage: string;
}

const VideoStyleScroll: React.FC<VideoStyleScrollProps> = ({
    desktopImage,
    mobileImage,
}) => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Większe skalowanie jak wcześniej
    const scale = useTransform(
        scrollYProgress,
        [0.2, 0.5, 0.8],
        [0.7, 0.85, 1]
    );

    // Szerokość i wysokość kontenera
    const width = useTransform(
        scrollYProgress,
        [0.2, 0.5, 0.8],
        ["70%", "85%", "100%"]
    );

    const height = useTransform(
        scrollYProgress,
        [0.2, 0.5, 0.8],
        ["60vh", "80vh", "100vh"]
    );

    // Border radius
    const borderRadius = useTransform(
        scrollYProgress,
        [0.2, 0.5, 0.8],
        ["20px", "10px", "0px"]
    );

    return (
        <section ref={containerRef} className="relative h-[200vh] w-full">
            <div className="sticky top-0 h-screen flex justify-center items-center w-full">
                <motion.div
                    className="relative overflow-hidden"
                    style={{
                        width,
                        height,
                        borderRadius,
                    }}
                >
                    <motion.div
                        className="absolute inset-0"
                        style={{
                            scale,
                            transformOrigin: "center center",
                        }}
                    >
                        {/* Mobile image */}
                        <div
                            className="absolute inset-0 md:hidden"
                            style={{
                                backgroundImage: `url(${mobileImage})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                            }}
                        />
                        {/* Desktop image */}
                        <div
                            className="absolute inset-0 hidden md:block"
                            style={{
                                backgroundImage: `url(${desktopImage})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                            }}
                        />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default VideoStyleScroll;