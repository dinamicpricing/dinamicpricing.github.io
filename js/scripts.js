/*!
* Start Bootstrap - Coming Soon v6.0.5 (https://startbootstrap.com/theme/coming-soon)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-coming-soon/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

'use strict';

//grab a form
const form = document.querySelector('.form-inline');

//grab an input
const inputEmail = form.querySelector('#inputEmail');


//config your firebase push
const config = {
    apiKey: "AIzaSyClbPDzcL-WCnahuPcoys4Rs4dnh95iPuI",
    authDomain: "vita-proj.firebaseapp.com",
    databaseURL: "https://vita-proj-default-rtdb.firebaseio.com",
    projectId: "vita-proj",
    storageBucket: "vita-proj.appspot.com",
    messagingSenderId: "552484108774",
    appId: "1:552484108774:web:ff7b4ce59699941e073e27",
    measurementId: "G-GDRMPY7EZK"
  };

//create a functions to push
    function firebasePush(input) {


        //prevents from braking
        if (!firebase.apps.length) {
            firebase.initializeApp(config);
        }

        //push itself
        var mailsRef = firebase.database().ref('emails').push().set(
            {
                mail: input.value
            }
        );

    }

//push on form submit
    if (form) {
        form.addEventListener('submit', function (evt) {
            evt.preventDefault();
            firebasePush(inputEmail);

            //shows alert if everything went well.
            return alert('Data Successfully Sent to Realtime Database');
        })
    }