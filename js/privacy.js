// σκοτεινή αίθουσα — Privacy policy content renderer
//
// Content sourced verbatim (bilingual EL/EN) from the official policy
// text. Markdown structure (headings, paragraphs, lists, separators,
// bold/italic) is preserved and mapped 1:1 to the existing .doc CSS
// classes (h1/h2/h3/p/ul/li/hr) already defined in css/privacy.css.
// No styling, layout, or structural changes were made.

function renderPrivacyPolicy(selector) {
  const target = document.querySelector(selector);
  if (!target) return;

  target.innerHTML = `
    <h1>Πολιτική Απορρήτου / Privacy Policy</h1>
    <p><strong>σκοτεινή αίθουσα</strong> (CinemaGr)</p>
    <p>Τελευταία ενημέρωση / Last updated: 10 Ιουλίου 2026 / July 10, 2026</p>

    <hr>

    <h2>🇬🇷 Πολιτική Απορρήτου</h2>

    <p>Η εφαρμογή <strong>σκοτεινή αίθουσα</strong> σάς βοηθά να βρίσκετε ταινίες και προβολές στους κινηματογράφους της Αθήνας. Σεβόμαστε το απόρρητό σας: η εφαρμογή σχεδιάστηκε ώστε να λειτουργεί <strong>χωρίς λογαριασμό και χωρίς συλλογή προσωπικών δεδομένων</strong>.</p>

    <h3>Τι δεδομένα συλλέγουμε</h3>
    <p><strong>Κανένα.</strong> Η εφαρμογή δεν συλλέγει, δεν αποθηκεύει και δεν διαβιβάζει προσωπικά σας δεδομένα σε εμάς ή σε τρίτους. Δεν απαιτείται εγγραφή ή λογαριασμός, δεν υπάρχουν διαφημίσεις και δεν χρησιμοποιούμε εργαλεία παρακολούθησης (analytics/trackers).</p>

    <h3>Τοποθεσία συσκευής</h3>
    <p>Αν το επιτρέψετε, η εφαρμογή χρησιμοποιεί την τοποθεσία της συσκευής σας <strong>αποκλειστικά τοπικά, πάνω στη συσκευή</strong>, για να ταξινομεί τους κινηματογράφους κατά απόσταση (λειτουργία «Κοντά μου»).</p>
    <ul>
      <li>Η τοποθεσία σας <strong>δεν αποστέλλεται ποτέ</strong> στους διακομιστές μας ή σε τρίτους.</li>
      <li>Η τοποθεσία σας <strong>δεν αποθηκεύεται</strong>.</li>
      <li>Η άδεια είναι προαιρετική — η εφαρμογή λειτουργεί πλήρως και χωρίς αυτήν — και μπορείτε να την ανακαλέσετε οποτεδήποτε από τις ρυθμίσεις του Android.</li>
    </ul>

    <h3>Η λίστα μου (watchlist)</h3>
    <p>Οι ταινίες που αποθηκεύετε στη λίστα σας φυλάσσονται <strong>μόνο τοπικά στη συσκευή σας</strong>. Δεν έχουμε πρόσβαση σε αυτές. Διαγράφονται όταν διαγράψετε τα δεδομένα της εφαρμογής ή την απεγκαταστήσετε. Αν έχετε ενεργό το αυτόματο αντίγραφο ασφαλείας του Android (Google backup), η λίστα μπορεί να συμπεριληφθεί σε αυτό — τη λειτουργία αυτή τη διαχειρίζεστε εσείς από τις ρυθμίσεις της συσκευής σας.</p>

    <h3>Συνδέσεις με τους διακομιστές μας</h3>
    <p>Για να εμφανίσει ταινίες, αίθουσες και ώρες προβολών, η εφαρμογή συνδέεται μέσω ασφαλούς σύνδεσης (HTTPS) με τους διακομιστές μας. Όπως σε κάθε σύνδεση στο διαδίκτυο, οι διακομιστές επεξεργάζονται παροδικά τεχνικές πληροφορίες (π.χ. διεύθυνση IP) αποκλειστικά για την παράδοση του περιεχομένου και τη λειτουργία της υπηρεσίας. Δεν τις χρησιμοποιούμε για ταυτοποίηση χρηστών και δεν τις συσχετίζουμε με πρόσωπα.</p>

    <h3>Περιεχόμενο και σύνδεσμοι τρίτων</h3>
    <ul>
      <li>Τα μεταδεδομένα ταινιών (αφίσες, βαθμολογίες, συντελεστές) προέρχονται από το TMDB. <em>This product uses the TMDB API but is not endorsed or certified by TMDB.</em></li>
      <li>Το πρόγραμμα προβολών προέρχεται από δημόσια διαθέσιμες πηγές κινηματογραφικού προγράμματος.</li>
      <li>Η εφαρμογή περιέχει συνδέσμους προς εξωτερικές υπηρεσίες (π.χ. IMDb, Rotten Tomatoes, Metacritic, Letterboxd, trailers, εφαρμογές χαρτών, τηλεφωνικές κλήσεις). Όταν τους ακολουθείτε, ισχύουν οι πολιτικές απορρήτου των αντίστοιχων υπηρεσιών.</li>
    </ul>

    <h3>Παιδιά</h3>
    <p>Η εφαρμογή δεν απευθύνεται σε παιδιά κάτω των 13 ετών. Σε κάθε περίπτωση, δεν συλλέγουμε δεδομένα από κανέναν χρήστη.</p>

    <h3>Τα δικαιώματά σας (ΓΚΠΔ/GDPR)</h3>
    <p>Επειδή δεν συλλέγουμε ούτε επεξεργαζόμαστε προσωπικά δεδομένα, δεν τηρούμε στοιχεία που θα μπορούσαμε να σας γνωστοποιήσουμε, να διορθώσουμε ή να διαγράψουμε. Αν έχετε οποιαδήποτε απορία σχετικά με το απόρρητο, επικοινωνήστε μαζί μας.</p>

    <h3>Μελλοντικές αλλαγές</h3>
    <p>Αν σε μελλοντική έκδοση προστεθούν λειτουργίες που απαιτούν λογαριασμό χρήστη (π.χ. προφίλ και συγχρονισμός της λίστας), η παρούσα πολιτική θα ενημερωθεί <strong>πριν</strong> την κυκλοφορία τους και θα περιγράφει με σαφήνεια ποια δεδομένα συλλέγονται και πώς μπορείτε να διαγράψετε τον λογαριασμό σας. Η εκάστοτε ισχύουσα έκδοση θα είναι πάντα διαθέσιμη σε αυτή τη σελίδα.</p>

    <h3>Επικοινωνία</h3>
    <p>Υπεύθυνη εφαρμογής: <strong>Eleni Voreopoulou</strong></p>
    <p>Email: <strong>elenivoreopoulou@gmail.com</strong></p>

    <hr>

    <h2>🇬🇧 Privacy Policy</h2>

    <p><strong>σκοτεινή αίθουσα</strong> ("dark auditorium", CinemaGr) helps you find movies and showtimes in Athens cinemas. We respect your privacy: the app is designed to work <strong>without an account and without collecting personal data</strong>.</p>

    <h3>What data we collect</h3>
    <p><strong>None.</strong> The app does not collect, store, or transmit your personal data to us or to third parties. No registration or account is required, there are no ads, and we use no analytics or tracking tools.</p>

    <h3>Device location</h3>
    <p>If you grant permission, the app uses your device's location <strong>exclusively on the device itself</strong> to sort cinemas by distance (the "Near me" feature).</p>
    <ul>
      <li>Your location is <strong>never sent</strong> to our servers or to any third party.</li>
      <li>Your location is <strong>not stored</strong>.</li>
      <li>The permission is optional — the app is fully functional without it — and you can revoke it at any time in Android settings.</li>
    </ul>

    <h3>Watchlist</h3>
    <p>Movies you save to your watchlist are stored <strong>only locally on your device</strong>. We have no access to them. They are removed when you clear the app's data or uninstall it. If you have Android's automatic backup (Google backup) enabled, the watchlist may be included in it — this is controlled by you in your device settings.</p>

    <h3>Connections to our servers</h3>
    <p>To display movies, cinemas, and showtimes, the app connects to our servers over a secure connection (HTTPS). As with any internet connection, the servers transiently process technical information (e.g. IP address) solely to deliver content and operate the service. We do not use it to identify users and do not associate it with individuals.</p>

    <h3>Third-party content and links</h3>
    <ul>
      <li>Movie metadata (posters, ratings, credits) comes from TMDB. <em>This product uses the TMDB API but is not endorsed or certified by TMDB.</em></li>
      <li>Showtimes come from publicly available cinema program sources.</li>
      <li>The app contains links to external services (e.g. IMDb, Rotten Tomatoes, Metacritic, Letterboxd, trailers, map apps, phone calls). When you follow them, the privacy policies of those services apply.</li>
    </ul>

    <h3>Children</h3>
    <p>The app is not directed at children under 13. In any case, we collect no data from any user.</p>

    <h3>Your rights (GDPR)</h3>
    <p>Because we do not collect or process personal data, we hold no records that we could disclose, correct, or delete for you. If you have any privacy questions, please contact us.</p>

    <h3>Future changes</h3>
    <p>If a future version adds features that require a user account (e.g. a profile and watchlist sync), this policy will be updated <strong>before</strong> their release and will clearly describe what data is collected and how you can delete your account. The current version will always be available on this page.</p>

    <h3>Contact</h3>
    <p>App owner: <strong>Eleni Voreopoulou</strong></p>
    <p>Email: <strong>elenivoreopoulou@gmail.com</strong></p>
  `;
}

document.addEventListener('DOMContentLoaded', () => {
  renderPrivacyPolicy('#privacy-policy-content');
});
 
