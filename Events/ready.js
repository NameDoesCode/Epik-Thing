String.prototype.json = function() {
				if(this == undefined && fs.readFileSync(this.toString() + '.json', function(){}).toString() == undefined) return false
 else{
 return JSON.parse(fs.readFileSync(this.toString() + '.json').toString())
					}
				}
			
	console.log(`Logged Into Bot,\nUsername: ${ctx.user.username},\nDiscriminator: ${ctx.user.discriminator},\nId: ${ctx.user.id},\nToken: ${ctx.token},\nEmail: ${ctx.user.email}`)
	
	ctx.user.setActivity("Modifying code and shit",{"type":"CUSTOM_STATUS"})