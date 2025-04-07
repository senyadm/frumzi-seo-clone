import React, { useState } from 'react'

const ExtraOffers = () => {

const [more, setMore] = useState(false);
const showMore = () =>{
    setMore(prev => !prev);
}



  return (
    <div className='flex flex-col justify-center  items-center px-8 text-center mb-10'>
        <h1 className='text-4xl md:text-5xl font-bold mb-6'>Πρόσθετες προσφορές</h1>
        <div className="text-lg md:text-md xl:text-lg mb-6 opacity-90 lg:pr-6">
        Το Frumzi Casino προσφέρει περιοδικά πρόσθετες προσφορές που αλλάζουν ανάλογα με την εποχή ή τις ειδικές εκδηλώσεις. Οι παίκτες μπορούν να επωφεληθούν από προσωρινές καμπάνιες, τουρνουά και επιστροφές μετρητών. Συνιστάται να επισκέπτεστε τον ιστότοπο τακτικά για να είστε ενημερωμένοι με τις πιο πρόσφατες διαθέσιμες προσφορές. 
    <span className='text-[#2ac3ed] cursor-pointer' onClick={showMore}> more...</span>
    <span>
        {more && 
    <div className='pt-[10px]'>
       <ul className='space-y-3 text-md'>
        <li>
        <h1 className='font-bold text-3xl text-center p-2'>Δωρεάν Περιστροφές</h1>
        Οι δωρεάν περιστροφές, ένα κοινό διαφημιστικό χαρακτηριστικό σε πολλά διαδικτυακά καζίνο, είναι επίσης διαθέσιμα στο Frumzi. Ωστόσο, οι διαθέσιμες πληροφορίες δεν αναφέρουν λεπτομερώς τις συνθήκες υπό τις οποίες οι παίκτες μπορούν να κερδίσουν ή να χρησιμοποιήσουν αυτές τις δωρεάν περιστροφές. Συνιστάται στους παίκτες να ανατρέξουν στους Όρους και τις προϋποθέσεις της πλατφόρμας για συγκεκριμένες λεπτομέρειες σχετικά με τον τρόπο με τον οποίο απονέμονται οι δωρεάν περιστροφές και τυχόν σχετικές απαιτήσεις στοιχηματισμού.
        </li>
        <li>
        <h1 className='font-bold text-3xl text-center p-2'>Άλλες προσφορές</h1>
        Εκτός από τα προαναφερθέντα μπόνους, το Frumzi Casino μπορεί να προσφέρει διάφορες άλλες προσφορές περιοδικά. Αυτές οι προσφορές θα μπορούσαν να περιλαμβάνουν ειδικά Frumzi μπόνους κατάθεσης, Προσφορές επιστροφής μετρητών ή θεματικές προσφορές που συνδέονται με συγκεκριμένα παιχνίδια ή εκδηλώσεις. Η πλατφόρμα ενθαρρύνει τους παίκτες να ενημερώνονται για αυτές τις προσφορές ελέγχοντας τακτικά τις διαφημιστικές ανακοινώσεις του καζίνο.
        </li>
        <li>
        <h1 className='font-bold text-3xl text-center p-2'>Πρόγραμμα VIP</h1>
        Το Frumzi Casino διαθέτει ένα πρόγραμμα VIP που έχει σχεδιαστεί για να ανταμείβει πιστούς παίκτες. Ωστόσο, συγκεκριμένες λεπτομέρειες σχετικά με το πρόγραμμα VIP, όπως τα κριτήρια εισόδου, η δομή της βαθμίδας και τα συναφή οφέλη, δεν είναι άμεσα διαθέσιμα. Οι ενδιαφερόμενοι παίκτες ενθαρρύνονται να επικοινωνήσουν με την υποστήριξη του καζίνο ή να ανατρέξουν στον επίσημο ιστότοπο για ολοκληρωμένες πληροφορίες σχετικά με το πρόγραμμα VIP.
        </li>
        <li>
        <h1 className='font-bold text-3xl text-center p-2'>Frumzi Κινητά Μπόνους</h1>
        Για τους παίκτες που προτιμούν τα τυχερά παιχνίδια εν κινήσει, το Frumzi Casino προσφέρει μια κινητή πλατφόρμα με μπόνους προσβάσιμα στους χρήστες κινητών. Τα Frumzi μπόνους για <span className='underline cursor-pointer hover:text-[#2ac3ed]'><a href="/">Frumzi App</a></span> κινητά μπορεί να περιλαμβάνουν αποκλειστικές προσφορές ή ανταμοιβές προσαρμοσμένες για παίκτες που ασχολούνται με το καζίνο μέσω smartphone ή tablet. Η διαθεσιμότητα και οι λεπτομέρειες αυτών των Frumzi μπόνους ειδικά για κινητά μπορούν να επιβεβαιωθούν στην πλατφόρμα για κινητά.
        </li>
       </ul>
    </div>
    }
    </span>
    <div data-aos="fade-up" data-aos-delay="300" className='mt-6 justify-center items-center flex'>
        <button className='bg-white hover:bg-[#2ac3ed] hover:text-white text-[#080e33] font-semibold justify-center lg:justify-start px-24 py-4 rounded-lg flex items-center hover:shadow-[0_0_10px_rgb(255,255,255)] hover:duration-300'><a href="https://frumzi11.com/gr/?mid=39601_730953&fluid=874c923c-8952-46f1-b5dd-e14c4a3ed5aa">Παίξτε τώρα</a></button>
    </div>
    
    </div></div>
  )
}

export default ExtraOffers;