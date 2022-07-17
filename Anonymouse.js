require('./settings')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const config = require('./config')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const maker = require('mumaker')
const hrs = new Date().getHours({ timeZone: 'Asia/Colombo' })
const os = require('os')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('./lib/myfunc')
const nexusnw = require('xfarr-api')

//rpg function\\
   const { addInventoriDarah, cekDuluJoinAdaApaKagaDiJson, addDarah, kurangDarah, getDarah }  = require('./storage/user/darah.js')
   const { cekInventoryAdaAtauGak, addInventori,  addBesi, addEmas, addEmerald,addUmpan,addPotion,kurangBesi, kurangEmas, kurangEmerald, kurangUmpan,kurangPotion,getBesi, getEmas, getEmerald,getUmpan,getPotion} = require('./storage/user/alat_tukar.js')
   const { addInventoriMonay, cekDuluJoinAdaApaKagaMonaynyaDiJson, addMonay, kurangMonay, getMonay } = require('./storage/user/monay.js')
   const { addInventoriLimit, cekDuluJoinAdaApaKagaLimitnyaDiJson, addLimit, kurangLimit, getLimit } = require('./storage/user/limit.js')
   const { cekDuluHasilBuruanNya, addInventoriBuruan, addIkan,addAyam, addKelinci, addDomba, addSapi,addGajah,kurangIkan,kurangAyam, kurangKelinci, kurangDomba, kurangSapi,kurangGajah,getIkan,getAyam, getKelinci, getDomba,getSapi,getGajah} = require('./storage/user/buruan.js')
   let DarahAwal =  global.rpg.darahawal
   const isDarah = cekDuluJoinAdaApaKagaDiJson(m.sender)   
   const isCekDarah = getDarah(m.sender)
   const isUmpan = getUmpan(m.sender)
   const isPotion = getPotion(m.sender)
   const isIkan = getIkan(m.sender)
   const isAyam = getAyam(m.sender)
   const isKelinci = getKelinci(m.sender)
   const isDomba = getDomba(m.sender)
   const isSapi = getSapi(m.sender)
   const isGajah = getGajah(m.sender)
   const isMonay = getMonay(m.sender)
   const isLimit = getLimit(m.sender)
   const isBesi = getBesi(m.sender)
   const isEmas = getEmas(m.sender)
   const isEmerald = getEmerald(m.sender)
   const isInventory = cekInventoryAdaAtauGak(m.sender)
   const isInventoriBuruan = cekDuluHasilBuruanNya(m.sender)
   const isInventoryLimit = cekDuluJoinAdaApaKagaLimitnyaDiJson(m.sender)
   const isInventoryMonay = cekDuluJoinAdaApaKagaMonaynyaDiJson(m.sender)
   const ikan = ['⇛','🔐','❤️']   

//rpg database\\
 let _limit = JSON.parse(fs.readFileSync('./storage/user/limit.json'));
 let _buruan = JSON.parse(fs.readFileSync('./storage/user/hasil_buruan.json'));
 let _darahOrg = JSON.parse(fs.readFileSync('./storage/user/darah.json'))

//Database\\
let setik = JSON.parse(fs.readFileSync('./database/setik.json'));
let vien = JSON.parse(fs.readFileSync('./database/vien.json'));
let imagi = JSON.parse(fs.readFileSync('./database/imagi.json'))
let videox = JSON.parse(fs.readFileSync('./database/video.json'))

//read database\\
let tebaklagu = db.data.game.tebaklagu = []
let _family100 = db.data.game.family100 = []
let kuismath = db.data.game.math = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let caklontong = db.data.game.lontong = []
let caklontong_desk = db.data.game.lontong_desk = []
let tebakkalimat = db.data.game.kalimat = []
let tebaklirik = db.data.game.lirik = []
let tebaktebakan = db.data.game.tebakan = []
let vote = db.data.others.vote = []

module.exports = Anony= async (Anony, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await Anony.decodeJid(Anony.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
	    const isMedia = /image|video|sticker|audio/.test(mime)
	    const from = mek.key.remoteJid
	    const type = Object.keys(mek.message)[0]        
	    const content = JSON.stringify(mek.message)

        //group\\
        const groupMetadata = m.isGroup ? await Anony.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
	    
        //member\\
        let picaks = [flaming,fluming,flarun,flasmurf]
		let picak = picaks[Math.floor(Math.random() * picaks.length)]
		
          try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = global.db.data.users[m.sender]
            if (typeof user !== 'object') global.db.data.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
            }
    
            let chats = global.db.data.chats[m.chat]
            if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
            if (chats) {
                if (!('mute' in chats)) chats.mute = false
                if (!('antilink' in chats)) chats.antilink = false
            } else global.db.data.chats[m.chat] = {
                mute: false,
                antilink: false,
            }
		
	    let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
	    if (setting) {
		if (!isNumber(setting.status)) setting.status = 0
		if (!('autobio' in setting)) setting.autobio = false
	    } else global.db.data.settings[botNumber] = {
		status: 0,
		autobio: false,
	    }
	    
        } catch (err) {
            console.error(err)
        }
	
	//check
	

	//group target \\
