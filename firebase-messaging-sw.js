importScripts("https://www.gstatic.com/firebasejs/7.5.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/7.5.0/firebase-messaging.js");
var firebaseConfig = {
  apiKey: "AIzaSyDH3DcbibkFVWC2rIe6-JYsk2DrqMXiAXw",
  authDomain: "learning-arch.firebaseapp.com",
  databaseURL: "https://learning-arch.firebaseio.com",
  projectId: "learning-arch",
  storageBucket: "learning-arch.appspot.com",
  messagingSenderId: "1023377171544",
  appId: "1:1023377171544:web:749853e9fb4354509b562d",
  measurementId: "G-97D9XQL4PK",
};
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function (payload) {
  const promiseChain = clients
    .matchAll({
      type: "window",
      includeUncontrolled: true,
    })
    .then((windowClients) => {
      for (let i = 0; i < windowClients.length; i++) {
        const windowClient = windowClients[i];
        windowClient.postMessage(payload);
      }
    })
    .then(() => {
      return registration.showNotification("New Message");
    });
  return promiseChain;
});
self.addEventListener("notificationclick", function (event) {
  console.log("notification received: ", event);
});
