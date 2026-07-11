// σκοτεινή αίθουσα — Privacy policy content renderer
//
// NOTE: The original single-file document referenced an external
// "privacy-policy.js" that supplied a renderPrivacyPolicy() function,
// but its contents were not included in the source file provided for
// this patch. This is placeholder copy consistent with the site's
// stated facts (no ads, free app, TMDB API usage) — replace with the
// real legal text before publishing.

function renderPrivacyPolicy(selector) {
  const target = document.querySelector(selector);
  if (!target) return;

  target.innerHTML = `
    <h1>Πολιτική Απορρήτου</h1>
    <p>Η εφαρμογή <strong>σκοτεινή αίθουσα</strong> σέβεται το απόρρητό σας. Αυτή η σελίδα εξηγεί ποια δεδομένα συλλέγονται και πώς χρησιμοποιούνται.</p>

    <h2>Δεδομένα που συλλέγουμε</h2>
    <p>Η εφαρμογή δεν απαιτεί δημιουργία λογαριασμού. Συλλέγονται μόνο ανώνυμα στατιστικά χρήσης για τη βελτίωση της εμπειρίας χρήστη.</p>

    <h2>Τρίτες υπηρεσίες</h2>
    <p>Η εφαρμογή χρησιμοποιεί το TMDB API για πληροφορίες ταινιών, χωρίς να υποστηρίζεται ή να πιστοποιείται από το TMDB.</p>

    <h2>Διαφημίσεις</h2>
    <p>Η εφαρμογή δεν εμφανίζει διαφημίσεις και δεν μοιράζεται δεδομένα με διαφημιστικά δίκτυα.</p>

    <h2>Επικοινωνία</h2>
    <p>Για οποιαδήποτε ερώτηση σχετικά με το απόρρητο, επικοινωνήστε στο elenivoreopoulou@gmail.com.</p>
  `;
}

document.addEventListener('DOMContentLoaded', () => {
  renderPrivacyPolicy('#privacy-policy-content');
});