const reply = (teks) => {
            Anony.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": ` ${global.botname}`,"body": ` 🔐 ᴀɴᴏɴʏᴍᴏᴜꜱ 🔐`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./Anony/anony.jpg`),"sourceUrl": "https://telegra.ph/file/6852aab70c51bf2797244.jpg"}}}, { quoted: m})
        }
        
        const replay = (teks) => {
            Anony.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": ` ${global.botname}`,"body": ` 🔐 ᴀɴᴏɴʏᴍᴏᴜꜱ 🔐`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./Anony/anony.jpg`),"sourceUrl": "https://telegra.ph/file/6852aab70c51bf2797244.jpg"}}}, { quoted: m})
        }
	
        //Public & Self\\
        if (!Anony.public) {
            if (!m.key.fromMe) return
        }

        //Push Message To Console && Auto Read\\
        if (m.message) {
            Anony.sendReadReceipt(m.chat, m.sender, [m.key.id])
            console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> In'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
        }
	
	//reset limit every 12 hours\\
        let cron = require('node-cron')
        cron.schedule('00 12 * * *', () => {
            let user = Object.keys(global.db.data.users)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.data.users[jid].limit = limitUser
            console.log('Limit Reseted')
        }, {
            scheduled: true,
            timezone: "Asia/Colombo"
        })
        
	//auto set bio\\
	if (db.data.settings[botNumber].autobio) {
	    let setting = global.db.data.settings[botNumber]
	    if (new Date() * 1 - setting.status > 1000) {
		let uptime = await runtime(process.uptime())
		await Anony.setStatus(`${Anony.user.name} | Runtime : ${runtime(uptime)}`)
		setting.status = new Date() * 1
	    }
	}
	
	  //antilink\\
        if (db.data.chats[m.chat].antilink) {
        if (budy.match(`chat.whatsapp.com`)) {
        reply(`「 ANTI LINK 」\n\nYou have been detected sending a group link, sorry you will be kicked !`)
        if (!isBotAdmins) return reply(`I Am Not An Admin, How Could I Kick Somebody Who Send Link 😒`)
        let gclink = (`https://chat.whatsapp.com/`+await Anony.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return reply(`Group Is Installed With Anti-Link But I Won't Kick You 😉, Because You Sent This Group Link❤️`)
        if (isAdmins) return reply(`Group Is Installed With Anti-Link But I Won't Kick You 😉, Because You Are An Admin Of The Group❤️`)
        if (isCreator) return reply(`Group Is Installed With Anti-Link But I Won't Kick You 😉, Because You Are My Owner 😘`)
        Anony.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        }

 

      //Mute Chat\\
      if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
      return
      }
        
        //media detect \\
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        
        //Respon Cmd with media\\
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
        let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: Anony.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, Anony.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        Anony.ev.emit('messages.upsert', msg)
        }
	    
 
switch(command) {
	
        case 'userlimit': 
{      
   let txt = `「 *ALL LIMIT USER* 」\n\n`
     for (let i of _limit){
     txt += `➸ *ID :* @${i.id.split("@")[0]}\n➸ *Limit* : ${i.limit}\n`
     }
    reply(txt)       
  }
 break
 
 case 'owner': case 'developer': {
 	const vcard = 'BEGIN:VCARD\n' 
            + 'VERSION:3.0\n' 
            + 'FN:'+config.owner+'\n' 
            + 'ORG:Anonymous Team 🔐;\n' 
            + 'TEL;type=EMAIL;type=WHATSAPP;waid='+config.ownernum+':'+config.ownernum+'\n' 
            + 'END:VCARD'
            
      
            
Anony.sendMessage(m.chat, { contacts: { displayName: config.OWNER, contacts: [{ vcard }] }})

 
 
 }
 break
 
 //alive
 
 case 'alive': {
 	Anony.sendPresenceUpdate('composing', m.chat) 
                                 message = await prepareWAMessageMedia({ image : { url: `${anony.logo}` } }, { upload:   Anony.waUploadToServer })
                                  template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                                      templateMessage: {
                                          hydratedTemplate: {
                                              imageMessage: message.imageMessage,
                                              hydratedContentText: `${anony.alive}`,
                                              hydratedFooterText: `🔐 ᴀɴᴏɴʏᴍᴏᴜꜱ ʙᴏᴛ 🔐`,
                                              hydratedButtons: [{
                                                  urlButton: {
                                                      displayText: 'DEPLOY BOT 🔐',
                                                      url: `${sc}`
                                                  }
                                              }, {
                                                  quickReplyButton: {
                                                      displayText: 'MENU 🔐',
                                                      id: `menu`
                                                      }
                                                  },  {
                                                  quickReplyButton: {
                                                      displayText: 'OWNER 😎',
                                                      id: `owner`
                                                      }
                                                  }, {
                                                  quickReplyButton: {
                                                      displayText: 'ABOUT ❤️',
                                                      id: `about`
                                                      }
                                                  
                                              }]
                                          }
                                      }
                                  }), { userJid: m.chat, quoted: m })
                                    Anony.relayMessage(m.chat, template.message, { messageId: template.key.id })
                              }
break

//menu

