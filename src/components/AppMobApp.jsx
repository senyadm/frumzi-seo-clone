import React, { useState } from 'react'
import { motion, useMotionValue, useTransform } from "framer-motion";
import screen6 from "../assets/screen6.png"


export default function AppMobApp() {

    const [isHovered, setIsHovered] = useState(false);

    // Motion values for X and Y
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Rotate the image based on mouse position
    const rotateX = useTransform(y, [-50, 50], [15, -15]); // Rotate along X-axis
    const rotateY = useTransform(x, [-50, 50], [-15, 15]); // Rotate along Y-axis

    const [more, setMore] = useState(false);
    const showMore = () => {
        setMore(prev => !prev);
    }

    return (
        <div className='flex justify-center items-center px-1 lg:px-8 py-8'>
            <section id="getstarted" className="relative text-white py-[100px] px-10 md:px-12 flex flex-col lg:flex-row items-center justify-between">
                {/* Text Section */}
                <div data-aos="fade-up" className="lg:w-1/2 text-center lg:text-left">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-5xl font-bold mb-6"
                    >
                        Το Frumzi Casino διαθέτει εφαρμογή για κινητά
                    </motion.h1>
                    <div className="text-lg md:text-md xl:text-lg mb-6 opacity-90 lg:pr-6">
                        Το Εφαρμογή Καζίνο Frumzi προσφέρει προσβασιμότητα στην πλατφόρμα του σε μια σειρά συσκευών, που περιλαμβάνουν smartphones και tablet. Ο ιστότοπος της πλατφόρμας έχει σχεδιαστεί σχολαστικά για να ανταποκρίνεται, διασφαλίζοντας την προσαρμοστικότητα σε διαφορετικά μεγέθη και αναλύσεις οθόνης. Αυτή η στρατηγική βελτιστοποίηση έχει ως στόχο να παρέχει στους χρήστες μια ομοιόμορφη και διαισθητική εμπειρία, ανεξάρτητα από το αν επιλέγουν να έχουν πρόσβαση στο καζίνο μέσω ενός συμβατικού επιτραπέζιου υπολογιστή ή μιας πιο συμπαγούς κινητής συσκευής.
                        <span className='text-[#2ac3ed] cursor-pointer' onClick={showMore}> more...</span>
                        <span>
                            {more &&
                                <div className='pt-[10px]'>
                                    <div className='text-md lg:text-lg space-y-3'>
                                        <p>Αυτή η έμφαση στον ανταποκρινόμενο σχεδιασμό πηγάζει από την αναγνώριση ότι οι παίκτες χρησιμοποιούν μια ποικιλία συσκευών για να ασχοληθούν με τα διαδικτυακά καζίνο. Προσαρμόζοντας τη διεπαφή του ιστότοπου σε διαφορετικές προδιαγραφές οθόνης, το Εφαρμογή Καζίνο Frumzi στοχεύει να προσαρμόσει τις προτιμήσεις και τις συνήθειες της διαφορετικής βάσης χρηστών του. Αυτή η προσέγγιση ευθυγραμμίζεται με τα πρότυπα της βιομηχανίας, όπου η προσβασιμότητα μέσω κινητής τηλεφωνίας έχει καταστεί όλο και πιο κρίσιμη για τις διαδικτυακές πλατφόρμες που επιδιώκουν να εξυπηρετήσουν ένα ευρύ κοινό.</p>
                                        <p>Ο ανταποκρινόμενος σχεδιασμός που υλοποιείται από το Εφαρμογή Καζίνο Frumzi περιλαμβάνει όχι μόνο οπτική προσαρμοστικότητα αλλά και λειτουργική βελτιστοποίηση. Οι χρήστες που περιηγούνται στο καζίνο σε κινητές συσκευές μπορούν να περιμένουν μια απρόσκοπτη και αποτελεσματική εμπειρία, επιτρέποντάς τους να εξερευνήσουν τις διάφορες δυνατότητες, παιχνίδια και υπηρεσίες με ευκολία. Αυτή η δέσμευση για μια συνεπή εμπειρία χρήστη υπογραμμίζει την αφοσίωση της Frumzi στην παροχή ενός αξιόπιστου και προσβάσιμου περιβάλλοντος παιχνιδιού για τους παίκτες της.</p>
                                        <p>Στην ουσία, η απόφαση του Εφαρμογή Καζίνο Frumzi να μην προσφέρει μια ειδική εφαρμογή για κινητά συμπληρώνεται από την εστίασή του σε έναν ανταποκρινόμενο σχεδιασμό ιστότοπου. Αυτή η προσέγγιση δίνει προτεραιότητα στην προσαρμοστικότητα σε διαφορετικές συσκευές, προωθώντας την προσβασιμότητα και τη φιλική προς το χρήστη πλοήγηση. Με την προώθηση μιας συνεπούς εμπειρίας, το καζίνο στοχεύει να καλύψει τις ποικίλες ανάγκες της βάσης των παικτών του, αναγνωρίζοντας τη σημασία της προσαρμογής διαφόρων προτιμήσεων στο συνεχώς εξελισσόμενο τοπίο των διαδικτυακών τυχερών παιχνιδιών.</p>


                                    </div>
                                </div>
                            }
                        </span>
                        <div data-aos="fade-up" data-aos-delay="300" className='mt-4 justify-center lg:justify-start items-center flex'>
                            <button className='bg-white hover:bg-[#2ac3ed] hover:text-white text-[#080e33] font-semibold justify-center lg:justify-start px-10 py-4 rounded-lg flex items-center hover:shadow-[0_0_10px_rgb(255,255,255)] hover:duration-300'><a href="https://frumzi11.com/gr/?mid=39601_730953&fluid=874c923c-8952-46f1-b5dd-e14c4a3ed5aa">Μητρώο</a></button>
                        </div>

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
                        src={screen6}
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
    )
}
