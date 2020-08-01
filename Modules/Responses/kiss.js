	 String.prototype.json = function() {
				if(this == undefined && fs.readFileSync(this.toString() + '.json', function(){}).toString() == undefined) return false
 else{
 return JSON.parse(fs.readFileSync(this.toString() + '.json').toString())
					}
				}
if("./Arrays/notouch".json().hasOwnProperty(message.author.id)){}else{
	var userArray = []
	
	switch(message.channel.type){
		default:
		userArray = message.mentions.users.array().map((a)=>{return a.tag})
		break
		}
userArray.map((us)=>{
var users = ctx.userGet(us,message.guild)
					if(users == undefined || users.bot || users == "tag" || users.guild == undefined) {
						if(users != "tag") Embed.setDescription(`__**You must choose a user to kiss**__`)
						else Embed.setDescription(`__**Multiple users with this username cataloged exist, try mentioning them.**__`)
						if(users.guild == undefined) Embed.setDescription(`__**This user isn\'t in the guild**__`)
						}else{
							var kisstype = "straight",lf = {"l":"lesbian","les":"lesbian","lesbian":"lesbian","g":"gay","gay":"gay"}
							arg.map((a)=>{if(a.startsWith("-") && lf.hasOwnProperty(a.replace("-",""))) kisstype = lf[a.replace("-","")]})
							var Embed = new Discord.RichEmbed()
								Embed.setDescription(`You have tried to kiss ${users.user.tag}`)
								var i = true, m;
								m = message.author.send(Embed).catch((err)=>{
									 i = !i;
								   message.channel.send(`*The bot can not dm you **${message.author}***`)
								})
								var Embed = new Discord.RichEmbed()
Embed.setDescription(`***${message.author.tag}*** *has tried to kiss* ***You***`)
Embed.addField("Consent", `but you must consent, to do that react with :kissing_smiling_eyes:, react with :x: to deny it.`)
Embed.addField("Type", kisstype)
Embed.setFooter(`${new Date().getTime()-firstRan} Ms.`,message.author.displayAvatarUrl)
if(i) {
	users.user.send("Kiss reaction command.", Embed).then((message)=>{if(Embed.fields[0] != undefined) message.react("😙").then((r)=>{
								message.react("❌")
								})}).catch((err)=>{
									 i = !i;
								   message.channel.send(`*The bot can not dm the user: **${users.user.tag}***`)
								   m.delete()
								})
								}
								}})
}