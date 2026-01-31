import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import horizontalData from "../../data/homeHorizontal.json";

const HorizontalScrollSection = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-65%"]);

    return (
        <section ref={targetRef} className="relative h-[200vh] bg-white">
            <div className="sticky top-0 flex h-screen flex-col md:flex-row items-center overflow-hidden pt-20 md:pt-24">
                <div className="absolute top-28 left-4 md:top-32 md:left-10 z-10 max-w-sm md:max-w-md p-4">
                    <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4 md:mb-6">Our Expertise</h2>
                    <p className="text-gray-600 text-base md:text-lg">
                        Explore how we drive innovation and growth through our comprehensive capabilities.
                    </p>
                </div>

                <motion.div style={{ x }} className="flex gap-6 pl-[85vw] md:pl-[40vw] items-center h-full pt-32 md:pt-0 pb-20">
                    {horizontalData.map((card) => {
                        return <Card card={card} key={card.id} />;
                    })}
                </motion.div>
            </div>
        </section>
    );
};

const Card = ({ card }) => {
    return (
        <div
            key={card.id}
            className="group relative h-[450px] w-[350px] md:w-[450px] overflow-hidden rounded-2xl shadow-xl bg-gray-100"
        >
            <div
                style={{
                    backgroundImage: `url(${card.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                className="absolute inset-0 z-0 transition-transform duration-500 group-hover:scale-110"
            ></div>
            <div className="absolute inset-0 z-10 grid place-content-center bg-black/40 hover:bg-black/50 transition-colors duration-300 p-8 text-center">
                <h3 className="text-3xl font-bold text-white mb-4 uppercase tracking-wider">
                    {card.title}
                </h3>
                <p className="text-white/90 text-lg font-light opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                    {card.description}
                </p>
            </div>
        </div>
    );
};

export default HorizontalScrollSection;