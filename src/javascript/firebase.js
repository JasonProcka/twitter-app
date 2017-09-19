import * as firebase from 'firebase'
let database

export const init = () => {
    // Init firebase
    let config = {
        apiKey: "AIzaSyB9hdK4kqyivPF65YSao1_QVfWDQdxeqys",
        authDomain: "prockatwitterclone.firebaseapp.com",
        databaseURL: "https://prockatwitterclone.firebaseio.com",
        projectId: "prockatwitterclone",
        storageBucket: "prockatwitterclone.appspot.com",
        messagingSenderId: "190315225571"
    };
    firebase.initializeApp(config);
}