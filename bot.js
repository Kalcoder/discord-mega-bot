const Discord = require('discord.js')

const handlers = require('./handlers')

const auth = require('./credentials.json')

const bot = new Discord.Client()
bot.login(auth.token)

console.log("Hello!")

bot.on("ready", () => {
  console.log("Ready to go!")
})

bot.on("message", (message) => {
  console.log(message.content)
})
