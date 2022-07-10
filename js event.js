// // // const firebaseConfig = {
// // //   apiKey: "AIzaSyBDemvUugdGilqIA2FwS7ohXrxv0yTaysQ",
// // //   authDomain: "event-389a7.firebaseapp.com",
// // //   databaseURL: "https://event-389a7-default-rtdb.firebaseio.com",
// // //   projectId: "event-389a7",
// // //   storageBucket: "event-389a7.appspot.com",
// // //   messagingSenderId: "91423419778",
// // //   appId: "1:91423419778:web:8a21b097007948f793739b",
// // //   measurementId: "G-GB8B6DX9Y6",
// // // };
// // // Initialize Firebase
// // const firebaseConfig = {
// //   apiKey: "AIzaSyAQYm5PREQ27ie9se1r5Dsc_IWPUqqX0uw",
// //   authDomain: "food-register-6d91d.firebaseapp.com",
// //   databaseURL: "https://food-register-6d91d-default-rtdb.firebaseio.com",
// //   projectId: "food-register-6d91d",
// //   storageBucket: "food-register-6d91d.appspot.com",
// //   messagingSenderId: "1058814530320",
// //   appId: "1:1058814530320:web:3a6d6abfd8227a99734b95",
// // };

// // firebase.initializeApp(firebaseConfig);

// // // reference database
// // var foodregisterDB = firebase.database().ref("foodregister");

// // document.getElementById("foodregister").addEventListener("submit", submitform);

// // function submitform(e) {
// //   e.preventDefault();

// //   var name = getElementVal("name");
// //   var emailid = getElementVal("email");
// //   var event = getElementVal("event");
// //   var address = getElementVal("address");
// // }

// // const savemessages = (name, emailid, event, address) => {
// //   var newfoodregisterform = foodregisterDB.push();

// //   newfoodregisterform.set({
// //     name: name,
// //     emailid: emailid,
// //     event: event,
// //     address: address,
// //   });
// // };

// // const getElementVal = (id) => {
// //   return document.getElementById(id).value;
// // };const firebaseConfig = {
//   apiKey: "AIzaSyAQYm5PREQ27ie9se1r5Dsc_IWPUqqX0uw",
//   authDomain: "food-register-6d91d.firebaseapp.com",
//   databaseURL: "https://food-register-6d91d-default-rtdb.firebaseio.com",
//   projectId: "food-register-6d91d",
//   storageBucket: "food-register-6d91d.appspot.com",
//   messagingSenderId: "1058814530320",
//   appId: "1:1058814530320:web:3a6d6abfd8227a99734b95",
// };

// //initialize firebase
// firebase.initializeApp(firebaseConfig);

// // reference database
// var foodregisterDB = firebase.database().ref("foodregister");

// document.getElementById("foodregister").addEventListener("submit", submitform);

// function submitform(e) {
//   e.preventDefault();

//   var name = adi("name");
//   var emailid = adi("email");
//   var psw = adi("event");
//   var rpsw = adi("address");

//   savemessages(name, emailid, event, address);
// }

// const savemessages = (name, emailid, event, address) => {
//     var newfoodregisterform = foodregisterDB.push();

//     newfoodregisterform.set({
//       name: name,
//       emailid: emailid,
//       event: event,
//       address: address,
//   //   });
//   };

// const adi = (id) => {
//   return document.getElementById(id).value;
// };

// const firebaseConfig = {
//   apiKey: "AIzaSyAQYm5PREQ27ie9se1r5Dsc_IWPUqqX0uw",
//   authDomain: "food-register-6d91d.firebaseapp.com",
//   databaseURL: "https://food-register-6d91d-default-rtdb.firebaseio.com",
//   projectId: "food-register-6d91d",
//   storageBucket: "food-register-6d91d.appspot.com",
//   messagingSenderId: "1058814530320",
//   appId: "1:1058814530320:web:3a6d6abfd8227a99734b95",
// };
const firebaseConfig = {
  apiKey: "AIzaSyBDemvUugdGilqIA2FwS7ohXrxv0yTaysQ",
  authDomain: "event-389a7.firebaseapp.com",
  databaseURL: "https://event-389a7-default-rtdb.firebaseio.com",
  projectId: "event-389a7",
  storageBucket: "event-389a7.appspot.com",
  messagingSenderId: "91423419778",
  appId: "1:91423419778:web:8a21b097007948f793739b",
  measurementId: "G-GB8B6DX9Y6",
};
//initialize firebase
firebase.initializeApp(firebaseConfig);

// reference database
var eventregisterDB = firebase.database().ref("eventregister");

document.getElementById("eventregister").addEventListener("submit", submitform);

function submitform(e) {
  e.preventDefault();

  var name = adi("name");
  var emailid = adi("email");
  var psw = adi("psw");
  var rpsw = adi("rpsw");

  savemessages(name, emailid, psw, rpsw);
}

const savemessages = (name, emailid, psw, rpsw) => {
  var newfoodregisterform = foodregisterDB.push();

  newfoodregisterform.set({
    name: name,
    emailid: emailid,
    psw: psw,
    rpsw: rpsw,
  });
};

const adi = (id) => {
  return document.getElementById(id).value;
};
