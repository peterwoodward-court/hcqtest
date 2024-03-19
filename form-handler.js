// Initialize Firebase
// Replace the following config object with your Firebase project configuration
var firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

document.getElementById('responseForm').addEventListener('submit', submitForm);

function submitForm(e) {
  e.preventDefault();

  // Get values
  var hcqToxicity = document.querySelector('input[name="hcqToxicity"]:checked').value;
  var imageType = document.querySelector('input[name="imageType"]:checked').value;
  var imageQuality = document.querySelector('input[name="imageQuality"]:checked').value;
  var qualityForGrading = document.querySelector('input[name="qualityForGrading"]:checked').value;

  // Save form data to Firebase
  db.collection("responses").add({
    hcqToxicity: hcqToxicity,
    imageType: imageType,
    imageQuality: imageQuality,
    qualityForGrading: qualityForGrading
  }).then(() => {
    console.log("Document successfully written!");
  }).catch((error) => {
    console.error("Error writing document: ", error);
  });
}

