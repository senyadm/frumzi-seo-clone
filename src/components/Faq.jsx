import React, { useState } from "react";
import { motion } from "framer-motion";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const faqs = [
  {
    question: "Είναι ασφαλές να παίξεις στο Frumzi Casino?",
    answer:
      "Το Frumzi Casino δίνει προτεραιότητα στην ασφάλεια των παικτών του εφαρμόζοντας σύγχρονα μέτρα ασφαλείας, συμπεριλαμβανομένης της τεχνολογίας κρυπτογράφησης SSL. Το καζίνο λειτουργεί με άδεια από την Επιτροπή Τυχερών Παιχνιδιών του Κουρασάο, εξασφαλίζοντας περαιτέρω ένα ασφαλές περιβάλλον τυχερών παιχνιδιών.",
  },
  {
    question: "Δημοτική παιδική στο καζίνο Frumzi?",
    answer:
      "Το Frumzi Casino φιλοξενεί μια ποικιλία από δημοφιλή παιχνίδια, όπως κουλοχέρηδες, επιτραπέζια παιχνίδια και ζωντανές επιλογές καζίνο. Η πλατφόρμα διαθέτει τίτλους από γνωστούς παρόχους παιχνιδιών στον κλάδο.",
  },
  {
    question: "Δημοφιλείς πάροχοι στο Frumzi Casino?",
    answer:
      "Το Frumzi Casino συνεργάζεται με περισσότερους από 30 παρόχους διαδικτυακών παιχνιδιών για να προσφέρει μια ποικίλη και εκτεταμένη συλλογή παιχνιδιών. Αυτή η συνεργασία διασφαλίζει ότι οι χρήστες έχουν πρόσβαση σε δημοφιλές και υψηλής ποιότητας περιεχόμενο παιχνιδιών.",
  }
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-12" id="faq" data-aos="fade-up" data-aos-delay="300">
      <h2 className="md:text-3xl text-2xl font-bold text-center mb-4 uppercase px-6">
      Συχνές Ερωτήσεις
      </h2>
      <div className="max-w-xl md:max-w-6xl mx-auto space-y-4 px-3">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className="bg-blue-950/40 p-5 rounded-lg cursor-pointer shadow-lg hover:shadow-[0_0_10px_rgb(255,255,255)] transition duration-300"
            whileHover={{ scale: 1.02 }}
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold md:text-xl">{faq.question}</h3>
              <motion.span
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-2xl"
              >
                <IoIosArrowDown />
              </motion.span>
            </div>

            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: openIndex === index ? 1 : 0,
                height: openIndex === index ? "auto" : 0,
              }}
              transition={{ duration: 0.3 }}
              className="text-gray-300 mt-2 overflow-hidden md:text-lg text-md"
            >
              {openIndex === index && <p>{faq.answer}</p>}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
