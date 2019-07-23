const socket = io();
var user;

const enter = (element, callback) => {
    if(event.key == 'Enter') callback(element)
};

function setUsername(element) {
    socket.emit('set-username', element.value);
};

function sendMessage(element) {
    if(element.value.length) {
        socket.emit('sent-message', {message: element.value, user: user});
        element.value = ""
    }
}

socket.on('receive-message', function(msg) {
    if(user) document.getElementById('message-container').innerHTML += `<div><b>${msg.user}</b>: ${msg.message}</div>`;
})

socket.on('check-exist-user', function(msg) {
    document.getElementById('error-container').innerHTML = msg;
});

socket.on('after-set-username', function(msg) {
    user = msg.username;
    document.body.innerHTML = `Hi ${user}<p>\
    <input type = "text" placeholder = "Enter your message!" id = "message" onkeydown=enter(this,sendMessage)>\
    <div id = "message-container"></div>`;
});