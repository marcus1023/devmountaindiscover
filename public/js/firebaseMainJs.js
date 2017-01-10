var mainText = document.getElementById("mainText");
var submitButton = document.getElementById("submitButton");

function submitClick(){
  var firebaseRef = firebase.database().ref();

  var messageText = mainText.value;

  firebaseRef.push().set(messageText);
  window.alert('yo yo ma')
}
