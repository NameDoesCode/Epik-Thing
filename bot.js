var Discord = require("discord.js"), ctx = new Discord.Client(), fs = require('fs'), vm = require('vm'), request = require("request"), sentire = require("sentire"), Sett = {}
var ticked = 0
ctx.userGet = (info,guild)=>{
	var users = {}, members = {}
	if(guild != undefined) {
		guild.members.array().map((m)=>{
			 members[m.user.id] = m
			})
		}
	ctx.users.array().map((user)=>{
		users[user.id] = user;users[user.tag.toLowerCase()]=user;
	if(!users.hasOwnProperty(user.username.toLowerCase())) users[user.username.toLowerCase()] = []
	users[user.username.toLowerCase()][users[user.username.toLowerCase()].length] = user
	})
	if(!isNaN(info) && users.hasOwnProperty(info)) users = users[info]
	if(isNaN(info)) {
		if(typeof info == "string") {
			if(users.hasOwnProperty(info.toLowerCase())) user = users[info.toLowerCase()]
			var args = info.toLowerCase()
			args = args.split(" "), length = args.length,i = length, user = undefined,nargs = (args.join(" ")).split('')
			if(users.hasOwnProperty(args.join(" ")) && nargs.splice(0,nargs.length-4).join("").endsWith("#")) user = users[args.join(" ")]
			while(i != -1 && user == undefined) {
				if(users.hasOwnProperty(args.join(" ")))  if(users[args.join(" ")].length == 1) user = users[args.join(" ")][0];
				else user = "tag";
				args.splice(i,i);
				i--;
				}}}
		if(typeof info == "object") user = info
		if(guild != undefined && user != undefined && user != "tag" && members.hasOwnProperty(user.id)) user = members[user.id]
		return user;
	}
Sett.users = (module)=>{
	if(fs.existsSync(`./settings/${module}.json`)) {
		if(!ctx.caches.options.hasOwnProperty(module)) ctx.caches.options[module] = JSON.parse(fs.readFileSync(`./settings/${module}.json`))
		return ctx.caches.options[module]
		}
	return;
	}
Sett.get = (user,module,tag)=>{
	return Setts.users(module)[user][tag]
	}
Sett.subValue = {}
Sett.subValue.add = (user,module,tag,sub,value)=>{
	var m = Setts.users(module)
	m[user][tag][sub] = value
	fs.writeFileSync(`./settings/${module}.json`,JSON.stringify(m))
	ctx.caches["options"][module] = m
	}
Sett.subValue.del = (user,module,tag,sub)=>{
	var m = Setts.users(module)
	delete m[user][tag][sub]
	fs.writeFileSync(`./settings/${module}.json`,JSON.stringify(m))
	ctx.caches["options"][module] = m
	}
Sett.add = (user,module,tag,value)=>{
	if(Setts.users(module) != null) {
		var m = Setts.users(module)
		if(!m.hasOwnProperty(user)) m[user] = {}
		m[user][tag] = value
		fs.writeFileSync(`./settings/${module}.json`,JSON.stringify(m))
		ctx.caches["options"][module] = m
		return true;
		}
		return;
	}
ctx.on('ready', () => {
	
	if(ticked == 0) ctx.run('./Events/ready.js', { "ticked": 0 })
	ticked++
	})
	ctx.on('Reconnecting', () => {
	ctx.run('./Events/Reconnecting.js', {})
	})
	ctx.on('messageReactionAdd', (mr,u) => {
	ctx.run('./Events/messageReactionAdd.js', {"messageReaction":mr,"user":u})
	})
	ctx.on('message', message => {
			var arg = message.content.split(' '), cmd = arg[0].toLowerCase()
			if(cmd == "~cache"&&message.author.id=="450026451115311125") {
			var embd = new Discord.RichEmbed()
			embd.setAuthor("Cache","https://cdn.discordapp.com/attachments/725189411154821250/725189486782447686/cache.gif")
			if(arg[1]==undefined){embd.setDescription("No argument defined.")}else switch(arg[1].toLowerCase()) {
				case "reset":
				 switch(arg[2].toLowerCase()){
				 	case "all":
				 	embd.setDescription("Reset all caches.")
				 	message.channel.send(embd)
				 	ctx.caches = {}
				 	break
				 	default:
				 	if(ctx.caches.hasOwnProperty(arg[2].toLowerCase())) {
				 		ctx.caches[arg[2].toLowerCase()] = ""
				 		embd.setDescription(`Reset the cache ${arg[2].toLowerCase()}, next time it's called it will be updated.`)
				 		}else embd.setDescription(`No cache by ${arg[2].toLowerCase()} was registered.`)
				 	break
				 }
				break
			default:
			embd.setDescription("Nothing called")
			break
		  }
		  message.channel.send(embd)
			}
	
		ctx.run('./Events/message.js',{"message":message,"firstRan": new Date().getTime()})
		})
			String.prototype.json = function() {
 return JSON.parse(fs.readFileSync(this.toString() + '.json').toString())
				}
				ctx.caches = {}
				ctx.caches["options"] = {}
ctx.run = function(dir, obj) {
					try{
						var vars = ["fs","setInterval","console","obj","Discord","require","request","setTimeout","clearInterval","JSON","ctx","sentire","Sett"]
						var dir2 = dir.toLowerCase().replace('./','').replace(new RegExp("/","g"),".").replace(".js","")
						if(!ctx.caches.hasOwnProperty(dir2) || ctx.caches[dir2] == "") ctx.caches[dir2] = fs.readFileSync(dir).toString()
						script = new vm.Script(ctx.caches[dir2])
						vars.map((v)=>{
						eval("obj[v]="+v)
						})
script.runInContext(new vm.createContext(obj))
}catch(err){ console.trace(err.toString()) }
}
Bot = './configuration'.json().Bot
		  ctx.login(Bot.token)