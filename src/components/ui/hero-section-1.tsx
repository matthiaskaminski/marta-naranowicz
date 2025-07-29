'use client';

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ChevronRight, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { TestimonialsSection } from '@/components/blocks/testimonials-with-marquee'
import { GlowingEffect } from '@/components/ui/glowing-effect'
import { cn } from '@/lib/utils'
import { motion, useScroll, useTransform } from 'framer-motion'

const transitionVariants = {
    item: {
        hidden: {
            opacity: 0,
            filter: 'blur(12px)',
            y: 12,
        },
        visible: {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            transition: {
                type: 'spring' as const,
                bounce: 0.3,
                duration: 0.8,
            },
        },
    },
}


export function HeroSection() {
    return (
        <>
            <HeroHeader />
            {/* Sekcja z tekstem */}
            <div className="overflow-hidden">
                <div
                    aria-hidden
                    className="z-[2] absolute inset-0 pointer-events-none isolate opacity-50 contain-strict hidden lg:block">
                    <div className="w-[35rem] h-[80rem] -translate-y-[350px] absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
                    <div className="h-[80rem] absolute left-0 top-0 w-56 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
                    <div className="h-[80rem] -translate-y-[350px] absolute left-0 top-0 w-56 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
                </div>
                <section>
                    <div className="relative flex items-center justify-center h-[60vh]">
                        <div aria-hidden className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--background)_75%)]" />
                        <div className="mx-auto max-w-7xl px-6">
                            <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                                <AnimatedGroup variants={transitionVariants}>
                                    <Link
                                        href="#webinar"
                                        className="hover:bg-background dark:hover:border-t-border bg-muted group mx-auto flex w-fit items-center gap-4 rounded-full border p-1 pl-4 shadow-md shadow-black/5 transition-all duration-300 dark:border-t-white/5 dark:shadow-zinc-950">
                                        <span className="text-foreground text-sm">Poznaj mój webinar</span>
                                        <span className="dark:border-background block h-4 w-0.5 border-l bg-white dark:bg-zinc-700"></span>

                                        <div className="bg-background group-hover:bg-muted size-6 overflow-hidden rounded-full duration-500">
                                            <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                                                <span className="flex size-6">
                                                    <ArrowRight className="m-auto size-3" />
                                                </span>
                                                <span className="flex size-6">
                                                    <ArrowRight className="m-auto size-3" />
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                        
                                    <h1
                                        className="mt-8 max-w-4xl mx-auto text-balance text-6xl md:text-7xl lg:mt-16 xl:text-[5.25rem]">
                                        Sztuczna Inteligencja dla Twojego Biznesu
                                    </h1>
                                    <p
                                        className="mx-auto mt-8 max-w-2xl text-balance text-lg">
                                        Wykorzystaj moc AI do automatyzacji procesów, analizy danych i optymalizacji decyzji biznesowych.
                                    </p>
                                </AnimatedGroup>

                                <AnimatedGroup
                                    variants={{
                                        container: {
                                            visible: {
                                                transition: {
                                                    staggerChildren: 0.05,
                                                    delayChildren: 0.75,
                                                },
                                            },
                                        },
                                        ...transitionVariants,
                                    }}
                                    className="mt-12 flex flex-col items-center justify-center gap-2 md:flex-row">
                                    <div
                                        key={1}
                                        className="bg-foreground/10 rounded-[14px] border p-0.5">
                                        <Button
                                            asChild
                                            size="lg"
                                            className="rounded-xl px-5 text-base">
                                            <Link href="#o-mnie">
                                                <span className="text-nowrap">Więcej o mnie</span>
                                            </Link>
                                        </Button>
                                    </div>
                                </AnimatedGroup>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            
            
            {/* Obraz pod sekcją hero */}
            <AnimatedGroup
                variants={{
                    container: {
                        visible: {
                            transition: {
                                staggerChildren: 0.1,
                                delayChildren: 0.3,
                            },
                        },
                    },
                    ...transitionVariants,
                }}
                className="max-w-[1404px] mx-auto px-6 py-12">
                <div className="relative border border-white/20 rounded-2xl p-2 group">
                    <GlowingEffect
                        spread={40}
                        glow={true}
                        disabled={false}
                        proximity={64}
                        inactiveZone={0.01}
                        borderWidth={3}
                    />
                    <div 
                        className="absolute -inset-4 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                        style={{
                            background: 'radial-gradient(circle, rgba(181, 158, 95, 0.2) 0%, rgba(181, 158, 95, 0.1) 40%, transparent 70%)'
                        }}
                    ></div>
                    <img 
                        src="/4.png"
                        alt="Hero image"
                        className="w-full h-[720px] object-cover rounded-xl"
                    />
                </div>
            </AnimatedGroup>

            {/* Sekcja O mnie */}
            <section className="py-20 px-6">
                <div className="max-w-[1404px] mx-auto text-left">
                    <AnimatedGroup
                        variants={{
                            container: {
                                visible: {
                                    transition: {
                                        staggerChildren: 0.15,
                                        delayChildren: 0.2,
                                    },
                                },
                            },
                            ...transitionVariants,
                        }}
                        className="max-w-[600px] mx-auto text-left">
                        <h2 className="text-5xl mb-8" style={{color: '#F0F0F0', fontWeight: 600}}>O mnie</h2>
                        <p className="mb-2" style={{color: '#F0F0F0', fontSize: '16px'}}>
                            Marta Naranowicz – Ekspertka w dziedzinie AI, druku wielkoformatowego i strategii wizualnych
                        </p>
                        <p className="mb-16 leading-relaxed" style={{color: '#595959', fontSize: '14px'}}>
                            Z ponad 20-letnim doświadczeniem w branży designu i e-commerce, specjalizuję się w tworzeniu unikalnych kolekcji graficznych, wdrażaniu narzędzi AI w procesie projektowym i optymalizacji druku dla marek globalnych i lokalnych.
                            <br /><br />
                            Moja misja: Łączyć sztukę, technologię i strategie biznesowe, by tworzyć wyjątkowe doświadczenia wizualne.
                            <br />
                            Współpracowałam z markami takimi jak Canon, wspierając wdrażanie innowacji w branży dekoracji wnętrz i druku.
                        </p>
                    </AnimatedGroup>
                    
                    {/* 3 zdjęcia */}
                    <AnimatedGroup
                        variants={{
                            container: {
                                visible: {
                                    transition: {
                                        staggerChildren: 0.2,
                                        delayChildren: 0.4,
                                    },
                                },
                            },
                            ...transitionVariants,
                        }}
                        className="max-w-4xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="relative border border-white/20 rounded-2xl p-2 group">
                                <GlowingEffect
                                    spread={40}
                                    glow={true}
                                    disabled={false}
                                    proximity={64}
                                    inactiveZone={0.01}
                                    borderWidth={3}
                                />
                                <div 
                                    className="absolute -inset-4 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                                    style={{
                                        background: 'radial-gradient(circle, rgba(181, 158, 95, 0.2) 0%, rgba(181, 158, 95, 0.1) 40%, transparent 70%)'
                                    }}
                                ></div>
                                <img 
                                    src="/Zdjęcie 05-10-2021, 11 28 31.jpg"
                                    alt="Portrait 1"
                                    className="w-full h-[400px] object-cover rounded-xl "
                                />
                            </div>
                            <div className="relative border border-white/20 rounded-2xl p-2 group">
                                <GlowingEffect
                                    spread={40}
                                    glow={true}
                                    disabled={false}
                                    proximity={64}
                                    inactiveZone={0.01}
                                    borderWidth={3}
                                />
                                <div 
                                    className="absolute -inset-4 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                                    style={{
                                        background: 'radial-gradient(circle, rgba(181, 158, 95, 0.2) 0%, rgba(181, 158, 95, 0.1) 40%, transparent 70%)'
                                    }}
                                ></div>
                                <img 
                                    src="/Zdjęcie 26-01-2023, 09 44 30.jpg"
                                    alt="Portrait 2"
                                    className="w-full h-[400px] object-cover rounded-xl "
                                />
                            </div>
                            <div className="relative border border-white/20 rounded-2xl p-2 group">
                                <GlowingEffect
                                    spread={40}
                                    glow={true}
                                    disabled={false}
                                    proximity={64}
                                    inactiveZone={0.01}
                                    borderWidth={3}
                                />
                                <div 
                                    className="absolute -inset-4 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                                    style={{
                                        background: 'radial-gradient(circle, rgba(181, 158, 95, 0.2) 0%, rgba(181, 158, 95, 0.1) 40%, transparent 70%)'
                                    }}
                                ></div>
                                <img 
                                    src="/Zdjęcie 03-12-2024, 14 11 11 (12).jpg"
                                    alt="Portrait 3"
                                    className="w-full h-[400px] object-cover rounded-xl "
                                />
                            </div>
                        </div>
                    </AnimatedGroup>
                </div>
            </section>

            {/* Sekcja Testimonials */}
            <TestimonialsSection 
                title="Design spotyka zaufanie"
                description="Współpraca to dla mnie coś więcej niż realizacja projektu – to tworzenie wartości, która zostaje na długo. Każda opinia to dowód na to, że podejście łączące technologię i kreatywność działa."
                testimonials={[
                    {
                        author: {
                            name: "Damian Kowalski",
                            handle: "@damian_k",
                            avatar: "https://avatar.vercel.sh/damian"
                        },
                        text: "Hi Marta, thank you so much for all of your wonderful support! You do amazing work. As a newly new person to large format, you taught me so much and I am super grateful."
                    },
                    {
                        author: {
                            name: "Nathaniel Crona",
                            handle: "@nathaniel_crona",
                            avatar: "https://avatar.vercel.sh/nathaniel"
                        },
                        text: "Good morning Mrs. Naranowicz, Your ability and professionality with which you manage social media truly inspires me and I would love to meet you in person in the future if there will be the opportunity."
                    },
                    {
                        author: {
                            name: "Nelson Rogahn",
                            handle: "@nelsonRo",
                            avatar: "https://avatar.vercel.sh/nelson"
                        },
                        text: "Hello Marta, I have noticed my colleagues at Canon are talking warmly about you and your brand. I have seen your work and I must say I'm quite impressed of your applications that I truly see as quite unique."
                    },
                    {
                        author: {
                            name: "Archie Mohr",
                            handle: "@archie_m",
                            avatar: "https://avatar.vercel.sh/archie"
                        },
                        text: "Hello Marta, I am having lots of queries in the Asia Pacific region for your new wallpaper posts ... they look awesome!"
                    }
                ]}
            />

            {/* Sekcja Współpraca */}
            <section className="py-20 px-6">
                <div className="max-w-[1404px] mx-auto text-left">
                    <AnimatedGroup
                        variants={{
                            container: {
                                visible: {
                                    transition: {
                                        staggerChildren: 0.15,
                                        delayChildren: 0.2,
                                    },
                                },
                            },
                            ...transitionVariants,
                        }}
                        className="max-w-[600px] mx-auto text-left">
                        <h2 className="text-5xl mb-4" style={{color: '#F0F0F0', fontWeight: 600}}>Współpraca</h2>
                        <p className="mb-2" style={{color: '#F0F0F0', fontSize: '16px'}}>
                            Innowacja zaczyna się od dobrej współpracy.
                        </p>
                        <p className="mb-16 leading-relaxed" style={{color: '#595959', fontSize: '14px'}}>
                            Wierzę, że prawdziwa zmiana w biznesie i designie zaczyna się tam, gdzie technologia spotyka się z wizją. Dlatego każą kreujemy z najnowszymi narzędziami. A gdy potrzebna jest większa moc — wspieram branżę, prowadząc czy wykonuję marki, produktów i producentów w tworzeniu czegoś naprawdę wyjątkowego. Bez względu na to, czy chcesz urewnić proces produkcji, stworzyć unikalne wzory, czy wejść w świat AI — pomogę Ci znaleźć właściwe rozwiązanie.
                        </p>
                    </AnimatedGroup>
                    
                    {/* 3 kafelki współpracy */}
                    <AnimatedGroup
                        variants={{
                            container: {
                                visible: {
                                    transition: {
                                        staggerChildren: 0.25,
                                        delayChildren: 0.4,
                                    },
                                },
                            },
                            ...transitionVariants,
                        }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="relative group">
                            <div className="relative border border-white/20 rounded-2xl p-2">
                                <GlowingEffect
                                    spread={40}
                                    glow={true}
                                    disabled={false}
                                    proximity={64}
                                    inactiveZone={0.01}
                                    borderWidth={3}
                                />
                                <div 
                                    className="absolute -inset-4 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                                    style={{
                                        background: 'radial-gradient(circle, rgba(181, 158, 95, 0.2) 0%, rgba(181, 158, 95, 0.1) 40%, transparent 70%)'
                                    }}
                                ></div>
                                <img 
                                    src="/1.png"
                                    alt="Wzory i kolekcje"
                                    className="w-full h-[400px] object-cover rounded-xl "
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-xl pointer-events-none"></div>
                            <div className="absolute bottom-6 left-6 right-6">
                                <h3 className="text-xl font-bold mb-2" style={{color: '#F0F0F0'}}>Wzory i kolekcje</h3>
                                <p className="text-sm" style={{color: '#F0F0F0'}}>
                                    Tworzę dedykowane wzory i kolekcje AI – idealne dla tapert, obrażów, tkanin czy dekoracji. Współpracuję z projektantami wnętrz, architektami i markami, które chcą się wyróżnić.
                                </p>
                            </div>
                        </div>
                        
                        <div className="relative group">
                            <div className="relative border border-white/20 rounded-2xl p-2">
                                <GlowingEffect
                                    spread={40}
                                    glow={true}
                                    disabled={false}
                                    proximity={64}
                                    inactiveZone={0.01}
                                    borderWidth={3}
                                />
                                <div 
                                    className="absolute -inset-4 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                                    style={{
                                        background: 'radial-gradient(circle, rgba(181, 158, 95, 0.2) 0%, rgba(181, 158, 95, 0.1) 40%, transparent 70%)'
                                    }}
                                ></div>
                                <img 
                                    src="/2.png"
                                    alt="Optymalizacja druku"
                                    className="w-full h-[400px] object-cover rounded-xl "
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-xl pointer-events-none"></div>
                            <div className="absolute bottom-6 left-6 right-6">
                                <h3 className="text-xl font-bold mb-2" style={{color: '#F0F0F0'}}>Optymalizacja druku</h3>
                                <p className="text-sm" style={{color: '#F0F0F0'}}>
                                    Pomagam w optymalizacji procesu druku i dokretem w wykorzystaniu najnowocześniejszych maszyn AI w przesłonowanie głików, dostarczam co wytworzę technologie, optymalizację kosztów i procesy.
                                </p>
                            </div>
                        </div>
                        
                        <div className="relative group">
                            <div className="relative border border-white/20 rounded-2xl p-2">
                                <GlowingEffect
                                    spread={40}
                                    glow={true}
                                    disabled={false}
                                    proximity={64}
                                    inactiveZone={0.01}
                                    borderWidth={3}
                                />
                                <div 
                                    className="absolute -inset-4 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                                    style={{
                                        background: 'radial-gradient(circle, rgba(181, 158, 95, 0.2) 0%, rgba(181, 158, 95, 0.1) 40%, transparent 70%)'
                                    }}
                                ></div>
                                <img 
                                    src="/3.png"
                                    alt="Strategia i szkolenia"
                                    className="w-full h-[400px] object-cover rounded-xl "
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-xl pointer-events-none"></div>
                            <div className="absolute bottom-6 left-6 right-6">
                                <h3 className="text-xl font-bold mb-2" style={{color: '#F0F0F0'}}>Strategia i szkolenia</h3>
                                <p className="text-sm" style={{color: '#F0F0F0'}}>
                                    Wspieram firmy w ich przejściu cyfrowym — w szczególnie e-commerce i projektowaniu. Prowadzę webinary, warsztaty i doradztwo, jak technologia może realnie wpłynąć Twój biznes.
                                </p>
                            </div>
                        </div>
                    </AnimatedGroup>
                </div>
            </section>
        </>
    )
}

