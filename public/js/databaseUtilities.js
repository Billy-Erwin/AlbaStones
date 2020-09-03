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

var storageRef = firebase.storage().ref();

async function getTeamMembers () {
    return new Promise((resolve, reject) => {
        try {
            let teamMembers = [];
            db.collection("team_members").orderBy("displayOrder", "asc").get().then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    let teamCopy = { ...doc.data()};
                    teamMembers.push(teamCopy);
                });
                resolve(teamMembers);
            });
        } catch (e) {
            reject(e);
        }
    });
}

async function getPhotoUrl(photoPath) {
      return new Promise((resolve, reject) => {
          storageRef.child(photoPath).getDownloadURL().then(function (url) {
              resolve(url);
          }).catch(function (error) {
              reject(error);
          });
      });
}


export {getPhotoUrl, getTeamMembers};
