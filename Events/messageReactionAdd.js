var message = messageReaction.message
String.prototype.json = function() {
				if(this == undefined && fs.readFileSync(this.toString() + '.json', function(){}).toString() == undefined) return false
 else{
 return JSON.parse(fs.readFileSync(this.toString() + '.json').toString())
					}
				}
if(message.embeds[0]!=null) switch(message.content) {
	case "Kiss reaction command.":
	if(message.embeds[0] == undefined || message.embeds[0].fields[0] == undefined) {}else{
		var spl = message.embeds[0].description.split(' ')
	if(message.embeds[0].fields[0].name == "Consent"){
		switch(messageReaction.emoji.name) {
			case "😙":
			try{
		var descr = message.embeds[0].description
		var user2 = descr.replace(" *has tried to kiss* ***You***","").replace("***","").replace("***","")
		user2 = ctx.userGet(user2)
		if(user.id == message.channel.recipient.id) {
		var gif = './Arrays/kiss'.json()
		var type = message.embeds[0].fields[1].value
		gif = gif[type]
		gif = gif[(Math.floor(Math.random() * gif.length - 1) + 1)]		
		var embd = new Discord.RichEmbed()
		embd.setDescription(`***You*** *have started kissing* ***${user2.tag}***`)
    embd.setImage(gif)
		message.channel.send(embd).then((m)=>{message.delete()})
		var embd2 = new Discord.RichEmbed()
		embd2.setImage(gif)
		embd2.setDescription(`***${user.tag}*** *has started kissing* ***You***`)
		user2.send(embd2)
		}
		}catch(err){message.channel.send(err.toString());message.channel.send(user2)}
		break
default:
console.log(messageReaction.emoji.name)
break
		 case "❌":
		var descr = message.embeds[0].description
		var user2 = ctx.userGet(descr.replace(" *has tried to kiss* ***you***","").replace("***","").replace("***",""))
		if(user.id == message.channel.recipient.id) {
		var gif = './Arrays/slap'.json()
		gif = gif[(Math.floor(Math.random() * gif.length - 1) + 1)]		
		var embd = new Discord.RichEmbed()
		embd.setDescription(```***You*** *have slapped* ***${user2.tag}***```)
    embd.setImage(gif)
		message.channel.send(embd).then((m)=>{message.delete()})
		embd.setDescription(`***You*** *have been slapped by* ***${user.tag}***`)
		user2.send(embd)
		}
		break
		}}
	}
	break
  case "Fuck reaction command.":
	if(message.embeds[0] == undefined || message.embeds[0].fields[0] == undefined) {}else{
		var spl = message.embeds[0].description.split(' ')
	if(message.embeds[0].fields[0].name == "Consent" && spl[spl.length-1] == `***<@${user.id}>***`){
		switch(messageReaction.emoji.name) {
			case "consent":
		var descr = message.embeds[0].description.replace("*has tried to fuck*","*has started fucking*").replace(`***<@${user.id}>***`,`***${user.username}***`)
		var gif = './Arrays/sex'.json()
		gif = gif[(Math.floor(Math.random() * gif.length - 1) + 1)]		
		var embd = new Discord.RichEmbed()
		.setDescription(descr)
.setImage(gif)
		message.channel.send(embd).then((m)=>{message.delete()})
		break
default:
console.log(messageReaction.emoji.name)
break
		 case "❌":
		var descr = message.embeds[0].description.replace("*has tried to fuck*","*has been slapped by*").replace(`***<@${user.id}>***`,`***${user.username}***`)
		var gif = './Arrays/slap'.json()
		gif = gif[(Math.floor(Math.random() * gif.length - 1) + 1)]		
		var embd = new Discord.RichEmbed()
		.setDescription(descr)
.setImage(gif)
		message.channel.send(embd).then((m)=>{message.delete()})
		break
		}}}
	break
	
	
	case "Fingering reaction command.":
	if(message.embeds[0] == undefined || message.embeds[0].fields[0] == undefined) {}else{
		var spl = message.embeds[0].description.split(' ')
	if(message.embeds[0].fields[0].name == "Consent" && spl[spl.length-1] == `***<@${user.id}>***`){
		switch(messageReaction.emoji.name) {
			case "consent":
		var descr = message.embeds[0].description.replace("*has tried to finger*","*has started fingering*").replace(`***<@${user.id}>***`,`***${user.username}***`)
		var gif = './Arrays/fingering'.json()
		gif = gif[(Math.floor(Math.random() * gif.length - 1) + 1)]		
		var embd = new Discord.RichEmbed()
		.setDescription(descr)
.setImage(gif)
		message.channel.send(embd).then((m)=>{message.delete()})
		break
default:
console.log(messageReaction.emoji.name)
break
		 case "❌":
		var descr = message.embeds[0].description.replace("*has tried to finger*","*has been slapped by*").replace(`***<@${user.id}>***`,`***${user.username}***`)
		var gif = './Arrays/slap'.json()
		gif = gif[(Math.floor(Math.random() * gif.length - 1) + 1)]		
		var embd = new Discord.RichEmbed()
		.setDescription(descr)
.setImage(gif)
		message.channel.send(embd).then((m)=>{message.delete()})
		break
		}}
	}
	break
	}