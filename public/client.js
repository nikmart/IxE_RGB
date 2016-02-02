var socket = io();
var r = 100;
var g = 200;
var b = 200;

function updateTextInput(val, sliderTextID) {
  document.getElementById(sliderTextID).value=val;
  socket.emit('rgb', {r,g,b});
}

// read the data from the message that the server sent and change the
// background of the webpage based on the data in the message
socket.on('server-msg', function(msg) {
    console.log('msg:', msg);
});
