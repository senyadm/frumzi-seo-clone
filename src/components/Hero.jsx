import React, { useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Play } from "lucide-react";
import hero from "../assets/hero.png";

export default function Hero() {

    const [isHovered, setIsHovered] = useState(false);

    // Motion values for X and Y
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Rotate the image based on mouse position
    const rotateX = useTransform(y, [-50, 50], [15, -15]); // Rotate along X-axis
    const rotateY = useTransform(x, [-50, 50], [-15, 15]); // Rotate along Y-axis




    return (
        <>
            {/*Comp */}
            <div className="hidden lg:block">
              <section id="getstarted" className="relative text-white py-[100px] px-10 md:px-12 flex flex-col lg:flex-row items-center justify-between">
                {/* Text Section */}
                <div className="lg:w-1/2 text-center lg:text-left">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-5xl font-bold mb-6"
                    >
                        Frumzi Καζίνο Κριτική
                    </motion.h1>
                    <p className="text-md md:text-md xl:text-lg mb-6 opacity-90 pr-6">
                        Το Frumzi Casino είναι μια διαδικτυακή πλατφόρμα τυχερών παιχνιδιών που ιδρύθηκε το 2020, προσφέροντας μια σειρά από παιχνίδια καζίνο και επιλογές αθλητικών στοιχημάτων. Το καζίνο λειτουργεί με άδεια που λαμβάνεται από την Επιτροπή Τυχερών Παιχνιδιών του Κουρασάο, παρέχοντας ένα νομικό πλαίσιο για τις δραστηριότητές του. Η πλατφόρμα εξυπηρετεί ένα παγκόσμιο κοινό, παρέχοντας πρόσβαση σε διάφορα παιχνίδια από εξέχοντες προγραμματιστές τόσο σε επιτραπέζιους όσο και σε κινητές συσκευές.
                    </p>
                    <div data-aos="fade-up" className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-white hover:bg-[#2ac3ed] hover:text-white text-[#080e33] font-semibold px-10 py-4 rounded-lg flex items-center hover:shadow-[0_0_10px_rgb(255,255,255)] hover:duration-300">
                            <Play className="mr-2" />  <a href="https://frumzi11.com/gr/?mid=39601_730953&fluid=874c923c-8952-46f1-b5dd-e14c4a3ed5aa">Παίξτε τώρα</a>
                        </button>
                    </div>
                </div>

                {/* Image Section */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center"
                >
                    <motion.img
                        src={hero}
                        alt="Frumzi"
                        className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-4xl rounded-xl shadow-2xl border border-gray-200 cursor-pointer hover:shadow-[0_0_10px_rgb(255,255,255)] hover:duration-300"
                        style={{
                            rotateX,
                            rotateY,
                            transition: "transform 0.2s ease-out",
                        }}
                        onMouseMove={(e) => {
                            const { clientX, clientY, currentTarget } = e;
                            const { left, top, width, height } = currentTarget.getBoundingClientRect();
                            const xVal = ((clientX - left) / width) * 100 - 50;
                            const yVal = ((clientY - top) / height) * 100 - 50;
                            x.set(xVal);
                            y.set(yVal);
                        }}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => {
                            setIsHovered(false);
                            x.set(0);
                            y.set(0);
                        }}
                    />

                </motion.div>
            </section>  
            </div>
            
            {/*Mobile*/}
            <div className="block lg:hidden">
                <section
                id="getstarted"
                className="relative text-white py-[100px] px-10 md:px-12 flex flex-col lg:flex-row items-center justify-between"
            >
                {/* Title Section */}
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-5xl font-bold mb-6 text-center lg:text-left order-1"
                >
                    Frumzi Καζίνο Κριτική
                </motion.h1>

                {/* Image Section */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="w-full lg:w-1/2 mt-6 lg:mt-0 flex justify-center order-2"
                >
                    <motion.img
                        src={hero}
                        alt="Frumzi"
                        className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-4xl rounded-xl shadow-2xl border border-gray-200 cursor-pointer hover:shadow-[0_0_10px_rgb(255,255,255)] hover:duration-300"
                        style={{
                            rotateX,
                            rotateY,
                            transition: "transform 0.2s ease-out",
                        }}
                        onMouseMove={(e) => {
                            const { clientX, clientY, currentTarget } = e;
                            const { left, top, width, height } = currentTarget.getBoundingClientRect();
                            const xVal = ((clientX - left) / width) * 100 - 50;
                            const yVal = ((clientY - top) / height) * 100 - 50;
                            x.set(xVal);
                            y.set(yVal);
                        }}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => {
                            setIsHovered(false);
                            x.set(0);
                            y.set(0);
                        }}
                    />
                </motion.div>

                {/* Text & Button Section */}
                <div className="lg:w-1/2 text-center lg:text-left order-3 mt-8 lg:mt-0">
                    <p className="text-md md:text-md xl:text-lg mb-6 opacity-90">
                        Το Frumzi Casino είναι μια διαδικτυακή πλατφόρμα τυχερών παιχνιδιών που ιδρύθηκε το 2020, προσφέροντας μια σειρά από παιχνίδια καζίνο και επιλογές αθλητικών στοιχημάτων. Το καζίνο λειτουργεί με άδεια που λαμβάνεται από την Επιτροπή Τυχερών Παιχνιδιών του Κουρασάο, παρέχοντας ένα νομικό πλαίσιο για τις δραστηριότητές του. Η πλατφόρμα εξυπηρετεί ένα παγκόσμιο κοινό, παρέχοντας πρόσβαση σε διάφορα παιχνίδια από εξέχοντες προγραμματιστές τόσο σε επιτραπέζιους όσο και σε κινητές συσκευές.
                    </p>
                    <div data-aos="fade-up" className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-white hover:bg-[#2ac3ed] hover:text-white text-[#080e33] font-semibold px-10 py-4 rounded-lg flex items-center hover:shadow-[0_0_10px_rgb(255,255,255)] hover:duration-300">
                            <Play className="mr-2" />
                            <a href="https://frumzi11.com/gr/?mid=39601_730953&fluid=874c923c-8952-46f1-b5dd-e14c4a3ed5aa">
                                Παίξτε τώρα
                            </a>
                        </button>
                    </div>
                </div>
            </section>
            </div>
            

        </>

    );
}
