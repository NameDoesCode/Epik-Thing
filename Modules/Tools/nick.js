var cont = message.content.replace(arg[0] + " ","").replace(message.mentions.users.first(),""), before = message.mentions.members.first().displayName
message.mentions.members.first().setNickname(cont)
    var embd = new Discord.RichEmbed()
    embd.setTitle("Nickname Changed.")
    embd.addField("Executer",message.author.tag)
    embd.addField("Target",message.mentions.users.first().tag)
    if(cont == "") cont = message.mentions.users.first().username
    embd.addField("New",cont)
    if(message.mentions.users.first().username != before) embd.addField("Before",before)
	message.channel.send(embd)
	 