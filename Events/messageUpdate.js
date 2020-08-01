
user = mm.author
 String.prototype.clean = function() {
var cont2 = this,
syms = {"'":"<1>",'"':"<2>","\n":"<3>"},
symC = ["'",'"','\n']
			this.split('').map(function(contt) {
				 symC.map(function(cc) {
				 if(cont2.includes(cc))	{
				 	cont2 = cont2.replace(cc, syms[cc])
				 }})})
				return cont2
			}
	 String.prototype.json = function() {
				if(this == undefined && fs.readFileSync(this.toString() + '.json', function(){}).toString() == undefined) return false
 else{
 return JSON.parse(fs.readFileSync(this.toString() + '.json').toString())
					}
				}
ctx.run('./Modules/Moderation/log_user.js', { "user": user})
	var logData = { "info": {"author": {"avatar": (m.author.displayAvatarURL).clean(), "username": (m.author.username).clean()},"channel": { "id": m.channel.id, "name": "DM" } }, "message": { "old": {"id": m.id, "time": m.createdTimestamp, "content": (m.content).clean() }, "new": {"id": mm.id, "time": mm.createdTimestamp, "content": (mm.content).clean() } }}
		if(m.channel.type == "text") logData["info"]["guild"] = { "id": m.guild.id, "name": (m.guild.name).clean() }
		if(m.channel.type == "text") logData.info.channel.name = m.channel.name.clean()
	//	fs.writeFileSync(`./Logs/User/${m.author.id}/Message_Updated/${m.id}.json`, JSON.stringify(logData))
