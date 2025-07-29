"use client";
import * as React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface FixedScrollImageProps {
    desktopImage: string;
    mobileImage: string;
}

const FixedScrollImage: React.FC<FixedScrollImageProps> = ({
    desktopImage,
    mobileImage,
}) => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const [isInView, setIsInView] = React.useState(false);
    
    const { scrollY } = useScroll();
    
    React.useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current) return;
            
            const rect = containerRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            
            // Sprawdź czy kontener jest w widoku
            const inView = rect.top <= 0 && rect.bottom > windowHeight;
            setIsInView(inView);
        };
        
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Animacje bazujące na pozycji scroll
    const progress = useTransform(scrollY, (value) => {
        if (!containerRef.current) return 0;
        
        const rect = containerRef.current.getBoundingClientRect();
        const containerTop = rect.top + value;
        const scrollStart = containerTop - window.innerHeight;
        const scrollEnd = containerTop + containerRef.current.offsetHeight;
        
        if (value < scrollStart) return 0;
        if (value > scrollEnd) return 1;
        
        return (value - scrollStart) / (scrollEnd - scrollStart);
    });

    const imageScale = useTransform(progress, [0.2, 0.8], [0.7, 1]);
    const clipPath = useTransform(
        progress,
        [0.2, 0.5, 0.8],
        [
            "inset(15% 15% 15% 15%)",
            "inset(8% 8% 8% 8%)", 
            "inset(0% 0% 0% 0%)"
        ]
    );

    return (
        <div ref={containerRef} className="relative h-[200vh]">
            {/* Gdy element jest w widoku, pokazuj sticky image */}
            {isInView && (
                <div className="fixed inset-0 z-10">
                    <motion.div
                        className="w-full h-full"
                        style={{
                            clipPath,
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
            )}
        </div>
    );
};

export default FixedScrollImage;