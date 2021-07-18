module.exports = (client) => {

	const Discord = require("discord.js");

	client.on("clickButton", async(button) => {
			
		if(button.id === "31415"){
			await button.reply.think().then((t) => {
				const embed = new Discord.MessageEmbed()
					.setDescription("Aquí el rich");

				button.message.edit(embed)
			}).then(t.delete({timeout:0}))
		};

	});
};