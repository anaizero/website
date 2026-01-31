import { motion } from "framer-motion";
import AnimatedGridBackground from "../AnimatedGridBackground";

const approachSteps = [
  {
    step: "01",
    title: "Discovery & Planning",
    description:
      "We begin with a deep understanding of your business goals, users, data flows, and technical constraints. This phase ensures clarity on scope, priorities, risks, and success metrics before any solution is designed."
  },
  {
    step: "02",
    title: "Architecture & Design",
    description:
      "Our architects design clean, scalable, and secure system architectures tailored to your needs. We focus on performance, reliability, security, and future scalability while selecting the right technologies and patterns."
  },
  {
    step: "03",
    title: "Agile Development",
    description:
      "We follow an iterative, agile delivery model with transparent milestones, rapid feedback cycles, and continuous improvement. This ensures flexibility, faster delivery, and alignment with evolving business needs."
  },
  {
    step: "04",
    title: "Testing & Security",
    description:
      "Quality and security are built into every layer. We apply automated testing, performance validation, and security best practices to ensure stability, compliance, and production readiness."
  },
  {
    step: "05",
    title: "Deployment & Support",
    description:
      "We ensure smooth deployment with minimal disruption, followed by monitoring, optimization, and ongoing support. Our focus is long-term performance, reliability, and continuous improvement."
  }
];


function Timeline() {
  return (
    <section className="relative py-24 md:py-32 bg-bg-subtle overflow-hidden">
      <AnimatedGridBackground />
      <div className="container w-full md:w-4/5 mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Strategic Approach</h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            A transparent, proven methodology designed to deliver exceptional results and sustainable growth.
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Central Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-linear-to-b from-primary/10 via-accent/50 to-primary/10"></div>

          <div className="space-y-12 md:space-y-24">
            {approachSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row items-center gap-8 md:gap-0 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >

                {/* Content Side */}
                <div className="w-full md:w-1/2 md:px-12 pl-12">
                  <div className="glass-card p-8 relative group hover:border-accent/30 transition-colors duration-500">
                    <div className="absolute -top-6 -left-6 md:-top-8 md:-left-8 text-6xl md:text-8xl font-bold text-slate-100 -z-10 group-hover:text-accent/10 transition-colors duration-500 select-none">
                      {step.step}
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-primary mb-3 group-hover:text-accent transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-text-muted leading-relaxed group-hover:text-slate-600 transition-colors duration-300">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Center Dot */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-bg-light rounded-full border-4 border-accent shadow-[0_0_0_4px_rgba(245,158,11,0.2)] z-10"></div>

                {/* Empty Side */}
                <div className="w-full md:w-1/2 hidden md:block"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Timeline;
