	 String.prototype.json = function() {
				if(this == undefined && fs.readFileSync(this.toString() + '.json', function(){}).toString() == undefined) return false
 else{
 return JSON.parse(fs.readFileSync(this.toString() + '.json').toString())
					}
				}
if("./Arrays/notouch".json().hasOwnProperty(message.author.id)){}else{
	var users;
	var Embed = new Discord.RichEmbed()
	switch(message.channel.type){
		default:
		if(message.mentions.users.first() != undefined) users = message.mentions.users.first()
		else users = textArgs
		users = ctx.userGet(users,message.guild)
		break
		}
					if(users == undefined || users.bot || users == "tag" || users.guild == undefined) {
						if(users != "tag") Embed.setDescription(`__**You must choose a user to kiss**__`)
						else Embed.setDescription(`__**Multiple users with this username cataloged exist, try mentioning them.**__`)
						if(users.guild == undefined) Embed.setDescription(`__**This user isn't in the guild**__`)
						}else{
							
Embed.setDescription(`***${message.author.username}*** *has tried to finger* ***${users.user}***`)
Embed.addField("Consent", `but he/she must consent, to do that react with ${ctx.emojis.get("727274563611918437")}, react with :x: to deny it.`)
Embed.setFooter(`${new Date().getTime()-firstRan} Ms.`,message.author.displayAvatarUrl)
}
message.channel.send("Fingering reaction command.", Embed).then((message)=>{if(Embed.fields[0] != undefined) message.react(ctx.emojis.get("727274563611918437")).then((r)=>{
								message.react("❌")
								})})
}