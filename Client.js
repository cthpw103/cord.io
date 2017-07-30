/*
cord.js
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
function getPerm(perm) {
    var result = []
    this.perm = perm
    for(var d of Object.keys(perms)) {
      if (!d.startsWith('all')) {
        if (this.perm & perms[d]) {
          result.push({name: d, value: true})
        }
      }
    }
    return result
}

var perms = {
  createInstantInvite: 1,
  kickMembers:         1 << 1,
  banMembers:          1 << 2,
  administrator:       1 << 3,
  manageChannels:      1 << 4,
  manageGuild:         1 << 5,
  readMessages:        1 << 10,
  sendMessages:        1 << 11,
  sendTTSMessages:     1 << 12,
  manageMessages:      1 << 13,
  embedLinks:          1 << 14,
  attachFiles:         1 << 15,
  readMessageHistory:  1 << 16,
  mentionEveryone:     1 << 17,
  externalEmojis:      1 << 18,
  voiceConnect:        1 << 20,
  voiceSpeak:          1 << 21,
  voiceMuteMembers:    1 << 22,
  voiceDeafenMembers:  1 << 23,
  voiceMoveMembers:    1 << 24,
  voiceUseVAD:         1 << 25,
  changeNickname:      1 << 26,
  manageNicknames:     1 << 27,
  manageRoles:         1 << 28,
  manageEmojis:        1 << 30,
  all:      0b1111111111101111111110000111111,
  allGuild: 0b1111100000000000000000000111111,
  allText:  0b0010000000001111111110000010001,
  allVoice: 0b0010011111100000000000000010001
}

function decompressWSMessage(m, f) {
	f = f || {};
	return f.binary ? JSON.parse(Zlib.inflateSync(m).toString()) : JSON.parse(m);
}
class Client extends EventEmitter {
function(token) {
var Socket = new WebSocket('wss://gateway.discord.gg/?encoding=json&v=6')
Socket.onopen = function () {
  this.emit("ready");
}
Socket.onmessage = function (evt) {
  var event = JSON.parse(evt.data).t
     this.emit(event); //when you are too lazy to make some handling
sendMessage(channel, msg) {
  return apiCall('POST', 'https://discordapp.com/api/channels/' + channel + '/messages', true, {authorization: this.token, body: {content: msg}})
};
editMessage (channel, id, content) {
  return apiCall('PATCH', 'https://discordapp.com/api/channels/' + channel + '/messages/' + id, true, {authorization: this.token, body: {content: content}})
};
editGame (status, game) {
  if (!game) game = {"name": null}
  return Socket.send(JSON.stringify({"op": 3, "d": {"game": game, "afk": "", "since": Date.now(), "status": status}}))
};
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
