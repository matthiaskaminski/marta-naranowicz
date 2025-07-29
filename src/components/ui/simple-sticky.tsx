"use client";
import * as React from "react";

interface SimpleStickyProps {
    desktopImage: string;
    mobileImage: string;
}

const SimpleSticky: React.FC<SimpleStickyProps> = ({
    desktopImage,
    mobileImage,
}) => {
    const [scrollProgress, setScrollProgress] = React.useState(0);
    const containerRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current) return;
            
            const rect = containerRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            const containerHeight = containerRef.current.offsetHeight;
            
            // Oblicz progress gdy kontener jest widoczny
            if (rect.top <= 0 && rect.bottom >= windowHeight) {
                const progress = Math.abs(rect.top) / (containerHeight - windowHeight);
                setScrollProgress(Math.min(progress, 1));
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scale = 0.7 + (0.3 * scrollProgress);
    const width = 70 + (30 * scrollProgress);
    const height = 60 + (40 * scrollProgress);
    const borderRadius = 20 - (20 * scrollProgress);

    return (
        <div ref={containerRef} style={{ height: '200vh' }} className="relative w-full">
            <div 
                className="sticky top-0 w-full flex items-center justify-center"
                style={{ height: '100vh' }}
            >
                <div
                    className="relative overflow-hidden bg-black"
                    style={{
                        width: `${width}%`,
                        height: `${height}vh`,
                        borderRadius: `${borderRadius}px`,
                        transition: 'none'
                    }}
                >
                    <div
                        className="absolute inset-0"
                        style={{
                            transform: `scale(${scale})`,
                            transformOrigin: 'center center',
                            transition: 'none'
                        }}
                    >
                        {/* Mobile image */}
                        <div
                            className="absolute inset-0 md:hidden"
                            style={{
                                backgroundImage: `url(${mobileImage})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                                width: '100%',
                                height: '100%',
                            }}
                        />
                        {/* Desktop image */}
                        <div
                            className="absolute inset-0 hidden md:block"
                            style={{
                                backgroundImage: `url(${desktopImage})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                                width: '100%',
                                height: '100%',
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SimpleSticky;