import React, { useState } from 'react'
import screen2 from "../assets/screen2.png"


const SectionLic = () => {



  return (
    <div className='flex justify-center flex-col px-8 items-center py-16'>
        <h1 data-aos="fade-up" data-aos-delay="200" className='text-3xl lg:text-4xl font-semibold'>Άδεια Καζίνο Frumzi</h1>
        <div className='flex flex-col pt-4 text-lg gap-4 text-center'>
        <p data-aos="fade-up" data-aos-delay="300">Το Frumzi Casino λειτουργεί υπό την άδεια της Επιτροπής Τυχερών Παιχνιδιών του Κουρασάο, εδραιώνοντας το νομικό πλαίσιο που διέπει τις δραστηριότητες τυχερών παιχνιδιών στο Διαδίκτυο. Αυτή η ρύθμιση αδειοδότησης είναι μια κοινή πρακτική στον κλάδο των διαδικτυακών τυχερών παιχνιδιών, προσφέροντας μια ρυθμιζόμενη πλατφόρμα για τους παίκτες να συμμετέχουν σε διάφορα παιχνίδια καζίνο και αθλητικά στοιχήματα. Η Επιτροπή Τυχερών Παιχνιδιών του Κουρασάο είναι αναγνωρισμένη ρυθμιστική αρχή στον κλάδο και η τήρηση των κατευθυντήριων γραμμών του Frumzi Casino αντικατοπτρίζει τη δέσμευση για τη διατήρηση ενός ασφαλούς και ρυθμιζόμενου περιβάλλοντος τυχερών παιχνιδιών.</p>
        <div data-aos="fade-up" className='p-2 pt-[20px]'>
        <img src={screen2} alt="" className='w-full h-full shadow-lg hover:shadow-[0_0_10px_rgb(255,255,255)] hover:duration-300' />
    </div>
        <p data-aos="fade-up" data-aos-delay="300">Η Επιτροπή Τυχερών Παιχνιδιών του Κουρασάο, ως ρυθμιστικός φορέας, παρακολουθεί και αξιολογεί τις δραστηριότητες του Frumzi Casino για να διασφαλίσει τη συνεχή συμμόρφωση με τους καθιερωμένους κανονισμούς. Η εποπτεία αυτή συμβάλλει στη δημιουργία ενός ασφαλούς περιβάλλοντος τυχερών παιχνιδιών για τους παίκτες, μετριάζοντας τους πιθανούς κινδύνους που συνδέονται με τις διαδικτυακές πλατφόρμες τυχερών παιχνιδιών. Υπογραμμίζει τη δέσμευση του Frumzi Casino να παρέχει στους παίκτες μια ρυθμιζόμενη και υπεύθυνη εμπειρία παιχνιδιού.</p>
    </div>
        </div>
        
  )
}

export default SectionLic