users = [];

const socket = (io) => (connection) => {
    connection.on('set-username', msg => {
        console.log(msg);
        if(users.indexOf(msg) > -1)
            connection.emit('check-exist-user', msg + ' username is taken! Try some other username.');
        else {
            users.push(msg);
            connection.emit('after-set-username', { username: msg });
        }
    });
    connection.on('sent-message', msg => {
        io.sockets.emit('receive-message', msg);
    })
}

module.exports = socket;