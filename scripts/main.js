var myButton = document.getElementById('userbutton');
var headingOne = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  headingOne.textContent = 'Hi ' + myName + '. Welcome to my profile.';
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  headingOne.textContent = 'Hi ' + storedName + '.Welcome to my profile.';
}

myButton.onclick = function() {
  setUserName();
}

function myMap() {
    var mapOptions = {
        center: new google.maps.LatLng(51.5, -0.12),
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.HYBRID
    }
var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}
