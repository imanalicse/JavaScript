importScripts("../firebase_config.js")
importScripts('https://www.gstatic.com/firebasejs/10.11.0/firebase-app-compat.js')
importScripts('https://www.gstatic.com/firebasejs/10.11.0/firebase-messaging-compat.js')

const firebaseConfig = {
    apiKey: FIREBASE_API_KEY,
    authDomain: "presentation-list.firebaseapp.com",
    databaseURL: "https://presentation-list-default-rtdb.firebaseio.com",
    projectId: "presentation-list",
    storageBucket: "presentation-list.appspot.com",
    messagingSenderId: "527745596923",
    appId: "1:527745596923:web:1bc8fb91975957cf2c1f5e"
};

// receiving messages in background

const firebaseApp = firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();