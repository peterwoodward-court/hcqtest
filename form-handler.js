// Initialize Firebase
// Replace the following config object with your Firebase project configuration
var firebaseConfig = {
  apiKey: "AIzaSyDNt4mIFxyhXxTHDOYv6SUio61ZMO4LYPs",
  authDomain: "hcq-test-clinicians.firebaseapp.com",
  projectId: "hcq-test-clinicians",
  storageBucket: "hcq-test-clinicians.appspot.com",
  messagingSenderId: "1000780510338",
  appId: "1:1000780510338:web:f8180c027bc2143c9d309b",
  measurementId: "G-171H5WNPE1"
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

