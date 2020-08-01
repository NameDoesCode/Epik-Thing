String.prototype.json = function() {
				if(this == undefined && fs.readFileSync(this.toString() + '.json', function(){}).toString() == undefined) return false
 else{
 return JSON.parse(fs.readFileSync(this.toString() + '.json').toString())
					}
				}
if("./Arrays/notouch".json().hasOwnProperty(message.author.id)){}else{
	var users;
	if(message.mentions.users.first() != undefined) users = message.mentions.users.first()
		else users = textArgs
		users = ctx.userGet(users,message.guild)
		var res = './Arrays/hug_self'.json()
		res = res[(Math.floor(Math.random() * res.length - 1) + 1)]
					if(users == undefined || users == "tag" || users.guild == undefined) users = `their ${res}`
					var gif = './Arrays/hug'.json()
					gif = gif[(Math.floor(Math.random() * gif.length - 1) + 1)]
		const Embed = new Discord.RichEmbed()
	.setDescription(`***${message.author.username}*** *has started hugging* ***${users}***`)
.setImage(gif)
.setFooter(`${new Date().getTime()-firstRan} Ms.`,message.author.displayAvatarUrl)
message.channel.send(Embed)
}