const menuItems = [
    { name: 'O mnie', href: '#o-mnie' },
    { name: 'Współpraca', href: '#wspolpraca' },
    { name: 'Webinar', href: '#webinar' },
    { name: 'Blog', href: '#blog' },
]

const HeroHeader = () => {
    const [menuState, setMenuState] = React.useState(false)
    const [isScrolled, setIsScrolled] = React.useState(false)

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    return (
        <header>
            <nav
                data-state={menuState && 'active'}
                className="fixed z-20 w-full px-2 group">
                <div className={cn('mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-12', isScrolled && 'bg-background/50 max-w-4xl rounded-2xl border backdrop-blur-lg lg:px-5')}>
                    <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
                        <div className="flex w-full justify-between lg:w-auto">
                            <Link
                                href="/"
                                aria-label="home"
                                className="flex items-center space-x-2">
                                <Logo />
                            </Link>

                            <button
                                onClick={() => setMenuState(!menuState)}
                                aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
                                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
                                <Menu className="in-data-[state=active]:rotate-180 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                                <X className="group-data-[state=active]:rotate-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
                            </button>
                        </div>

                        <div className="absolute inset-0 m-auto hidden size-fit lg:block">
                            <ul className="flex gap-8 text-sm">
                                {menuItems.map((item, index) => (
                                    <li key={index}>
                                        <Link
                                            href={item.href}
                                            className="text-muted-foreground hover:text-accent-foreground block duration-150">
                                            <span>{item.name}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-background group-data-[state=active]:block lg:group-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
                            <div className="lg:hidden">
                                <ul className="space-y-6 text-base">
                                    {menuItems.map((item, index) => (
                                        <li key={index}>
                                            <Link
                                                href={item.href}
                                                className="text-muted-foreground hover:text-accent-foreground block duration-150">
                                                <span>{item.name}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                                <Button
                                    asChild
                                    variant="outline"
                                    size="sm"
                                    className={cn(isScrolled && 'lg:hidden')}>
                                    <Link href="https://instagram.com" target="_blank">
                                        <span>Instagram</span>
                                    </Link>
                                </Button>
                                <Button
                                    asChild
                                    size="sm"
                                    className={cn(isScrolled && 'lg:hidden')}>
                                    <Link href="https://linkedin.com" target="_blank">
                                        <span>LinkedIn</span>
                                    </Link>
                                </Button>
                                <Button
                                    asChild
                                    size="sm"
                                    className={cn(isScrolled ? 'lg:inline-flex' : 'hidden')}>
                                    <Link href="#kontakt">
                                        <span>Kontakt</span>
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

const Logo = ({ className }: { className?: string }) => {
    return (
        <img
            src="/logo.svg"
            alt="Logo"
            className={cn('h-9 w-auto', className)}
        />
    )
}