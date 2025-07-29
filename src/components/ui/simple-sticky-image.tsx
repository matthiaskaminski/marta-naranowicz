"use client";
import * as React from "react";

interface SimpleStickyImageProps {
    desktopImage: string;
    mobileImage: string;
}

const SimpleStickyImage: React.FC<SimpleStickyImageProps> = ({
    desktopImage,
    mobileImage,
}) => {
    const [scale, setScale] = React.useState(0.7);
    const [borderRadius, setBorderRadius] = React.useState(20);
    const [padding, setPadding] = React.useState(60);
    
    React.useEffect(() => {
        const handleScroll = () => {
            const element = document.getElementById('sticky-image-container');
            if (!element) return;
            
            const rect = element.getBoundingClientRect();
            const parentRect = element.parentElement?.getBoundingClientRect();
            
            if (!parentRect) return;
            
            // Oblicz progress bazując na pozycji elementu
            const progress = Math.max(0, Math.min(1, 
                (parentRect.top * -1) / (parentRect.height - window.innerHeight)
            ));
            
            // Aktualizuj wartości
            setScale(0.7 + (0.3 * progress));
            setBorderRadius(20 - (20 * progress));
            setPadding(60 - (60 * progress));
        };
        
        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Początkowe wywołanie
        
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="relative h-[200vh]">
            {/* Sticky container */}
            <div 
                id="sticky-image-container"
                className="sticky top-0 h-screen w-full overflow-hidden"
                style={{
                    padding: `${padding}px`,
                    transition: 'none',
                }}
            >
                <div 
                    className="relative w-full h-full overflow-hidden bg-black"
                    style={{
                        borderRadius: `${borderRadius}px`,
                        transition: 'none',
                    }}
                >
                    <div
                        className="absolute inset-0"
                        style={{
                            transform: `scale(${scale})`,
                            transformOrigin: 'center center',
                            transition: 'none',
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
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SimpleStickyImage;