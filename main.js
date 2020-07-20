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
	var arg = message.content.split(' '), cmd = arg[0].toLowerCase(),ta = message.content.replace(arg[0]+" ","")
	if("./Arrays/owners".json().hasOwnProperty(message.author.id)) 
	switch(cmd.replace("~","")){
	case "stop":
		if(botses != undefined){
			message.channel.send("Destroying the client.").then((m)=>{em=m});
			botses.kill("SIGINT");
			botses = undefined;
		}else message.channel.send("The session is already down.");
		break
	case "exec":
		if(ta != "") cp.exec(ta, (err, stdo, stde) => {
			var embd = new Discord.RichEmbed()
			if(stdo != "") embd.addField("STDOUT",stdo)
			if(stde != "") embd.addField("STDERR",stde)
			if(err != "") embd.addField("Error", err)
			message.channel.send(embd)
			})
			else message.channel.send("No command specified.")
		break
	case "start":
		if(botses == undefined){
			init();
			message.channel.send("Connecting the client.");
		}else message.channel.send("The session is already up.");
		break
 case "reload":
		var em = undefined;
		message.channel.send("Destroying the client.").then((m)=>{em=m});
			botses.kill("SIGINT");
			botses = undefined;
			init();
			message.channel.send("Connecting the client.");
			break
	}
		})
function init() {
			botses = cp.fork('./bot.js');
			}
init();
Bot = './configuration'.json().Bot;
ctx.login(Bot.token);