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
var AbortCodes = {
    var BOT_DISALLOWED = 20001,
    var BOT_REQUIRED = 20002,
    var EMAIL_VERIFICATION_REQUIRED = 40002,
    var INVALID_ACCESS = 50001,
    var INVALID_ACCOUNT_TYPE = 50002,
    var INVALID_ACTION_DM = 50003,
    var INVALID_BULK_DELETE_COUNT = 50016,
    var INVALID_CHANNEL_TYPE = 50024,
    var INVALID_CLIENT_ID = 50023,
    var INVALID_EMBED_DISABLED = 50004,
    var INVALID_INVITE_CODE = 50020,
    var INVALID_MESSAGE_AUTHOR = 50005,
    var INVALID_MESSAGE_EMPTY = 50006,
    var INVALID_MESSAGE_SEND_NON_TEXT = 50008,
    var INVALID_MESSAGE_SEND_USER = 50007,
    var INVALID_MESSAGE_VERIFICATION_LEVEL = 50009,
    var INVALID_MFA_LEVEL = 50017,
    var INVALID_NOTE = 50015,
    var INVALID_OAUTH2_ACCESS_TOKEN = 50025,
    var INVALID_OAUTH2_MISSING_SCOPE = 50026,
    var INVALID_OAUTH_APP_BOT = 50010,
    var INVALID_OAUTH_APP_LIMIT = 50011,
    var INVALID_OAUTH_STATE = 50012,
    var INVALID_PASSWORD = 50018,
    var INVALID_PERMISSIONS = 50013,
    var INVALID_PHONE_NUMBER = 50022,
    var INVALID_PIN_MESSAGE_CHANNEL = 50019,
    var INVALID_TOKEN = 50014,
    var INVALID_WEBHOOK_TOKEN = 50027,
    var MFA_DISABLED = 60002,
    var MFA_ENABLED = 60001,
    var MFA_INVALID_CODE = 60008,
    var MFA_INVALID_SECRET = 60005,
    var MFA_INVALID_SESSION = 60009,
    var MFA_INVALID_TICKET = 60006,
    var MFA_REQUIRED = 60003,
    var MFA_UNVERIFIED = 60004,
    var PHONE_NUMBER_UNABLE_TO_SEND = 70003,
    var RATE_LIMIT_DM_OPEN = 40003,
    var RELATIONSHIP_INCOMING_BLOCKED = 80001,
    var RELATIONSHIP_INCOMING_DISABLED = 80000,
    var RELATIONSHIP_INVALID_DISCORD_TAG = 80004,
    var RELATIONSHIP_INVALID_SELF = 80003,
    var RELATIONSHIP_INVALID_USER_BOT = 80002,
    var RPC_PROXY_DISALLOWED = 20003,
    var SEND_MESSAGE_TEMPORARILY_DISABLED = 40004,
    var TOO_MANY_BOT_GUILDS = 30001,
    var TOO_MANY_FRIENDS = 30002,
    var TOO_MANY_GUILD_ROLES = 30005,
    var TOO_MANY_PINS_IN_CHANNEL = 30003,
    var TOO_MANY_RECIPIENTS = 30004,
    var TOO_MANY_USER_GUILDS = 30001,
    var TOO_MANY_USING_USERNAME = 30006,
    var TOO_MANY_WEBHOOKS = 30007,
    var UNAUTHORIZED = 40001,
    var UNKNOWN_ACCOUNT = 10001,
    var UNKNOWN_APPLICATION = 10002,
    var UNKNOWN_CHANNEL = 10003,
    var UNKNOWN_EMOJI = 10014,
    var UNKNOWN_GUILD = 10004,
    var UNKNOWN_INTEGRATION = 10005,
    var UNKNOWN_INVITE = 10006,
    var UNKNOWN_MEMBER = 10007,
    var UNKNOWN_MESSAGE = 10008,
    var UNKNOWN_OVERWRITE = 10009,
    var UNKNOWN_PLATFORM = 10010,
    var UNKNOWN_ROLE = 10011,
    var UNKNOWN_TOKEN = 10012,
    var UNKNOWN_USER = 10013,
    var UNKNOWN_WEBHOOK = 10015
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
editStatus (status, game, isafk) {
  if (!game) game = {"name": null}
  return Socket.send(JSON.stringify({"op": 3, "d": {"game": game, "afk": isafk, "since": Date.now(), "status": status}}))
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
