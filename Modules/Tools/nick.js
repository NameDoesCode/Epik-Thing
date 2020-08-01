 message.mentions.members.first().setNickname(message.content.replace(arg[0] + " ","").replace(message.mentions.users.first(),"")).then((user)=>{
	message.channel.send(`*Set **${message.mentions.users.first().tag}** nickname to **${message.content.replace(arg[0]+" ","").replace(message.mentions.users.first(),"")}** I hope they enjoy your choice.*`)
	})
	 