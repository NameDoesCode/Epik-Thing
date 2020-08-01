if(arg[1] != "") require("child_process").exec(`wget -cO - https://raw.githubusercontent.com/NameDoesCode/Sentire/master/${arg[1]}.js > ./${arg[1]}.js`, (err, stdo, stde) => {

			var embd = new Discord.RichEmbed()
			if(stdo != "") {
               embd.setDescription(`Successfully downloaded ${arg[1]}.`)
               ctx.caches[arg[1].replace("/",".").toLowerCase()] = ""
            }
			if(stde != "" || err != null) embd.setDescription("Download failed.")
			if(embd == new Discord.RichEmbed()) embd.addField("Error","Embed messed up.")
message.channel.send(embd)
			})
else message.channel.send("No arg defined.")