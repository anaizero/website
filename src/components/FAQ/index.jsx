import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What services does Aizero provide?",
      answer: "Aizero offers a range of services including Technology Advisory, Cloud Consulting, Infrastructure Management, Digital Modernization, and AI Automation solutions tailored to your business needs."
    },
    {
      question: "How can Aizero help my business grow?",
      answer: "We leverage cutting-edge technology and AI to optimize your operations, enhance decision-making, and create scalable solutions that drive efficiency and growth."
    },
    {
      question: "Do you offer support after project completion?",
      answer: "Yes, we provide comprehensive post-project support and managed IT services to ensure your systems run smoothly and evolve with your business."
    },
    {
      question: "How do I get started with Aizero?",
      answer: "Simply contact us through our website or email. We'll schedule a consultation to understand your requirements and propose a tailored strategy."
    }
  ];

  return (
    <div className="max-w-3xl mx-auto">
      {faqData.map((item, index) => (
        <div key={index} className="mb-4">
          <button
            className={`w-full flex items-center justify-between p-5 rounded-xl text-left transition-all duration-300 ${activeIndex === index
                ? "bg-primary text-white shadow-lg"
                : "bg-white text-gray-700 hover:bg-gray-50 shadow-sm border border-gray-100"
              }`}
            onClick={() => toggleFAQ(index)}
          >
            <span className="font-semibold text-lg">{item.question}</span>
            {activeIndex === index ? <FaMinus size={14} /> : <FaPlus size={14} />}
          </button>

          <AnimatePresence>
            {activeIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="p-5 bg-white border-x border-b border-gray-100 rounded-b-xl text-gray-600 leading-relaxed">
                  {item.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
