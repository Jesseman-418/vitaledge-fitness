"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Flame,
  Dumbbell,
  Trophy,
  Brain,
  Apple,
  Video,
  Users,
  Star,
  ChevronRight,
  Zap,
  Target,
  BarChart3,
  CheckCircle2,
  ArrowRight,
  Instagram,
  Twitter,
  Youtube,
  Mail,
} from "lucide-react";

function AnimatedSection({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─────────────────────────── HERO ─────────────────────────── */

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg" />
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(57,255,20,0.05)_0%,transparent_70%)]" />
      {/* Scan line effect */}
      <div className="absolute inset-0 scan-line pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#39FF14]/30 bg-[#39FF14]/5 mb-8">
            <Zap className="w-4 h-4 text-[#39FF14]" />
            <span className="text-sm font-medium text-[#39FF14] uppercase tracking-widest">
              AI-Powered Coaching
            </span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold uppercase leading-[0.95] tracking-tight mb-6"
        >
          <span className="block">Transform Your</span>
          <span className="block">
            Body.{" "}
            <span className="text-[#39FF14] neon-text">Elevate</span>
          </span>
          <span className="block">Your Life.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-body text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10"
        >
          Personalized AI-powered coaching that adapts to your body, your goals,
          and your life. No cookie-cutter plans. Just real results.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <button className="btn-neon text-lg flex items-center gap-2 group">
            Start Your Journey
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="btn-outline-neon text-lg">See Results</button>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16"
        >
          {[
            { value: "10K+", label: "Transformations" },
            { value: "98%", label: "Satisfaction" },
            { value: "50+", label: "Programs" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-heading text-3xl md:text-4xl font-bold text-[#39FF14]">
                {stat.value}
              </div>
              <div className="text-sm text-gray-500 uppercase tracking-widest mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────── PROGRAM CARDS ─────────────────────── */

const programs = [
  {
    name: "SHRED",
    subtitle: "Weight Loss Program",
    icon: Flame,
    duration: "12 Weeks",
    price: "$49",
    period: "/mo",
    color: "from-orange-500/20 to-red-500/20",
    features: [
      "Customized fat-loss meal plans",
      "5x/week progressive training",
      "Weekly body composition tracking",
      "Cardio optimization protocols",
      "24/7 AI coaching support",
    ],
  },
  {
    name: "BUILD",
    subtitle: "Muscle Gain Program",
    icon: Dumbbell,
    duration: "16 Weeks",
    price: "$69",
    period: "/mo",
    popular: true,
    color: "from-[#39FF14]/20 to-emerald-500/20",
    features: [
      "Hypertrophy-focused programming",
      "Caloric surplus meal planning",
      "Progressive overload tracking",
      "Recovery & sleep optimization",
      "Form analysis with AI feedback",
    ],
  },
  {
    name: "PERFORM",
    subtitle: "Athletic Performance",
    icon: Trophy,
    duration: "8 Weeks",
    price: "$59",
    period: "/mo",
    color: "from-blue-500/20 to-purple-500/20",
    features: [
      "Sport-specific programming",
      "Speed & agility training",
      "Periodized strength cycles",
      "Mobility & injury prevention",
      "Competition prep protocols",
    ],
  },
];

function ProgramCards() {
  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-tight mb-4">
            Choose Your <span className="text-[#39FF14]">Path</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Three battle-tested programs. One goal: your best self.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6">
          {programs.map((program, i) => (
            <AnimatedSection key={program.name} delay={i * 0.15}>
              <div
                className={`relative group h-full rounded-2xl bg-dark-700 border border-white/10 p-8 transition-all duration-500 hover:border-[#39FF14]/50 hover:shadow-[0_0_30px_rgba(57,255,20,0.15)]`}
              >
                {program.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#39FF14] text-black text-xs font-bold uppercase tracking-widest px-4 py-1 rounded-full">
                    Most Popular
                  </div>
                )}

                {/* Gradient blob */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${program.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="relative z-10">
                  <program.icon className="w-10 h-10 text-[#39FF14] mb-4" />
                  <h3 className="font-heading text-3xl font-bold uppercase mb-1">
                    {program.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-1">
                    {program.subtitle}
                  </p>
                  <p className="text-gray-500 text-xs uppercase tracking-widest mb-6">
                    {program.duration}
                  </p>

                  <div className="flex items-baseline gap-1 mb-8">
                    <span className="font-heading text-4xl font-bold text-white">
                      {program.price}
                    </span>
                    <span className="text-gray-500">{program.period}</span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {program.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#39FF14] shrink-0 mt-0.5" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className="w-full btn-neon text-sm">
                    Get Started
                    <ChevronRight className="w-4 h-4 inline ml-1" />
                  </button>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────── RESULTS / SOCIAL PROOF ─────────────────── */

const results = [
  { stat: "-32 lbs", desc: "in 12 weeks", name: "Jake M.", program: "SHRED" },
  {
    stat: "+15 lbs",
    desc: "muscle in 16 weeks",
    name: "Sarah K.",
    program: "BUILD",
  },
  {
    stat: "Sub 5-min",
    desc: "mile achieved",
    name: "Chris T.",
    program: "PERFORM",
  },
  {
    stat: "-45 lbs",
    desc: "total transformation",
    name: "Maria L.",
    program: "SHRED",
  },
  {
    stat: "6-Pack",
    desc: "in 90 days",
    name: "David R.",
    program: "BUILD",
  },
  {
    stat: "1st Pull-up",
    desc: "at age 45",
    name: "Linda P.",
    program: "PERFORM",
  },
];

function Results() {
  return (
    <section className="py-24 px-6 relative bg-dark-800">
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="relative z-10 max-w-6xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-tight mb-4">
            The Proof Is In{" "}
            <span className="text-[#39FF14]">The Results</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Real people. Real transformations. No filters.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {results.map((result, i) => (
            <AnimatedSection key={result.name} delay={i * 0.1}>
              <div className="glass-card p-8 text-center group hover:border-[#39FF14]/40 transition-all duration-500 hover:shadow-[0_0_30px_rgba(57,255,20,0.15)]">
                <div className="font-heading text-4xl md:text-5xl font-bold text-[#39FF14] mb-2 neon-text">
                  {result.stat}
                </div>
                <p className="text-gray-400 mb-4">{result.desc}</p>
                <div className="w-12 h-[2px] bg-[#39FF14]/30 mx-auto mb-4" />
                <p className="font-heading font-bold text-white uppercase text-sm">
                  {result.name}
                </p>
                <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">
                  {result.program} Program
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────── HOW IT WORKS ─────────────────── */

const steps = [
  {
    number: "01",
    title: "Sign Up & Assess",
    description:
      "Complete a comprehensive fitness assessment. We analyze your body composition, movement patterns, training history, and goals to build your baseline.",
    icon: Target,
  },
  {
    number: "02",
    title: "Get Your Plan",
    description:
      "Our AI generates a fully personalized training and nutrition program optimized for your specific goals, schedule, and preferences.",
    icon: Brain,
  },
  {
    number: "03",
    title: "Train Smart",
    description:
      "Follow guided workouts with real-time form tracking and progressive overload. Every rep counts, every session builds on the last.",
    icon: Dumbbell,
  },
  {
    number: "04",
    title: "See Results",
    description:
      "Weekly check-ins, body composition tracking, and program adjustments ensure you never plateau. Your plan evolves as you do.",
    icon: BarChart3,
  },
];

function HowItWorks() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-tight mb-4">
            How It <span className="text-[#39FF14]">Works</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Four steps. Zero guesswork. Maximum results.
          </p>
        </AnimatedSection>

        <div className="relative">
          {/* Neon line */}
          <div className="absolute left-8 md:left-12 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#39FF14] via-[#39FF14]/50 to-transparent" />

          <div className="space-y-12">
            {steps.map((step, i) => (
              <AnimatedSection key={step.number} delay={i * 0.15}>
                <div className="flex gap-6 md:gap-10 items-start relative">
                  {/* Node */}
                  <div className="relative z-10 shrink-0 w-16 md:w-24 h-16 md:h-24 rounded-2xl bg-dark-700 border border-[#39FF14]/30 flex items-center justify-center shadow-neon">
                    <step.icon className="w-7 h-7 md:w-10 md:h-10 text-[#39FF14]" />
                  </div>

                  <div className="pt-2 md:pt-4">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-[#39FF14] font-heading font-bold text-sm tracking-widest">
                        STEP {step.number}
                      </span>
                    </div>
                    <h3 className="font-heading text-2xl md:text-3xl font-bold uppercase mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed max-w-lg">
                      {step.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────── COACHING FEATURES ─────────────────── */

const features = [
  {
    title: "AI-Powered Programming",
    description:
      "Machine learning algorithms analyze your progress, recovery, and performance data to continuously optimize your training program in real-time.",
    icon: Brain,
  },
  {
    title: "Nutrition Tracking",
    description:
      "Macro-optimized meal plans tailored to your goals, preferences, and dietary restrictions. Scan, log, and optimize every meal effortlessly.",
    icon: Apple,
  },
  {
    title: "Live Coaching",
    description:
      "Weekly 1-on-1 video calls with certified coaches who review your progress, answer questions, and keep you accountable every step of the way.",
    icon: Video,
  },
  {
    title: "Community",
    description:
      "Join 10,000+ members in our private community. Share wins, find workout partners, and stay motivated with people who get it.",
    icon: Users,
  },
];

function CoachingFeatures() {
  return (
    <section className="py-24 px-6 bg-dark-800 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(57,255,20,0.03)_0%,transparent_60%)]" />
      <div className="relative z-10 max-w-6xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-tight mb-4">
            Everything You <span className="text-[#39FF14]">Need</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Science-backed tools and human coaching. The perfect combination.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, i) => (
            <AnimatedSection key={feature.title} delay={i * 0.1}>
              <div className="glass-card p-8 group hover:border-[#39FF14]/40 transition-all duration-500 hover:shadow-[0_0_30px_rgba(57,255,20,0.15)] h-full">
                <div className="w-14 h-14 rounded-xl bg-[#39FF14]/10 border border-[#39FF14]/20 flex items-center justify-center mb-6 group-hover:shadow-neon transition-shadow duration-500">
                  <feature.icon className="w-7 h-7 text-[#39FF14]" />
                </div>
                <h3 className="font-heading text-xl font-bold uppercase mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────── TESTIMONIALS ─────────────────── */

const testimonials = [
  {
    quote:
      "VitalEdge completely changed my relationship with fitness. The AI programming is insanely smart — it knew when to push me and when to pull back. Down 40 pounds and stronger than ever.",
    name: "Marcus Johnson",
    role: "Lost 40 lbs in 5 months",
    stars: 5,
  },
  {
    quote:
      "I've tried every app and every program. Nothing comes close. The live coaching combined with AI adjustments means I'm never guessing. My deadlift went from 185 to 315 in 4 months.",
    name: "Rachel Torres",
    role: "Strength gains in 4 months",
    stars: 5,
  },
  {
    quote:
      "As a busy mom of 3, I needed something that fit MY life. VitalEdge adapted to my crazy schedule and still delivered results. I feel like a completely different person. This is the real deal.",
    name: "Amanda Chen",
    role: "Transformed at 38",
    stars: 5,
  },
];

function Testimonials() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-tight mb-4">
            What They <span className="text-[#39FF14]">Say</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Don&apos;t take our word for it. Hear from the people who lived it.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <AnimatedSection key={t.name} delay={i * 0.15}>
              <div className="glass-card p-8 h-full flex flex-col group hover:border-[#39FF14]/40 transition-all duration-500">
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: t.stars }).map((_, si) => (
                    <Star
                      key={si}
                      className="w-5 h-5 text-[#39FF14] fill-[#39FF14]"
                    />
                  ))}
                </div>
                <blockquote className="text-gray-300 leading-relaxed mb-8 flex-1 italic">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div>
                  <p className="font-heading font-bold text-white uppercase text-sm">
                    {t.name}
                  </p>
                  <p className="text-xs text-[#39FF14] uppercase tracking-widest mt-1">
                    {t.role}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────── CTA SECTION ─────────────────── */

function CTASection() {
  return (
    <section className="py-24 px-6 relative">
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#39FF14] to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(57,255,20,0.05)_0%,transparent_60%)]" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <AnimatedSection>
          <h2 className="font-heading text-4xl md:text-6xl font-bold uppercase tracking-tight mb-6">
            Your Transformation{" "}
            <span className="text-[#39FF14] neon-text">Starts Now</span>
          </h2>
          <p className="text-gray-400 text-lg mb-10">
            Join 10,000+ people who chose to change. Your future self will thank
            you.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-dark-700 border border-white/10 rounded-lg px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#39FF14]/50 focus:shadow-[0_0_20px_rgba(57,255,20,0.1)] transition-all duration-300"
            />
            <button className="btn-neon whitespace-nowrap animate-pulse-neon">
              Get Started Free
            </button>
          </div>

          <p className="text-gray-600 text-sm mt-4">
            No credit card required. Cancel anytime.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ─────────────────── FOOTER ─────────────────── */

function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-white/5 bg-dark-900">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Logo & tagline */}
          <div className="md:col-span-1">
            <div className="font-heading text-2xl font-bold uppercase mb-3">
              <span className="text-[#39FF14]">Vital</span>Edge
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Built for results, powered by science.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">
              Programs
            </h4>
            <ul className="space-y-3">
              {["Shred", "Build", "Perform", "Custom Plans"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-[#39FF14] transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {["About", "Blog", "Careers", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-[#39FF14] transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">
              Support
            </h4>
            <ul className="space-y-3">
              {["FAQ", "Help Center", "Privacy Policy", "Terms"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-[#39FF14] transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm">
            &copy; 2025 VitalEdge Fitness. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            {[Instagram, Twitter, Youtube, Mail].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-500 hover:text-[#39FF14] hover:border-[#39FF14]/30 transition-all duration-300"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ─────────────────── PAGE ─────────────────── */

export default function Home() {
  return (
    <main className="bg-dark-900">
      <Hero />
      <ProgramCards />
      <Results />
      <HowItWorks />
      <CoachingFeatures />
      <Testimonials />
      <CTASection />
      <Footer />
    </main>
  );
}
