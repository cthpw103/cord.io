/*
cord.io
by cth103
---------
Client
--------
*/

const Zlib = require('zlib');
const EventEmitter = require('events').EventEmitter;
const request = require('superagent');
const apibase = "https://discordapp.com/api/";
const token;
class Client extends EventEmitter {
function(token) {
var Socket = new WebSocket('wss://gateway.discord.gg/?encoding=json&v=6')
Socket.onopen = function () {
  this.emit("ready");
}
Socket.onmessage = function (evt) {
  var event = JSON.parse(evt.data).t
     this.emit(event); //when you are too lazy to make some handling
}
// i die
sendMessage(channel, msg) {
  return apiCall('POST', 'https://discordapp.com/api/channels/' + channel + '/messages', true, {authorization: this.token, body: {content: msg}})
}
editMessage (channel, id, content) {
  return apiCall('PATCH', 'https://discordapp.com/api/channels/' + channel + '/messages/' + id, true, {authorization: this.token, body: {content: content}})
}
editStatus (status, game, isafk) {
  if (!game) game = {"name": null}
  return Socket.send(JSON.stringify({"op": 3, "d": {"game": game, "afk": isafk, "since": Date.now(), "status": status}}))
}
login() {
request
     .post(apibase + "/auth/login")
    .send({ token: this.token })
    
function(err, res){
  if (err) throw err;
  return res.text;
});
}
}
