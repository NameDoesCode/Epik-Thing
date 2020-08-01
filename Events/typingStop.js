
c = channel
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
 ctx.run('./Modules/Moderation/log_user.js', { "user": user })
 var logData = { "info": {"author": {"avatar": (user.displayAvatarURL).clean(), "username": (user.username).clean()},"channel": { "id": c.id, "name": "DM" } },  "time": new Date().getTime() }
		if(c.type == "text") logData["info"]["guild"] = { "id": c.guild.id, "name": (c.guild.name).clean() }
		if(c.type == "text") logData.info.channel.name = c.name.clean()
		//fs.writeFileSync(`./Logs/User/${user.id}/Stopped_Typing/${new Date().getTime()}.json`, JSON.stringify(logData))
