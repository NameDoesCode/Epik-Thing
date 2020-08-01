	 String.prototype.json = function() {
				if(this == undefined && fs.readFileSync(this.toString() + '.json', function(){}).toString() == undefined) return false
 else{
 return JSON.parse(fs.readFileSync(this.toString() + '.json').toString())
					}
				}
if("./Arrays/notouch".json().hasOwnProperty(message.author.id)){}else{
	var users;
	var Embed = new Discord.RichEmbed()
		if(message.mentions.users.first() != undefined && message.mentions.users.first().id != message.author.id) users = message.mentions.users.first()
		
					if(users == undefined || users.bot) {
						Embed.setDescription(`__**You must choose a user to fuck**__`)
						}else{
Embed.setDescription(`***${message.author.username}*** *has tried to fuck* ***${users}***`)
Embed.addField("Consent", `but he/she must consent, to do that react with ${ctx.emojis.get("727274563611918437")}, react with :x: to deny it.`)
Embed.setFooter(`${new Date().getTime()-firstRan} Ms.`,message.author.displayAvatarUrl)
}
message.channel.send("Fuck reaction command.", Embed).then((message)=>{if(message.embeds[0].description != "__**You must choose a user to kiss**__")message.react(ctx.emojis.get("727274563611918437")).then((r)=>{
								message.react("❌")
								})})
}