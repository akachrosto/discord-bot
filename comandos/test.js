module.exports = async(client, message, args) => {
	const { MessageEmbed } = require("discord.js")
	const { MessageButton, MessageActionRow } = require('discord-buttons');
	const button = new MessageButton()
	    .setStyle('red')
  		.setLabel('My First Button!') 
  		.setID('31415')

  	const embed = new MessageEmbed()
  		.setDescription("Hey hey hey");

	message.channel.send(embed, button);
};