String.prototype.json = function() {
				 return JSON.parse(fs.readFileSync(this.toString() + '.json').toString())
				}
const wget = require("wget")
var arg = message.content.split(' '), cmd = arg[0], prefixes = './configuration'.json().prefixes, textArgs = message.content.replace(arg[0] + ' ',''), cmds="./Modules/list".json(), wt=false,pings={}
cmds.aliases.map((ali)=>{
	ali.fakes.map((af)=>{
		 cmds[af] = cmds[ali.real]
		  })
	})
	prefixes.map((p)=>{
		if(message.content.startsWith(p) && !p.includes(" ")) {
			 cmd=cmd.toLowerCase().replace(p,"")
			 wt = true
		}
		})
	if(cmds.raw.hasOwnProperty(cmd)) {
var atembd = new Discord.RichEmbed()
atembd.setTitle("Issues.")
		switch(message.channel.type) {
			case "text":
			if(!'./Arrays/owners'.json().hasOwnProperty(message.author.id.toString()))  if(cmds.raw[cmd].hasOwnProperty("cd") && !sentire.cd.stat(`${cmd}_command_${message.author.id}`,cmds.raw[cmd].cd)) {
				wt = false
				message.react("❌")
				}else if(cmds.raw[cmd].hasOwnProperty("cd")) sentire.cd.add(`${cmd}_command_${message.author.id}`,cmds.raw[cmd].cd)
				//User Has Permission
			if(cmds.raw[cmd].hasOwnProperty("uhp")&&wt) {
				var perms = message.member.permissions.toArray(), p2 = {}, p3 = {}, bot = [], user =[]
				perms.map((perm)=>{
					p2[perm] = {}
					})
					message.guild.me.permissions.toArray().map((perm)=>{
						p3[perm] = {}
						})
					cmds.raw[cmd]["uhp"].map((p)=>{
						if(!p2.hasOwnProperty(p) && wt){
							wt = false
							user[user.length] = p
							}
							if(!p3.hasOwnProperty(p) && wt){
							wt = false
							bot[user.length] = p
							}
						})
						if(!wt) {
							if(bot[0] != undefined) atembd.addField("The bot is missing the following permissions.",bot.join(", "))
							if(user[0] != undefined) atembd.addField("You are missing the following permissions.",user.join(", "))
							message.channel.send(embd)
							}
				}
				
			if(cmds.raw[cmd].hasOwnProperty("antiTrigger")&&wt) {
				atembd.setTitle("Anti Triggers.")
				cmds.raw[cmd]["antiTrigger"].map((trig)=>{
					
					switch(trig.toLowerCase()) {
					case "isAbove":
					if(message.mentions.users.first() != undefined) {
					if(message.mentions.members.first().highestRole.position >= message.member.highestRole.positon || message.mentions.members.first().user.id == message.guild.owner.id) {
  wt = false
	atembd.addField("Author under target.","The user running the command must be above the target.")
	}
if(message.mentions.members.first().highestRole.position >= message.guild.me.highestRole.position) {
	wt = false
	atembd.addField("Bot under target.","The bot must be above the target.")
	}}
					break
                    case "owner":
					if(!"./Arrays/owners".json().hasOwnProperty(message.author.id)) {
					wt = false
					atembd.addField("You don't have owner access.","Only the owners of this bot can use the command.")
					}
                    break
					case "ping":
					if(message.mentions.users.first() == undefined) {
					atembd.addField("No ping defined.","This is to avoid any issues with the user not mentioning anyone.")
					wt = false
					}
					break
					case "nps":
					if(message.mentions.users.first() != undefined) if(message.mentions.users.first() == message.author) {
					atembd.addField("Self ping.","This is to avoid any issues with the user mentioning themselves and possibly causing a error.")
					wt = false
					}
					break
					case "npb":
					if(message.mentions.users.first() != undefined) if(message.mentions.users.first().bot) {
					atembd.addField("Bot pinged.","This is for commands that don't support bots.")
					wt = false
					}
					break
					case "nsfw":
					if(!message.channel.nsfw) {
					atembd.addField("Not nsfw.","This prevents nsfw commands from being used in non nsfw channels.")
					wt = false
					}
					break
					}})
				}
			break
			default:
			wt = false
			break
			}
			if(!cmds.raw[cmd].toggled&&'./Arrays/owners'.json().hasOwnProperty(message.author.id.toString())) wt = false
			if(wt) {
				ctx.run("./Modules/"+cmds.raw[cmd].path,{"message":message,"textArgs":textArgs, "arg": arg,"firstRan":firstRan})
		 message.delete()
		 }else if(atembd != new Discord.RichEmbed().setTitle("Issues.")) message.channel.send(atembd)
			}