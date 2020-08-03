var i = true
if(message.mentions.members.first().highestRole.position <= message.member.highestRole.positon || message.mentions.members.first().user.id == message.guild.owner.id) {
	message.chanel.send("They're your superior silly.")
	i = false
	}
if(i && message.mentions.members.first().highestRole.position <= message.guild.me.highestRole.position) {
	message.chanel.send(`*Try giving Sentire a role that's above **${message.mentions.members.first().highestRole.name}** and try again.*`)
	i = false
	}
if(i) message.mentions.members.first().setNickname(message.content.replace(arg[0] + " ","").replace(message.mentions.users.first(),"")).then((user)=>{
	message.channel.send(`*Set **${message.mentions.users.first().tag}** nickname to **${message.content.replace(arg[0]+" ","").replace(message.mentions.users.first(),"")}** I hope they enjoy your choice.*`)
	})