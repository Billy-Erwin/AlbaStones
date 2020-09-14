var db;

var firebaseConfig = {
    projectId: "albastones-1939b",
    apiKey: "AIzaSyD-toD2yGl07RmaBCiTS8UZt18rzMVP_fA",
    authDomain: "albastones-1939b.firebaseapp.com",
    databaseURL: "https://albastones-1939b.firebaseio.com",
    storageBucket: "albastones-1939b.appspot.com",
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
async function getHousePlans () {
    return new Promise((resolve, reject) => {
        try {
            let housePlans = [];
            db.collection("house_plans").get().then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    let planCopy = { ...doc.data()};
                    housePlans.push(planCopy);
                });
                resolve(housePlans);
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

async function getPhotoUrlFromReference(reference) {
    return new Promise((resolve, reject) => {
        reference.getDownloadURL().then(function (url) {
            resolve(url);
        }).catch(function (error) {
            reject(error);
        });
    });
}

async function getPhotoGallery(folderName) {
    return new Promise((resolve, reject) => {
        try {
            storageRef.child(folderName).listAll().then(function(result) {
                resolve(result.items);
            });
        } catch (e) {
            reject(error);
        }
    });
}


export { getPhotoUrl, getTeamMembers, getPhotoGallery, getPhotoUrlFromReference, getHousePlans };
