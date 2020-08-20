var message = messageReaction.message
String.prototype.json = function() {
				if(this == undefined && fs.readFileSync(this.toString() + '.json', function(){}).toString() == undefined) return false
 else return JSON.parse(fs.readFileSync(this.toString() + '.json').toString())
				}
