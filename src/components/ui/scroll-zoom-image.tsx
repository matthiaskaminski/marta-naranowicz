"use client";
import * as React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ScrollZoomImageProps {
    desktopImage: string;
    mobileImage: string;
}

const ScrollZoomImage: React.FC<ScrollZoomImageProps> = ({
    desktopImage,
    mobileImage,
}) => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const [isStuck, setIsStuck] = React.useState(false);
    
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Monitoruj kiedy element dochodzi do góry
    React.useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Sprawdź czy górna krawędź elementu dotyka góry viewportu
                const rect = entry.target.getBoundingClientRect();
                if (rect.top <= 1 && rect.bottom > window.innerHeight / 2) {
                    setIsStuck(true);
                } else {
                    setIsStuck(false);
                }
            },
            {
                threshold: [0, 0.1, 0.5, 0.9, 1],
                rootMargin: "-1px 0px 0px 0px"
            }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, []);

    // Animacje bazujące na scroll progress
    const imageScale = useTransform(
        scrollYProgress,
        [0.3, 0.5, 0.7],
        [0.8, 0.9, 1]
    );

    const containerWidth = useTransform(
        scrollYProgress,
        [0.3, 0.5, 0.7],
        ["80%", "90%", "100%"]
    );

    const containerHeight = useTransform(
        scrollYProgress,
        [0.3, 0.5, 0.7],
        ["70vh", "85vh", "100vh"]
    );

    const borderRadius = useTransform(
        scrollYProgress,
        [0.3, 0.5, 0.7],
        ["20px", "10px", "0px"]
    );

    return (
        <div className="relative h-[250vh]">
            <div
                ref={containerRef}
                className={`${isStuck ? 'sticky' : 'relative'} top-0 h-screen flex items-center justify-center`}
            >
                <motion.div
                    className="relative overflow-hidden"
                    style={{
                        width: containerWidth,
                        height: containerHeight,
                        borderRadius,
                    }}
                >
                    <motion.div
                        className="absolute inset-0"
                        style={{
                            scale: imageScale,
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
        </div>
    );
};

export default ScrollZoomImage;