case 'menu': case 'anony': {
	var time = new Date().toLocaleString('HI', { timeZone: 'Asia/Colombo' }).split(' ')[1]

    var wish = ''
    
    if (hrs >= 05 && hrs <= 12) wish = '*ɢᴏᴏᴅ ᴍᴏʀɴɪɴɢ ⛅*'
if (hrs >= 12 && hrs <= 17) wish = '*ɢᴏᴏᴅ ᴀғᴛᴇʀɴᴏᴏɴ 🌞*'
if (hrs >= 17 && hrs <= 19) wish = '*ɢᴏᴏᴅ ᴇᴠᴇɴɪɴɢ 🌥*'
if (hrs >= 19 && hrs <= 24) wish = '*ɢᴏᴏᴅ ɴɪɢʜᴛ 🌙*'
   
   
	let list = `
 ╭────────────────
 │🔐 ᴀɴᴏɴʏᴍᴏᴜꜱ ʙᴏᴛ 🔐
 ╰────────────────
 ╭────────────────
 │ Hello ▷ ${pushname}
 │ I Wish `+ wish + `
 │ 
 │Time⌚` + time + `
 │
 │   My Bot Working
 │
 ╰────────────────
 ╭────────────────
 │       🍁👿 CMD 👿🍁
 │        ──────────
 │
 │▷ Menu
 │▷ Alive
 │
 ╰────────────────
 ╭────────────────
 │    🔐 DOWNLOADER 🔐
 │        ──────────
 │
 │▷ Tiktok [ url ]
 │▷ Video [ query ]
 │▷ Song [ query ] 
 │
 ╰────────────────
 ╭────────────────
 │    ❤️ TEXT 2 IMAGE ❤️
 │        ──────────
 │
 │▷ lion [ query ]
 │▷ batman [ query ]
 │▷ diamonds [ query ]
 │▷ summerneon [ query ]
 │▷ business [ query ]
 │▷ 2blackpink [ query ]
 │▷ blackpink [ query ]
 │▷ sparkles [ query ]
 │▷ summer [ query ]
 │▷ 3dorange [ query ]
 │▷ gradientneon [ query ]
 │▷ typography [ query ]
 │▷ leaves [ query ]
 │▷ 1917 [ query ]
 │▷ glue [ query ]
 │▷ sand [ query ]
 │▷ skeleton [ query ]
 │▷ firework [ query ]
 │▷ wicker [ query ]
 │▷ joker [ query ]
 │▷ darkgold [ query ]
 │▷ bloodglas [ query ]
 │▷ hallowen [ query ]
 │▷ lava [ query ]
 │▷ dropwater [ query ]
 │▷ toxic [ query ]
 │▷ matrix [ query ]
 │▷ blood [ query ]
 │▷ strawberry [ query ]
 │▷ wood [ query ]
 │▷ chocolate [ query ]
 │▷ biscuit [ query ]
 │▷ fruitjuice [ query ]
 │▷ ice [ query ]
 │▷ honey [ query ]
 │▷ cloud [ query ]
 │▷ snow [ query ]
 │▷ graffitibike [ query ]
 │▷ underwater [ query ]
 │▷ neondevil [ query ]
 │▷ multicolor [ query ]
 │▷ watercolor [ query ]
 │▷ papercut [ query ]
 │▷ brokenglass [ query ]
 │▷ harrypotter [ query ]
 │▷ glitch [ query ]
 │▷ 3dstone [ query ]
 │▷ neonlight [ query ]
 │▷ magma [ query ]
 │▷ thunder [ query ]
 │▷ berry [ query ]
 │▷ transformer [ query ]
 │▷ demon [ query ]
 │▷ fiction [ query ]
 │▷ metalic [ query ]
 │▷ discovery [ query ]
 │▷ circuit [ query ]
 │▷ pencil [ query ]
 │▷ waterpipe [ query ]
 │▷ spooky [ query ]
 │▷ rainbow [ query ]
 │▷ deepsea [ query ]
 │▷ scifi [ query ]
 │▷sparklechristmas [ query ]
 │▷ 3dchristmas [ query ]
 │▷ candy [ query ]
 │▷ christmas [ query ]
 │
 ╰────────────────
 ╭────────────────
 │  🔐 ᴀɴᴏɴʏᴍᴏᴜꜱ ʙᴏᴛ 🔐
 ╰──────────────── `
                                 message = await prepareWAMessageMedia({ image : { url: `${anony.logo}` } }, { upload:   Anony.waUploadToServer })
                                  template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                                      templateMessage: {
                                          hydratedTemplate: {
                                              imageMessage: message.imageMessage,
                                              hydratedContentText: list,
                                              hydratedFooterText: `🔐 ᴀɴᴏɴʏᴍᴏᴜꜱ ʙᴏᴛ 🔐`,
                                              hydratedButtons: [{
                                                  urlButton: {
                                                      displayText: 'DEPLOY BOT 🔐',
                                                      url: `${sc}`
                                                  }
                                              }, {
                                                  quickReplyButton: {
                                                      displayText: 'OWNER 😎',
                                                      id: `owner`
                                                      }
                                                  }, {
                                                  quickReplyButton: {
                                                      displayText: 'ABOUT ❤️',
                                                      id: `about`
                                                      }
                                                  
                                              }]
                                          }
                                      }
                                  }), { userJid: m.chat, quoted: m })
                                    Anony.relayMessage(m.chat, template.message, { messageId: template.key.id })
                              }
                              break

//about
case 'about': {
	reply('comming soon 🔐')
	}
break
                              
 
 case 'react': {
                
                reactionMessage = {
                    react: {
                        text: args[0],
                        key: { remoteJid: m.chat, id: quoted.id }
                    }
                }
                Anony.sendMessage(m.chat, reactionMessage)
            }
break  

