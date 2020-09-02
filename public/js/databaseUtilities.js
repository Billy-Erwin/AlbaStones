// const firebase = require("firebase");
// Required for side-effects
// require("firebase/firestore");
var db;
var firebaseConfig = {
    projectId: "albastones-128c9",
    apiKey: "AIzaSyD-toD2yGl07RmaBCiTS8UZt18rzMVP_fA",
    authDomain: "albastones-128c9.firebaseapp.com",
    databaseURL: "https://albastones-128c9.firebaseio.com",
    storageBucket: "albastones-128c9.appspot.com",
    messagingSenderId: "503473807526",
    appId: "1:503473807526:web:276446b752708a0c489467",
    measurementId: "G-G8JZKQJKCG"
};

// Initialize Cloud Firestore through Firebase
firebase.initializeApp(firebaseConfig);
db = firebase.firestore();


async function getTeamMembers () {
    return new Promise((resolve, reject) => {
        try {
            let teamMembers = [];
            db.collection("team_members").orderBy("displayOrder", "asc").get().then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    teamMembers.push(doc.data());
                });
                resolve(teamMembers);
            });
        } catch (e) {
            reject(e);
        }
    });
}

export {getTeamMembers};
