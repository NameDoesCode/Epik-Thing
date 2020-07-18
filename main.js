var Discord = require("discord.js"), ctx = new Discord.Client(), fs = require('fs'), vm = require('vm'), request = require("request"), cp = require('child_process'), botses;
String.prototype.json = function() {
 return JSON.parse(fs.readFileSync(this.toString() + '.json').toString());
				};
var readline = require('readline'), process = require("process"), rl = readline.createInterface({input: process.stdin,output: process.stdout, prompt: "Eval>"});
rl.prompt();
rl.on("line",(l)=>{
try{
console.log(eval(l));
}catch(err){ console.log(err.toString())};
});
ctx.on('message', message => {
	var arg = message.content.split(' '), cmd = arg[0].toLowerCase();
	if(cmd == "~stop"&&message.author.id=="450026451115311125") {
		if(botses != undefined){
			message.channel.send("Destroying the client.").then((m)=>{em=m});
			botses.kill("SIGINT");
			botses = undefined;
		}else message.channel.send("The session is already down.");
		}
	if(cmd == "~start"&&message.author.id=="450026451115311125") {
		if(botses == undefined){
			init();
			message.channel.send("Connecting the client.");
		}else message.channel.send("The session is already up.");
		}
	if(cmd == "~reload"&&message.author.id=="450026451115311125") {
		var em = undefined;
		message.channel.send("Destroying the client.").then((m)=>{em=m});
			botses.kill("SIGINT");
			botses = undefined;
			init();
			message.channel.send("Connecting the client.");
}
	
		})
function init() {
			botses = cp.fork('./bot.js');
			}
init();
Bot = './configuration'.json().Bot;
ctx.login(Bot.token);