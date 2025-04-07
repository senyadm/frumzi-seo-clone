import React, { useState } from 'react'
import { motion, useMotionValue, useTransform } from "framer-motion";
import login from "../assets/login.png"


const Reg = () => {

    const [isHovered, setIsHovered] = useState(false);

    // Motion values for X and Y
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Rotate the image based on mouse position
    const rotateX = useTransform(y, [-50, 50], [15, -15]); // Rotate along X-axis
    const rotateY = useTransform(x, [-50, 50], [-15, 15]); // Rotate along Y-axis

const [more, setMore] = useState(false);
const showMore = () =>{
    setMore(prev => !prev);
}

    return (
        <div className='flex justify-center items-center px-1 lg:px-8 py-8'>
            <section id="getstarted" className="relative text-white py-[100px] px-10 md:px-12 flex flex-col lg:flex-row items-center justify-between">
                {/* Text Section */}
                <div className="lg:w-1/2 text-center lg:text-left">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-5xl font-bold mb-6"
                    >
                        Εγγραφείτε στο Frumzi Casino
                    </motion.h1>
                    <div className="text-lg md:text-md xl:text-lg mb-6 opacity-90 lg:pr-6">
                    Η εγγραφή στο Frumzi Casino ακολουθεί μια τυποποιημένη διαδικασία, εξασφαλίζοντας μια απλή και οικεία εμπειρία για τους χρήστες. Το σύστημα εγγραφής του καζίνο απαιτεί από τους χρήστες να παρέχουν βασικές πληροφορίες, όπως email, όνομα χρήστη και κωδικό πρόσβασης. Αυτό το υποχρεωτικό βήμα χρησιμεύει ως πύλη πρόσβασης στο ευρύ φάσμα επιλογών παιχνιδιού που είναι διαθέσιμες στην πλατφόρμα 
                    <span className='text-[#2ac3ed] cursor-pointer' onClick={showMore}> more...</span>
                    <span>
                        {more && 
                    <div className='pt-[10px]'>
                        <p className='text-md lg:text-lg font-bold'>Η διαδικασία εγγραφής έχει σχεδιαστεί με γνώμονα την ευκολία των χρηστών, τηρώντας τους κανόνες της βιομηχανίας για απλότητα και ευκολία στη χρήση. Οι χρήστες που ξεκινούν το ταξίδι εγγραφής μπορούν να περιμένουν τα ακόλουθα βήματα:</p>
                       <ul className='text-[#2ac3ed] space-y-3 text-md'>
                        <li>
                        1. Επισκεφθείτε τον ιστότοπο του καζίνο Frumzi: οι χρήστες ξεκινούν τη διαδικασία εγγραφής μεταβαίνοντας στον επίσημο ιστότοπο του καζίνο Frumzi.
                        </li>
                        <li>
                        2. Κάντε κλικ στο κουμπί εγγραφής: ένα εμφανές κουμπί “εγγραφή” ή “εγγραφή” είναι συνήθως διαθέσιμο στην αρχική σελίδα. Οι χρήστες πρέπει να κάνουν κλικ σε αυτό το κουμπί για να ξεκινήσουν τη διαδικασία εγγραφής.
                        </li>
                        <li>
                        3. Παροχή βασικών πληροφοριών: η φόρμα εγγραφής ζητά από τους χρήστες να εισάγουν βασικές πληροφορίες, συμπεριλαμβανομένης μιας έγκυρης διεύθυνσης ηλεκτρονικού ταχυδρομείου, ενός επιλεγμένου ονόματος χρήστη και ενός ασφαλούς κωδικού πρόσβασης. Αυτές οι πληροφορίες είναι ζωτικής σημασίας για τη δημιουργία ενός μοναδικού λογαριασμού στην πλατφόρμα.
                        </li>
                        <li>
                        4. Επαλήθευση ηλεκτρονικού ταχυδρομείου: μετά την υποβολή της φόρμας εγγραφής, οι χρήστες ενδέχεται να χρειαστεί να επαληθεύσουν τη διεύθυνση ηλεκτρονικού ταχυδρομείου τους κάνοντας κλικ σε έναν σύνδεσμο επαλήθευσης που αποστέλλεται στο παρεχόμενο μήνυμα ηλεκτρονικού ταχυδρομείου. Αυτό το βήμα διασφαλίζει την ακρίβεια των στοιχείων επικοινωνίας του χρήστη.
                        </li>
                        <li>
                        5. Διαπιστευτήρια σύνδεσης: μόλις ολοκληρωθεί η εγγραφή, οι χρήστες μπορούν να συνδεθούν στους νέους λογαριασμούς τους χρησιμοποιώντας το καθορισμένο όνομα χρήστη και κωδικό πρόσβασης.
                        </li>
                       </ul>
                       <p className=' text-md lg:text-lg font-bold py-2'>Είναι επιτακτική ανάγκη οι χρήστες να ακολουθούν τις περιγραφόμενες διαδικασίες κατά τη διαδικασία εγγραφής για να εγγυηθούν μια απρόσκοπτη εμπειρία. Η μη παροχή ακριβών πληροφοριών ή η τήρηση των καθορισμένων βημάτων μπορεί να οδηγήσει σε δυσκολίες πρόσβασης στην πλατφόρμα ή απόλαυσης του πλήρους φάσματος δυνατοτήτων της.</p>
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
                        src={login}
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

export default Reg