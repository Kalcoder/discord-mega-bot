const Discord = require('discord.js')

const auth = require('./credentials.json')

const bot = new Discord.Client({
  token: auth.token
})

bot.on("ready", () => {
  console.log("Ready to go!")
})