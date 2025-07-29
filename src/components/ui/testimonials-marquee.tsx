"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useState } from "react";

const testimonials = [
  {
    name: "Damian Kowalski",
    username: "@damian_k",
    body: "Hi Marta, thank you so much for all of your wonderful support! You do amazing work. As a newly new person to large format, you taught me so much and I am super grateful.",
    img: "https://avatar.vercel.sh/damian",
  },
  {
    name: "Nathaniel Crona",
    username: "@nathaniel_crona",
    body: "Good morning Mrs. Naranowicz, Your ability and professionality with which you manage social media truly inspires me and I would love to meet you in person in the future if there will be the opportunity.",
    img: "https://avatar.vercel.sh/nathaniel",
  },
  {
    name: "Nelson Rogahn",
    username: "@nelsonRo",
    body: "Hello Marta, I have noticed my colleagues at Canon are talking warmly about you and your brand. I have seen your work and I must say I'm quite impressed of your applications that I truly see as quite unique.",
    img: "https://avatar.vercel.sh/nelson",
  },
  {
    name: "Archie Mohr",
    username: "@archie_m",
    body: "Hello Marta, I am having lots of queries in the Asia Pacific region for your new wallpaper posts ... they look awesome!",
    img: "https://avatar.vercel.sh/archie",
  },
];

const TestimonialCard = ({ name, username, body, img }: {
  name: string;
  username: string;
  body: string;
  img: string;
}) => {
  return (
    <figure className="relative w-80 cursor-pointer overflow-hidden mx-3 bg-black/60 rounded-2xl border border-white/20 p-4">
      <div className="flex flex-row items-center gap-2 mb-3">
        <img className="rounded-full" width="40" height="40" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-base font-medium" style={{color: '#F0F0F0'}}>
            {name}
          </figcaption>
          <p className="text-sm font-medium" style={{color: '#595959'}}>{username}</p>
        </div>
      </div>
      <blockquote className="text-sm leading-relaxed" style={{color: '#595959'}}>{body}</blockquote>
    </figure>
  );
};

export function TestimonialsMarquee() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section className="py-20">
      <div className="max-w-[1404px] mx-auto px-6 text-center">
        <div className="max-w-[520px] mx-auto text-left">
          <h2 className="text-5xl font-bold mb-4" style={{color: '#F0F0F0'}}>Design spotyka zaufanie</h2>
          <p className="text-lg mb-16" style={{color: '#595959'}}>
            Współpraca to dla mnie coś więcej niż realizacja projektu – to tworzenie wartości, która zostaje na długo. Każda opinia to dowód na to, że podejście łączące technologię i kreatywność działa.
          </p>
        </div>
        
        <div className="relative overflow-hidden">
          <motion.div
            className="flex max-w-[1404px] mx-auto"
            animate={isPaused ? {} : { x: ["0%", "-25%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 15,
                ease: "linear",
              },
            }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Tylko 4 testimonials widoczne jednocześnie */}
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
            {/* Duplikujemy dla płynnej pętli */}
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={`duplicate-${index}`} {...testimonial} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}