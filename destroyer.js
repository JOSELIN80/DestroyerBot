const { WAConnection, MessageType } = require('@adiwajshing/baileys');
const fs = require('fs');
const prefix = '.'

async function iniciar () { 
        const client = new WAConnection()
//Aquí el "client" lo pueden cambiar a su gusto. Pero si cambian, tendrán que cambiar todos los "client" por el cambio que hicieron.
        client.logger.level = 'warn'

//llamar al código QR
        client.on('qr', () => {
        })

//crear un archivo Json para guardar información: ID del cliente, Token y Keys del cliente y del SERVER.
        fs.existsSync('./Venom.json') && client.loadAuthInfo('./Venom.json')

//Conectando o reconectando
        client.on('connecting', () => {
        console.log('Conectando')
        })

//La conexión fue en éxito👌🏻
        client.on('open', () => {
        console.log('Conectado exitosamente :D')
        })
        await client.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./Venom.json', JSON.stringify(client.base64EncodedAuthInfo(), null, '\t'))
        

client.on('chat-update', async (venom) => {
try {	  
if (!venom.hasNewMessage) return
if (!venom.messages) return
if (venom.key && venom.key.remoteJid == 'status@broadcast') return

venom = venom.messages.all()[0]
if (!venom.message) return
global.blocked
venom.message = (Object.keys(venom.message)[0] === 'ephemeralMessage') ? venom.message.ephemeralMessage.message : venom.message
const from = venom.key.remoteJid
const type = Object.keys(venom.message)[0]        
const quoted = type == 'extendedTextMessage' && venom.message.extendedTextMessage.contextInfo != null ? venom.message.extendedTextMessage.contextInfo.quotedMessage || [] : []
const typeQuoted = Object.keys(quoted)[0]
const content = JSON.stringify(venom.message)
const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
const body = venom.message.conversation || venom.message[type].caption || venom.message[type].text || ""
chats = (type === 'conversation') ? venom.message.conversation : (type === 'extendedTextMessage') ? venom.message.extendedTextMessage.text : ''
budy = (type === 'conversation' && venom.message.conversation.startsWith(prefix)) ? venom.message.conversation : (type == 'imageMessage') && venom.message.imageMessage.caption.startsWith(prefix) ? venom.message.imageMessage.caption : (type == 'videoMessage') && venom.message.videoMessage.caption.startsWith(prefix) ? venom.message.videoMessage.caption : (type == 'extendedTextMessage') && venom.message.extendedTextMessage.text.startsWith(prefix) ? venom.message.extendedTextMessage.text : ''

if (prefix != "") {
if (!body.startsWith(prefix)) {
cmd = false
comm = ""
} else {
cmd = true
comm = body.slice(1).trim().split(" ").shift().toLowerCase()
}
} else {
cmd = false
comm = body.trim().split(" ").shift().toLowerCase()
}
        
const command = comm

const arg = chats.slice(command.length + 2, chats.length)
const args = budy.trim().split(/ +/).slice(1)
const isCmd = budy.startsWith(prefix)
const q = args.join(' ')
const soyYo = client.user.jid
const botNumber = client.user.jid.split("@")[0]
const ownerNumber = ['########@s.whatsapp.net']
const isGroup = from.endsWith('@g.us')
const sender = venom.key.fromMe ? client.user.jid : isGroup ? venom.participant : venom.key.remoteJid
const senderNumber = sender.split("@")[0]
const isMe = senderNumber == botNumber
const conts = venom.key.fromMe ? client.user.jid : client.contacts[sender] || { notify: jid.replace(/@.+/, '') }
const pushname = venom.key.fromMe ? client.user.name : conts.notify || conts.vname || conts.name || '-'

switch (command) {

case 'bot':
client.sendMessage(from, 'Hola,felicidades, has logrado enviar un mensaje mediante un servidor externo😚', text, {quoted : venom})
break
                
}

} catch (e) {
        
console.log(e)}
        
})      
}
iniciar ()
.catch (err => console.log("unexpected error: " + err))