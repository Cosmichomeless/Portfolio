"use client"

import { useState } from "react"
import { Github, Linkedin, Mail } from "lucide-react"

const socials = [
    {
        name: "GitHub",
        href: "https://github.com/Cosmichomeless",
        icon: <Github className="size-[18px]" />,
    },
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/david-rodr/",
        icon: <Linkedin className="size-[18px]" />,
    },
    {
        name: "Email",
        href: "mailto:Drodriguez1703@gmail.com",
        icon: <Mail className="size-[18px]" />,
    },
]

export function SocialIcons() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

    return (
        <div className="relative flex items-center gap-1 px-2 py-2 rounded-2xl bg-[var(--card-bg)] border border-[var(--card-border)] shadow-xl">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />

            {socials.map((social, index) => (
                <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex items-center justify-center size-10 rounded-xl transition-all duration-200"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    aria-label={social.name}
                >
                    <span
                        className={`absolute inset-0 rounded-lg bg-[var(--cosmic-gold)]/10 border border-[var(--cosmic-gold)]/20 transition-all duration-300 ease-out ${hoveredIndex === index ? "opacity-100 scale-100" : "opacity-0 scale-90"
                            }`}
                    />

                    <span
                        className={`relative z-10 transition-all duration-300 ease-out ${hoveredIndex === index ? "text-[var(--cosmic-gold)] scale-110" : "text-[#8b949e]"
                            }`}
                    >
                        {social.icon}
                    </span>

                    <span
                        className={`absolute bottom-1 left-1/2 -translate-x-1/2 h-[2px] rounded-full bg-[var(--cosmic-gold)] transition-all duration-300 ease-out ${hoveredIndex === index ? "w-4 opacity-100" : "w-0 opacity-0"
                            }`}
                    />

                    <span
                        className={`absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-lg bg-[var(--card-bg)] border border-[var(--card-border)] text-[var(--foreground)] text-[11px] font-semibold whitespace-nowrap shadow-2xl transition-all duration-300 ease-out ${hoveredIndex === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
                            }`}
                    >
                        {social.name}
                        <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 size-2 rotate-45 bg-[var(--card-bg)] border-r border-b border-[var(--card-border)]" />
                    </span>
                </a>
            ))}
        </div>
    )
}