//TikTok
case 'tiktok': {
                if (!text) return reply(`Give me a tik tok link`)
                reply(vid.search)
                await axios
          .get(`https://anony-vip-edition.herokuapp.com/api/download/tiktok?url=${text}&apikey=hiruwa`)
          .then(async (response) => {
            const {
              nowatermark,watermark,audio,Avatar,botname,type,
            } = response.data.result
            
            reply(mess.down)
                let buttons = [
                    {buttonId: `wm ${text}`, buttonText: {displayText: 'With Watermark 🔐'}, type: 1},
                    {buttonId: `nwm ${text}`, buttonText: {displayText: 'Without Watermark ♠️'}, type: 1},
                    {buttonId: `aud ${text}`, buttonText: {displayText: 'Audio 🔐'}, type: 1}
                   
                ]
                let buttonMessage = {
                    image: { url: Avatar },
                    caption: `${type}

Select Your Type Of Video Or Audio`,
                    footer: botname,
                    buttons: buttons,
                    headerType: 4
                }
               
                Anony.sendMessage(m.chat, buttonMessage, { quoted: m })
         
         
         })
          }
	    break
	
	case 'wm': {
                if (!text) return reply(`Give me a tik tok link`)
                reply(vid.viddown)
                await axios
          .get(`https://anony-vip-edition.herokuapp.com/api/download/tiktok?url=${text}&apikey=hiruwa`)
          .then(async (response) => {
            const {
              nowatermark,watermark,audio,Avatar,botname,type,
            } = response.data.result
            
                let buttons = [
                    {buttonId: `nwm ${text}`, buttonText: {displayText: 'Without Watermark ♠️'}, type: 1},
                    {buttonId: `aud ${text}`, buttonText: {displayText: 'Audio 🔐'}, type: 1}
                   
                ]
                let buttonMessage = {
                    video: { url: watermark },
                    caption: `${type}

Select Your Type Of Video Or Audio`,
                    footer: botname,
                    buttons: buttons,
                    headerType: 4
                }
                reply(vid.vidup)
                Anony.sendMessage(m.chat, buttonMessage, { quoted: m })
         
         
         })
          }
	    break
	
	case 'nwm': {
                if (!text) return reply(`Give me a tik tok link`)
                reply(vid.viddown)
                await axios
          .get(`https://anony-vip-edition.herokuapp.com/api/download/tiktok?url=${text}&apikey=hiruwa`)
          .then(async (response) => {
            const {
              nowatermark,watermark,audio,Avatar,botname,type,
            } = response.data.result
            
                let buttons = [
                    {buttonId: `wm ${text}`, buttonText: {displayText: 'With Watermark 🔐'}, type: 1},
                    {buttonId: `aud ${text}`, buttonText: {displayText: 'Audio 🔐'}, type: 1}
                   
                ]
                let buttonMessage = {
                    video: { url: nowatermark },
                    caption: `${type}

Select Your Type Of Video Or Audio`,
                    footer: botname,
                    buttons: buttons,
                    headerType: 4
                }
                reply(vid.vidup)
                Anony.sendMessage(m.chat, buttonMessage, { quoted: m })
         
         
         })
          }
	    break
	
	case 'aud': {
                if (!text) return reply(`Give me a tik tok link`)
                reply(song.songdown)
                await axios
          .get(`https://anony-vip-edition.herokuapp.com/api/download/tiktok?url=${text}&apikey=hiruwa`)
          .then(async (response) => {
            const {
              nowatermark,watermark,audio,Avatar,botname,type,
            } = response.data.result
            
                let buttons = [
                    {buttonId: `wm ${text}`, buttonText: {displayText: 'With Watermark 🔐'}, type: 1},
                    {buttonId: `nwm ${text}`, buttonText: {displayText: 'Without Watermark ♠️'}, type: 1},
                    
                ]
                let buttonMessage = {
                    image: { url: Avatar },
                    caption: `${type}

Select Your Type Of Video Or Audio`,
                    footer: botname,
                    buttons: buttons,
                    headerType: 4
                }
                reply(song.songup)
                Anony.sendMessage(m.chat, { audio: { url: audio }, mimetype: 'audio/mpeg', fileName: `Anony-Tik-tok-Downloader.mp3` }, { quoted: m })
                Anony.sendMessage(m.chat, buttonMessage, { quoted: m })
         
         
         })
          }
	    break
	
	//youtube
	
	case 'play': case 'song': case 'video': {
                if (!text) return reply(`Example : ${prefix + command} Stay`)
                let yts = require("yt-search")
                let sre= await yts(text)
                let anony = (sre.all)
                reply(vid.search)
                let buttons = [
                    {buttonId: `ymp3 ${sre.all[0].url}`, buttonText: {displayText: 'Audio 🔐'}, type: 1},
                    {buttonId: `ytmp4 ${sre.all[0].url}`, buttonText: {displayText: 'Video 🔐'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: sre.all[0].thumbnail },
                    caption: `
🔐 Title : ${sre.all[0].title}

🔐 Duration : ${sre.all[0].timestamp}

🔐 Viewes : ${sre.all[0].views}

🔐 Uploaded On : ${sre.all[0].ago}

🔐 Author : ${sre.all[0].author.name}

🔐 Channel : ${sre.all[0].author.url}

🔐 Description : ${sre.all[0].description}`,
                    footer: '🔐 ᴀɴᴏɴʏᴍᴏᴜꜱ ʙᴏᴛ 🔐',
                    buttons: buttons,
                    headerType: 4
                }
                Anony.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
	
            
            case 'ytmp4': {
            	reply(vid.vidup)
                let buttons = [
                    {buttonId: `highqua ${text}`, buttonText: {displayText: '480p 🔐'}, type: 1},
                    {buttonId: `mediumqua ${text}`, buttonText: {displayText: '360p ♠️'}, type: 1},
                    {buttonId: `lowqua ${text}`, buttonText: {displayText: '240p 🔐'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://telegra.ph/file/6852aab70c51bf2797244.jpg' },
                    caption: `Select Your Quality ❤️

Some Qualities Are Not Available 😢`,
                    footer: '🔐 ᴀɴᴏɴʏᴍᴏᴜꜱ ʙᴏᴛ 🔐',
                    buttons: buttons,
                    headerType: 4
                }
                Anony.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
break

case 'ymp3': {
            	reply(song.songup)
                let buttons = [
                    {buttonId: `yaud ${text}`, buttonText: {displayText: 'AUDIO 🔐'}, type: 1},
                    {buttonId: `ydoc ${text}`, buttonText: {displayText: 'DOCUMENT ♠️'}, type: 1},
                ]
                let buttonMessage = {
                    image: { url: 'https://telegra.ph/file/6852aab70c51bf2797244.jpg' },
                    caption: `Select Your Quality ❤️

Some Qualities Are Not Available 😢`,
                    footer: '🔐 ᴀɴᴏɴʏᴍᴏᴜꜱ ʙᴏᴛ 🔐',
                    buttons: buttons,
                    headerType: 3
                }
                Anony.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
break
            
	    case 'yaud': {
                let { yta } = require('./lib/y2mate')
                if (!text) return reply(`Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`)
                let quality = args[1] ? args[1] : '320kbps'
                reply(song.songdown)
                let media = await yta(text, quality)
                if (media.filesize >= 999999) return reply('File Over Limit '+util.format(media))
                reply(song.songup)
                let buttons = [
                    {buttonId: `ydoc ${text}`, buttonText: {displayText: 'DOCUMENT ♠️'}, type: 1},
                    {buttonId: `ytmp4 ${text}`, buttonText: {displayText: 'VIDEO🔐'}, type: 1}
                ]
                let buttonMessage = {
                    audio: { url: media.dl_link },
                    caption: `🔐 Title : ${media.title}

🔐 File Size : ${media.filesizeF}

🔐 Url : ${isUrl(text)}

🔐 Ext : MP3

🔐 Resolution : ${args[1] || '320kbps'}

Select Your Quality ❤️

Some Qualities Are Not Available 😢`,
                    footer: '🔐 ᴀɴᴏɴʏᴍᴏᴜꜱ ʙᴏᴛ 🔐',
                    buttons: buttons,
                    headerType: 3
                }
                reply(song.songup)
                Anony.sendMessage(m.chat, buttonMessage, { quoted: m })
          
                }
            break
            case 'ydoc': {
                let { yta } = require('./lib/y2mate')
                if (!text) return reply(`Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`)
                let quality = args[1] ? args[1] : '320kbps'
                reply(song.songdown)
                let media = await yta(text, quality)
                if (media.filesize >= 999999) return reply('File Over Limit '+util.format(media))
                
                let buttons = [
                    {buttonId: `yaud ${text}`, buttonText: {displayText: 'AUDIO ♠️'}, type: 1},
                    {buttonId: `ytmp4 ${text}`, buttonText: {displayText: 'VIDEO🔐'}, type: 1}
                ]
                let buttonMessage = {
                    document: { url: media.dl_link },
                    caption: `🔐 Title : ${media.title}

🔐 File Size : ${media.filesizeF}

🔐 Url : ${isUrl(text)}

🔐 Ext : MP3

🔐 Resolution : ${args[1] || '320kbps'}

Select Your Quality ❤️

Some Qualities Are Not Available 😢`,
                    footer: '🔐 ᴀɴᴏɴʏᴍᴏᴜꜱ ʙᴏᴛ 🔐',
                    buttons: buttons,
                    headerType: 4
                }
                reply(song.songup)
                Anony.sendMessage(m.chat, buttonMessage, { quoted: m })
          
                }
            break
            case 'highqua': {
                let { ytv } = require('./lib/y2mate')
                if (!text) return reply(`Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`)
                let quality = args[1] ? args[1] : '480p'
                reply(vid.viddown)
                let media = await ytv(text, quality)
                if (media.filesize >= 999999) return reply('File Over Limit '+util.format(media))
                let buttons = [
                    {buttonId: `mediumqua ${text}`, buttonText: {displayText: '360p ♠️'}, type: 1},
                    {buttonId: `lowqua ${text}`, buttonText: {displayText: '240p 🔐'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: media.dl_link },
                    caption: `🔐 Title : ${media.title}

🔐 File Size : ${media.filesizeF}

🔐 Url : ${isUrl(text)}

🔐 Ext : MP3

🔐 Resolution : ${args[1] || '480p'}

Select Your Quality ❤️

Some Qualities Are Not Available 😢`,
                    footer: '🔐 ᴀɴᴏɴʏᴍᴏᴜꜱ ʙᴏᴛ 🔐',
                    buttons: buttons,
                    headerType: 4
                }
                reply(vid.vidup)
                Anony.sendMessage(m.chat, buttonMessage, { quoted: m })
          
                 }
            break
            case 'mediumqua': {
                let { ytv } = require('./lib/y2mate')
                if (!text) return reply(`Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`)
                let quality = args[1] ? args[1] : '360p'
                reply(vid.viddown)
                let media = await ytv(text, quality)
                if (media.filesize >= 999999) return reply('File Over Limit '+util.format(media))
                let buttons = [
                    {buttonId: `highqua ${text}`, buttonText: {displayText: '480p ♠️'}, type: 1},
                    {buttonId: `lowqua ${text}`, buttonText: {displayText: '240p 🔐'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: media.dl_link },
                    caption: `🔐 Title : ${media.title}

🔐 File Size : ${media.filesizeF}

🔐 Url : ${isUrl(text)}

🔐 Ext : MP3

🔐 Resolution : ${args[1] || '480p'}

Select Your Quality ❤️

Some Qualities Are Not Available 😢`,
                    footer: '🔐 ᴀɴᴏɴʏᴍᴏᴜꜱ ʙᴏᴛ 🔐',
                    buttons: buttons,
                    headerType: 4
                }
                reply(vid.vidup)
                Anony.sendMessage(m.chat, buttonMessage, { quoted: m })
          
                   }
            break
            case 'lowqua': {
                let { ytv } = require('./lib/y2mate')
                if (!text) return reply(`Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`)
                let quality = args[1] ? args[1] : '240p'
                reply(vid.viddown)
                let media = await ytv(text, quality)
                if (media.filesize >= 999999) return reply('File Over Limit '+util.format(media))
                let buttons = [
                    {buttonId: `mediumqua ${text}`, buttonText: {displayText: '360p ♠️'}, type: 1},
                    {buttonId: `highqua ${text}`, buttonText: {displayText: '480p 🔐'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: media.dl_link },
                    caption: `🔐 Title : ${media.title}

🔐 File Size : ${media.filesizeF}

🔐 Url : ${isUrl(text)}

🔐 Ext : MP3

🔐 Resolution : ${args[1] || '240p'}

Select Your Quality ❤️

Some Qualities Are Not Available 😢`,
                    footer: '🔐 ᴀɴᴏɴʏᴍᴏᴜꜱ ʙᴏᴛ 🔐',
                    buttons: buttons,
                    headerType: 4
                }
                reply(vid.vidup)
                Anony.sendMessage(m.chat, buttonMessage, { quoted: m })
          
                  }
            break
            
            
            
            //text to image
            
            
            
            case 'candy': 
case 'christmas': 
case '3dchristmas': 
case 'sparklechristmas':
case 'deepsea': 
case 'scifi': 
case 'rainbow': 
case 'waterpipe': 
case 'spooky': 
case 'pencil': 
case 'circuit': 
case 'discovery': 
case 'metalic': 
case 'fiction': 
case 'demon': 
case 'transformer': 
case 'berry': 
case 'thunder': 
case 'magma': 
case '3dstone': 
case 'neonlight': 
case 'glitch': 
case 'harrypotter': 
case 'brokenglass': 
case 'papercut': 
case 'watercolor': 
case 'multicolor': 
case 'neondevil': 
case 'underwater': 
case 'graffitibike':
case 'snow': 
case 'cloud': 
case 'honey': 
case 'ice': 
case 'fruitjuice': 
case 'biscuit': 
case 'wood': 
case 'chocolate': 
case 'strawberry': 
case 'matrix': 
case 'blood': 
case 'dropwater': 
case 'toxic': 
case 'lava': 
case 'rock': 
case 'bloodglas': 
case 'hallowen': 
case 'darkgold': 
case 'joker': 
case 'wicker':
case 'firework': 
case 'skeleton': 
case 'blackpink': 
case 'sand': 
case 'glue': 
case '1917': 
case 'leaves': 

case 'typography': 
case 'gradientneon': 
case '3dorange': 
case 'summer': 
case 'sparkles': 
case '2blackpink': 
case '3blackpink': 
case 'business': 
case 'diamonds': 
case 'summerneon': 
case 'batman': 
case 'lion': {

if (!q) return reply(`Example : ${prefix + command} Hiruwa`) 
          
             let link
             if (/candy/.test(command)) link = 'https://textpro.me/create-christmas-candy-cane-text-effect-1056.html'
             if (/christmas/.test(command)) link = 'https://textpro.me/christmas-tree-text-effect-online-free-1057.html'
             if (/3dchristmas/.test(command)) link = 'https://textpro.me/3d-christmas-text-effect-by-name-1055.html'
             if (/sparklechristmas/.test(command)) link = 'https://textpro.me/sparkles-merry-christmas-text-effect-1054.html'
             if (/deepsea/.test(command)) link = 'https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html'
             if (/scifi/.test(command)) link = 'https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html'
             if (/rainbow/.test(command)) link = 'https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html'
             if (/waterpipe/.test(command)) link = 'https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html'
             if (/spooky/.test(command)) link = 'https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html'
             if (/pencil/.test(command)) link = 'https://textpro.me/create-a-sketch-text-effect-online-1044.html'
             if (/circuit/.test(command)) link = 'https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html'
             if (/discovery/.test(command)) link = 'https://textpro.me/create-space-text-effects-online-free-1042.html'
             if (/metalic/.test(command)) link = 'https://textpro.me/creat-glossy-metalic-text-effect-free-online-1040.html'
             if (/fiction/.test(command)) link = 'https://textpro.me/create-science-fiction-text-effect-online-free-1038.html'
             if (/demon/.test(command)) link = 'https://textpro.me/create-green-horror-style-text-effect-online-1036.html'
             if (/transformer/.test(command)) link = 'https://textpro.me/create-a-transformer-text-effect-online-1035.html'
             if (/berry/.test(command)) link = 'https://textpro.me/create-berry-text-effect-online-free-1033.html'
             if (/thunder/.test(command)) link = 'https://textpro.me/online-thunder-text-effect-generator-1031.html'
             if (/magma/.test(command)) link = 'https://textpro.me/create-a-magma-hot-text-effect-online-1030.html'
             if (/3dstone/.test(command)) link = 'https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html'
             if (/neonlight/.test(command)) link = 'https://textpro.me/create-3d-neon-light-text-effect-online-1028.html'
             if (/glitch/.test(command)) link = 'https://textpro.me/create-impressive-glitch-text-effects-online-1027.html'
             if (/harrypotter/.test(command)) link = 'https://textpro.me/create-harry-potter-text-effect-online-1025.html'
             if (/brokenglass/.test(command)) link = 'https://textpro.me/broken-glass-text-effect-free-online-1023.html'
             if (/papercut/.test(command)) link = 'https://textpro.me/create-art-paper-cut-text-effect-online-1022.html'
             if (/watercolor/.test(command)) link = 'https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html'
             if (/multicolor/.test(command)) link = 'https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html'
             if (/neondevil/.test(command)) link = 'https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html'
             if (/underwater/.test(command)) link = 'https://textpro.me/3d-underwater-text-effect-generator-online-1013.html'
             if (/graffitibike/.test(command)) link = 'https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html'
             if (/snow/.test(command)) link = 'https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html'
             if (/cloud/.test(command)) link = 'https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html'
             if (/honey/.test(command)) link = 'https://textpro.me/honey-text-effect-868.html'
             if (/ice/.test(command)) link = 'https://textpro.me/ice-cold-text-effect-862.html'
             if (/fruitjuice/.test(command)) link = 'https://textpro.me/fruit-juice-text-effect-861.html'
             if (/biscuit/.test(command)) link = 'https://textpro.me/biscuit-text-effect-858.html'
             if (/wood/.test(command)) link = 'https://textpro.me/wood-text-effect-856.html'
             if (/chocolate/.test(command)) link = 'https://textpro.me/chocolate-cake-text-effect-890.html'
             if (/strawberry/.test(command)) link = 'https://textpro.me/strawberry-text-effect-online-889.html'
             if (/matrix/.test(command)) link = 'https://textpro.me/matrix-style-text-effect-online-884.html'
             if (/blood/.test(command)) link = 'https://textpro.me/horror-blood-text-effect-online-883.html'
             if (/dropwater/.test(command)) link = 'https://textpro.me/dropwater-text-effect-872.html'
             if (/toxic/.test(command)) link = 'https://textpro.me/toxic-text-effect-online-901.html'
             if (/lava/.test(command)) link = 'https://textpro.me/lava-text-effect-online-914.html'
             if (/rock/.test(command)) link = 'https://textpro.me/rock-text-effect-online-915.html'
             if (/bloodglas/.test(command)) link = 'https://textpro.me/blood-text-on-the-frosted-glass-941.html'
             if (/hallowen/.test(command)) link = 'https://textpro.me/halloween-fire-text-effect-940.html'
             if (/darkgold/.test(command)) link = 'https://textpro.me/metal-dark-gold-text-effect-online-939.html'
             if (/joker/.test(command)) link = 'https://textpro.me/create-logo-joker-online-934.html'
             if (/wicker/.test(command)) link = 'https://textpro.me/wicker-text-effect-online-932.html'
             if (/firework/.test(command)) link = 'https://textpro.me/firework-sparkle-text-effect-930.html'
             if (/skeleton/.test(command)) link = 'https://textpro.me/skeleton-text-effect-online-929.html'
             if (/blackpink/.test(command)) link = 'https://textpro.me/create-blackpink-logo-style-online-1001.html'
             if (/sand/.test(command)) link = 'https://textpro.me/write-in-sand-summer-beach-free-online-991.html'
             if (/glue/.test(command)) link = 'https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html'
             if (/1917/.test(command)) link = 'https://textpro.me/1917-style-text-effect-online-980.html'
             if (/leaves/.test(command)) link = 'https://textpro.me/natural-leaves-text-effect-931.html'
             //new
             if (/typography/.test(command)) link = 'https://textpro.me/create-artistic-typography-online-1086.html'
             if (/gradientneon/.test(command)) link = 'https://textpro.me/create-gradient-neon-light-text-effect-online-1085.html'
             if (/3dorange/.test(command)) link = 'https://textpro.me/create-a-3d-orange-juice-text-effect-online-1084.html'
             if (/summer/.test(command)) link = 'https://textpro.me/create-a-summer-text-effect-with-a-palm-tree-1083.html'
             if (/sparkles/.test(command)) link = 'https://textpro.me/create-realistic-golden-text-effect-on-red-sparkles-online-1082.html'
             if (/2blackpink/.test(command)) link = 'https://textpro.me/create-neon-light-blackpink-logo-text-effect-online-1081.html'
             if (/3blackpink/.test(command)) link = 'https://textpro.me/create-blackpink-style-logo-effects-online-1079.html'
             if (/business/.test(command)) link = 'https://textpro.me/3d-business-sign-text-effect-1078.html'
             if (/diamonds/.test(command)) link = 'https://textpro.me/create-a-quick-sparkling-diamonds-text-effect-1077.html'
             if (/summerneon/.test(command)) link = 'https://textpro.me/create-a-summer-neon-light-text-effect-online-1076.html'
             if (/batman/.test(command)) link = 'https://textpro.me/make-a-batman-logo-online-free-1066.html'
             
             
             let anony = await maker.textpro(link, q)
                
             
             let buttons = [
                    {buttonId: `logonext ${q}`, buttonText: {displayText: 'NEXT ⇛'}, type: 1},
                    
                ]
                let buttonMessage = {
                    image: { url: anony },
                    caption: `You Can Make Random Logo Click Next ❤️🔐`,
                    footer: '🔐 ᴀɴᴏɴʏᴍᴏᴜꜱ ʙᴏᴛ 🔐',
                    buttons: buttons,
                    headerType: 4
                }
               
                Anony.sendMessage(m.chat, buttonMessage, { quoted: m })
         
}
             break
             
             
             
             case 'logonext': {
             	
             if (!q) return reply(`Example : ${prefix + command} Hiruwa`) 
             
             var link = new Array ();
             
             
             
             link[0] = 'https://textpro.me/create-christmas-candy-cane-text-effect-1056.html'
             link[1] = 'https://textpro.me/christmas-tree-text-effect-online-free-1057.html'
             link[2] = 'https://textpro.me/3d-christmas-text-effect-by-name-1055.html'
             link[3] = 'https://textpro.me/sparkles-merry-christmas-text-effect-1054.html'
             link[4] = 'https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html'
             link[5] = 'https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html'
             link[6] = 'https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html'
             link[7] = 'https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html'
             link[8] = 'https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html'
             link[9] = 'https://textpro.me/create-a-sketch-text-effect-online-1044.html'
             link[10] = 'https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html'
             link[11] = 'https://textpro.me/create-space-text-effects-online-free-1042.html'
             link[12] = 'https://textpro.me/creat-glossy-metalic-text-effect-free-online-1040.html'
             link[13] = 'https://textpro.me/create-science-fiction-text-effect-online-free-1038.html'
             link[14] = 'https://textpro.me/create-green-horror-style-text-effect-online-1036.html'
             link[15] = 'https://textpro.me/create-a-transformer-text-effect-online-1035.html'
             link[16] = 'https://textpro.me/create-berry-text-effect-online-free-1033.html'
             link[17] = 'https://textpro.me/online-thunder-text-effect-generator-1031.html'
             link[18] = 'https://textpro.me/create-a-magma-hot-text-effect-online-1030.html'
             link[19] = 'https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html'
             link[20] = 'https://textpro.me/create-3d-neon-light-text-effect-online-1028.html'
             link[21] = 'https://textpro.me/create-impressive-glitch-text-effects-online-1027.html'
             link[22] = 'https://textpro.me/create-harry-potter-text-effect-online-1025.html'
             link[23] = 'https://textpro.me/broken-glass-text-effect-free-online-1023.html'
             link[24] = 'https://textpro.me/create-art-paper-cut-text-effect-online-1022.html'
             link[25] = 'https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html'
             link[26] = 'https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html'
             link[27] = 'https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html'
             link[28] = 'https://textpro.me/3d-underwater-text-effect-generator-online-1013.html'
             link[29] = 'https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html'
             link[30] = 'https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html'
             link[31] = 'https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html'
             link[32] = 'https://textpro.me/honey-text-effect-868.html'
             link[33] = 'https://textpro.me/ice-cold-text-effect-862.html'
             link[34] = 'https://textpro.me/fruit-juice-text-effect-861.html'
             link[35] = 'https://textpro.me/biscuit-text-effect-858.html'
             link[36] = 'https://textpro.me/wood-text-effect-856.html'
             link[37] = 'https://textpro.me/chocolate-cake-text-effect-890.html'
             link[38] = 'https://textpro.me/strawberry-text-effect-online-889.html'
             link[39] = 'https://textpro.me/matrix-style-text-effect-online-884.html'
             link[40] = 'https://textpro.me/horror-blood-text-effect-online-883.html'
             link[41] = 'https://textpro.me/dropwater-text-effect-872.html'
             link[42] = 'https://textpro.me/toxic-text-effect-online-901.html'
             link[43] = 'https://textpro.me/lava-text-effect-online-914.html'
             link[44] = 'https://textpro.me/rock-text-effect-online-915.html'
             link[45] = 'https://textpro.me/blood-text-on-the-frosted-glass-941.html'
             link[46] = 'https://textpro.me/halloween-fire-text-effect-940.html'
             link[47] = 'https://textpro.me/metal-dark-gold-text-effect-online-939.html'
             link[48] = 'https://textpro.me/create-logo-joker-online-934.html'
             link[49] = 'https://textpro.me/wicker-text-effect-online-932.html'
             link[50] = 'https://textpro.me/firework-sparkle-text-effect-930.html'
             link[51] = 'https://textpro.me/skeleton-text-effect-online-929.html'
             link[52] = 'https://textpro.me/create-blackpink-logo-style-online-1001.html'
             link[53] = 'https://textpro.me/write-in-sand-summer-beach-free-online-991.html'
             link[54] = 'https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html'
             link[55] = 'https://textpro.me/1917-style-text-effect-online-980.html'
             link[56] = 'https://textpro.me/natural-leaves-text-effect-931.html'
             //new
             link[57] = 'https://textpro.me/create-artistic-typography-online-1086.html'
             link[58] = 'https://textpro.me/create-gradient-neon-light-text-effect-online-1085.html'
             link[59] = 'https://textpro.me/create-a-3d-orange-juice-text-effect-online-1084.html'
             link[60] = 'https://textpro.me/create-a-summer-text-effect-with-a-palm-tree-1083.html'
             link[61] = 'https://textpro.me/create-realistic-golden-text-effect-on-red-sparkles-online-1082.html'
             link[62] = 'https://textpro.me/create-neon-light-blackpink-logo-text-effect-online-1081.html'
             link[63] = 'https://textpro.me/create-blackpink-style-logo-effects-online-1079.html'
             link[64] = 'https://textpro.me/3d-business-sign-text-effect-1078.html'
             link[65] = 'https://textpro.me/create-a-quick-sparkling-diamonds-text-effect-1077.html'
             link[66] = 'https://textpro.me/create-a-summer-neon-light-text-effect-online-1076.html'
             link[67] = 'https://textpro.me/make-a-batman-logo-online-free-1066.html'
                    
             var i = Math.floor(67*Math.random())
             let anony = await maker.textpro(link[i], q)

                
		let buttons = [
                    {buttonId: `logonext ${q}`, buttonText: {displayText: 'NEXT ⇛'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: anony },
                    caption: `You Can Make Random Logo Click Next ❤️🔐`,
                    footer: '🔐 ᴀɴᴏɴʏᴍᴏᴜꜱ ʙᴏᴛ 🔐',
                    buttons: buttons,
                    headerType: 4
                }
                Anony.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            
            
            
            
            
					
             
 
             
            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return reply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            reply(bang)
                    }
                    try {
                        reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await reply(evaled)
                    } catch (err) {
                        await reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return reply(err)
                        if (stdout) return reply(stdout)
                    })
                }
			
		if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    this.anonymous = this.anonymous ? this.anonymous : {}
                    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }
			
		if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = global.db.data.database
		    if (!(budy.toLowerCase() in msgs)) return
		    Anony.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
        }
        

    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
