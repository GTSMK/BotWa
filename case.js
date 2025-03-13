/*
     Base ini bukan punya saya base ini
     dari github dan saya lupa nama repo
     nya
     
     Saya cuma copas fitur aja dari repo
     Raollatest
*/
     require('./config.js')
     const fs = require('fs')
     const util = require('util')
     const axios = require('axios')
     const chalk = require('chalk')
     const path = require("path")
     const os = require('os')
     const fetch = require('node-fetch')
     const speed = require('performance-now')
     const FormData = require("form-data")
     const moment = require('moment-timezone')
     const { spawn: spawn, exec } = require('child_process')
     const { performance } = require('perf_hooks')
     const ytdl = require("ytdl-core")
     const yts = require('yt-search');
     const { toPTT, toAudio } = require("./systems/function/converter")
    // const { createCanvas, loadImage, registerFont } = require('canvas')
     //const { Sticker } = require('wa-sticker-formatter')
     const {
  makeWASocket, downloadContentFromMessage, emitGroupParticipantsUpdate, emitGroupUpdate, generateWAMessageContent, generateWAMessage, makeInMemoryStore, prepareWAMessageMedia, generateWAMessageFromContent, MediaType, areJidsSameUser, WAMessageStatus, downloadAndSaveMediaMessage, AuthenticationState, GroupMetadata, initInMemoryKeyStore, getContentType, MiscMessageGenerationOptions, useSingleFileAuthState, BufferJSON, WAMessageProto, MessageOptions, WAFlag, WANode, WAMetric, ChatModification, MessageTypeProto, WALocationMessage, ReRaol404ectMode, WAContextInfo, proto, WAGroupMetadata, ProxyAgent, waChatKey, MimetypeMap, MediaPathMap, WAContactMessage, WAContactsArrayMessage, WAGroupInviteMessage, WATextMessage, WAMessageContent, WAMessage, BaileysError, WA_MESSAGE_STATUS_TYPE, MediaConnInfo, URL_REGEX, WAUrlInfo, WA_DEFAULT_EPHEMERAL, WAMediaUpload, mentionedJid, processTime, Browser, MessageType, Presence, WA_MESSAGE_STUB_TYPES, Mimetype, relayWAMessage, Browsers, GroupSettingChange, DisRaol404ectReason, WASocket, getStream, WAProto, isBaileys, AnyMessageContent, fetchLatestBaileysVersion, useMultiFileAuthState, templateMessage 
} = require("@fizzxydev/baileys-pro");

//=======================================//
const {
  smsg,
  getGroupAdmins,
  formatp,
  tanggal,
  jam,
  formatDate,
  getTime,
  isUrl,
  await,
  sleep,
  clockString,
  msToDate,
  sort,
  toNumber,
  enumGetKey,
  runtime,
  fetchJson,
  getBuffer,
  json,
  delay,
  format,
  logic,
  generateProfilePicture,
  parseMention,
  getRandom,
  pickRandom,
  reSize,
} = require("./systems/function/myfunc");
     //=================================================//
     
     //=======================================//
     // SCRAPEKU
     const { muslimai, mediaFire, text2img, chat, transcribe, nhentaiSearch, nhentaiDL } = require("./systems/scrape/scrapeku")
     
     // PRIMBON 
     const { Primbon } = require("./systems/scrape/primbon")
     
     // SAWERIA
     const { Saweria } = require("./systems/scrape/saweria")
     
     // SCRAPE MODULE
     const fg = require('api-dylux')
     const { ttdl, igdl, fbdown, twitter, youtube } = require("btch-downloader");
     //=======================================//
     module.exports = conn = async (conn, m, chatUpdate, store) => {
     try {        
     const body = (m && m?.mtype) ? (
m?.mtype === 'conversation' ? m?.message?.conversation :
m?.mtype === 'imageMessage' ? m?.message?.imageMessage?.caption :
m?.mtype === 'videoMessage' ? m?.message?.videoMessage?.caption :
m?.mtype === 'extendedTextMessage' ? m?.message?.extendedTextMessage?.text :
m?.mtype === 'buttonsResponseMessage' ? m?.message?.buttonsResponseMessage?.selectedButtonId :
m?.mtype === 'listResponseMessage' ? m?.message?.listResponseMessage?.singleSelectm?.reply?.selectedRowId :
m?.mtype === 'templateButtonm?.replyMessage' ? m?.message?.templateButtonm?.replyMessage?.selectedId :
m?.mtype === 'messageContextInfo' ? (
m?.message?.buttonsResponseMessage?.selectedButtonId || 
m?.message?.listResponseMessage?.singleSelectm?.reply?.selectedRowId || 
m?.text
) : ''
) : '';
     const sender = m.key.fromMe ? (conn.user.id.split(':')[0]+'@s.whatsapp.net' || conn.user.id) : (m.key.participant || m.key.remoteJid)
     const budy = (typeof m.text == 'string' ? m.text : '')
     var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
const isCmd = body.startsWith(prefix)
     const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
     const args = body.trim().split(/ +/).slice(1);
     const pushname = m.pushName || "No Name"
     const text = q = args.join(" ")
     const from = m.key.remoteJid;
     const isGroup = from.endsWith("@g.us");
     const banned = fs.readFileSync('./systems/database/banned.json').toString()
     const ban = JSON.parse(fs.readFileSync('./systems/database/banned.json').toString())
     const fatkuns = m && (m?.quoted || m);
     const quoted = (fatkuns?.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] :
(fatkuns?.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] :
(fatkuns?.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] :
m?.quoted || m;
     const mime = (quoted.msg || quoted).mimetype || ''
const qmsg = (quoted.msg || quoted)
const isMedia = /image|video|sticker|audio/.test(mime)
     
     
     //User
const botNumber = await conn.decodeJid(conn.user.id)
const globalelit = `${global.owner}@s.whatsapp.net`
const isOwner = globalelit.includes(m.sender)
const itsMe = m.sender == botNumber ? true : false
const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const isBan = isCreator ? false : [banned].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
     
     // ====================================== //	
     // DATABASE
     global.db.data = JSON.parse(fs.readFileSync('./systems/database/database.json'))
      if (global.db.data) global.db.data = {
        chats: {},
       ...(global.db.data || {})
       }
     
     
     let chats = global.db.data.chats[m.chat]
      if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
       if (chats) {
        if (!('autoai' in chats)) chats.autoai = false
       } else global.db.data.chats[m.chat] = {
      autoai: false,
      }
      
      try {
ppuser = await conn.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://files.catbox.moe/0arg0u.jpg'
}
ppzann = await getBuffer(ppuser)
const avatar = await reSize(ppuser, 300, 300)
      const imagez = 'https://files.catbox.moe/c78ko1.jpg' // image url
      
 // PENGUBAH TEXT
        const Raol = (text, style = 1) => {
          const abc = 'abcdefghijklmnopqrstuvwxyz1234567890'.split('');
          const raol = { 1: 'ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘqʀꜱᴛᴜᴠᴡxʏᴢ1234567890' };
          const replacer = [];

          abc.map((v, i) => replacer.push({
            original: v,
            convert: raol[style].split('')[i]
          }));

          return text.toLowerCase().split('').map((v) => {
            const find = replacer.find((x) => x.original == v);
            return find ? find.convert : v;
          }).join('');
        };
      
//Group
let groupMetadata = null;
let groupName = '';

if (m.isGroup) {
    try {
        groupMetadata = await conn.groupMetadata(m.chat);
        groupName = groupMetadata?.subject || 'Unknown Group';
    } catch (error) {
        console.error('Failed to fetch group metadata:', error);
        groupName = 'Unknown Group';
    }
}
const participants = m.isGroup ? (groupMetadata?.participants || []) : [];
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : [];
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const groupOwner = m.isGroup && groupMetadata ? groupMetadata.owner : '';
const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false;
//Akses

// Saweria
const pay = new Saweria();
const PayAkun = await pay.login(gmailSaweria, passwdSaweria);
      
//Waktu
const moment = require('moment-timezone')
const time2 = moment().tz("Asia/Jakarta").format("HH:mm:ss")
if(time2 < "19:00:00"){
var ucapanWaktu = "Selamat Malam🌃"
}
if(time2 < "15:00:00"){
var ucapanWaktu = "Selamat Sore🌄"
 }
if(time2 < "11:00:00"){
var ucapanWaktu = "Selamat Siang🏞️"
}
if(time2 < "06:00:00"){
var ucapanWaktu = "Selamat Pagi🏙️ "
 }
if(time2 < "23:59:00"){
var ucapanWaktu = "Selamat Subuh🌆"
}
const wib = moment(Date.now()).tz("Asia/Jakarta").locale("id").format("HH:mm:ss z")
const wita = moment(Date.now()).tz("Asia/Makassar").locale("id").format("HH:mm:ss z")
const wit = moment(Date.now()).tz("Asia/Jayapura").locale("id").format("HH:mm:ss z")
const salam2 = moment(Date.now()).tz("Asia/Jakarta").locale("id").format("a")
      
      if (command) {
if (isCmd && !m.isGroup) {
console.log(chalk.black(chalk.bgHex('#ff5e78').bold(`\n🌟 ${ucapanWaktu} 🌟`)));
console.log(chalk.white(chalk.bgHex('#4a69bd').bold(`🚀 There is a new message ! 🚀`)));
console.log(chalk.black(chalk.bgHex('#fdcb6e')(`📅 DATE: ${new Date().toLocaleString()}
💬 MESSAGE: ${m.body || m.mtype}
🗣️ SENDERNAME: ${pushname}
👤 JIDS: ${m.sender}`)));
} else if (m.isGroup) {
console.log(chalk.black(chalk.bgHex('#ff5e78').bold(`\n🌟 ${ucapanWaktu} 🌟`)));
console.log(chalk.white(chalk.bgHex('#4a69bd').bold(`🚀 There is a new message! 🚀`)));
console.log(chalk.black(chalk.bgHex('#fdcb6e')(`📅 DATE: ${new Date().toLocaleString()}
💬 MESSAGE: ${m.body || m.mtype}
🗣️ SENDERNAME: ${pushname}
👤 JIDS: ${m.sender}
🔍 MESS LOCATION: ${groupName}`)));
}
}


// OWNER CARD
    let list = [];
    for (let i of owner) {
      list.push({
        displayName: conn.getName(i + "@s.whatsapp.net"),
        vcard: `BEGIN:VCARD\n
VERSION:3.0\n
N:${conn.getName(i + "@s.whatsapp.net")}\n
FN:${conn.getName(i + "@s.whatsapp.net")}\n
item1.TEL;waid=${i}:${i}\n
item1.X-ABLabel:Ponsel\n
item2.EMAIL;type=INTERNET:${email}\n
item2.X-ABLabel:Email\n
item3.URL:https://${global.website}\n
item3.X-ABLabel:Profile Website\n
item4.ADR:;;Indonesia;;;;\n
item4.X-ABLabel:Region\n
END:VCARD`,
      });
    }
    
// APLOADER
/*
Code Uploader
Base : https://top4top.io
Req Dari : Rei Kun~~(😹)

Req Ke : 6289699606658


Cara pake :
let res = await upload(buffer)
console.log(res)

output : https://h.top4top.io/p_3342mdi9o0.jpg
*/


    
// TES AI
const aireadDB = (path) => {
  if (fs.existsSync(path)) {
    return JSON.parse(fs.readFileSync(path));
  }
  return { aktif: {}, session: {} }; 
};

const aiwriteDB = (path, data) => {
  fs.writeFileSync(path, JSON.stringify(data, null, 2));
};

const dbPath = "./systems/database/autoai.json";

  const now = Date.now();
  let autoaidb = aireadDB(dbPath);

if (autoaidb.aktif) {
  Object.keys(autoaidb.aktif).forEach((user) => {
    if (now - autoaidb.aktif[user].lastsend > 5 * 60 * 1000) {
      delete autoaidb.aktif[user];
      delete autoaidb.session[user];
    }
  });

  aiwriteDB(dbPath, autoaidb);
}
      
// SCRAPE REMINI
async function remini(urlPath, method) {
return new Promise(async (resolve, reject) => {
let Methods = ["enhance", "recolor", "dehaze"]
Methods.includes(method) ? (method = method) : (method = Methods[0])
let buffer,
Form = new FormData(),
scheme = "https" + "://" + "inferenceengine" + ".vyro" + ".ai/" + method;
Form.append("model_version", 1, {
"Content-Transfer-Encoding": "binary",
contentType: "multipart/form-data; charset=uttf-8",
})
Form.append("image", Buffer.from(urlPath), {
filename: "enhance_image_body.jpg",
contentType: "image/jpeg",
})
Form.submit(
{
url: scheme,
host: "inferenceengine" + ".vyro" + ".ai",
path: "/" + method,
protocol: "https:",
headers: {
"User-Agent": "okhttp/4.9.3",
Connection: "Keep-Alive",
"Accept-Encoding": "gzip",
},
},
function (err, res) {
if (err) reject()
let data = []
res
.on("data", function (chunk, resp) {
data.push(chunk)
})
.on("end", () => {
resolve(Buffer.concat(data))
})
res.on("error", (e) => {
reject()
})
}
)
})
}
      
      
// TEXT FOOTER
const repfut = (footer) => {
let massage = generateWAMessageFromContent(m.chat, {
viewOnceMessage: {
message: {
interactiveMessage: {
body: {
text: null,            
},
footer: {
text: footer,
},
nativeFlowMessage: {
buttons: [{
text: null
}], 
},
},}, }, },{ quoted : quoted });
conn.relayMessage( massage.key.remoteJid,massage.message,{ messageId: massage.key.id });
}
         
         
     switch (command) {
case 'donasi':{
if (isBan) return repfut(mess.ban)
const pay = new Saweria(PayAkun.data.user_id);
const log = await pay.createPayment(nominalSaweria, pesanSaweria);
let pesan = `
*Message:* ${log.data.message}
*Type:* ${log.data.type}
*Status:* ${log.data.status}
*Created:* ${log.data.created_at}
*Expired:* ${log.data.expired_at}
`
conn.sendMessage(m.chat, { image: Buffer.from(log.data.qr_image.split(',')[1], 'base64'), caption: pesan }, { quoted: m })
}
break
     case 'ping':{
     if (isBan) return repfut(mess.ban)
     const used = process.memoryUsage();
    const cpus = os.cpus().map(cpu => {
        cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0);
        return cpu;
    });

    const cpu = cpus.reduce((last, cpu, _, { length }) => {
        last.total += cpu.total;
        last.speed += cpu.speed / length;
        last.times.user += cpu.times.user;
        last.times.nice += cpu.times.nice;
        last.times.sys += cpu.times.sys;
        last.times.idle += cpu.times.idle;
        last.times.irq += cpu.times.irq;
        return last;
    }, {
        speed: 0,
        total: 0,
        times: {
            user: 0,
            nice: 0,
            sys: 0,
            idle: 0,
            irq: 0
        }
    });

    let timestamp = speed();
    let latensi = speed() - timestamp;
    let neww = performance.now();
    let oldd = performance.now();
    let respon = Raol(`
Response Speed ${latensi.toFixed(4)} _Second_\n${oldd - neww} _miliseconds_\n\nRuntime: ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v => v.length)), ' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
    `.trim());

    conn.relayMessage(m.chat, {
        requestPaymentMessage: {
            currencyCodeIso4217: 'USD',
            amount1000: 50000,
            requestFrom: m.sender,
            noteMessage: {
                extendedTextMessage: {
                    text: respon,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true
                        }
                    }
                }
            }
        }
    }, {});
     }
     break
     case 'owner': {
                conn.sendMessage(from, {
                    contacts: {
                        displayName: `${list.length}`,
                        contacts: list
                    }, contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: namabot,
                                body: namaowner,
                                thumbnail: foto,
                                sourceUrl: linkch,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                })
            }
            break
     case 'menu':{
     if (isBan) return repfut(mess.ban)
     const sender = m.sender.split('@')[0];
     const uptime = runtime(process.uptime())
     const nodeVersion = process.version;
    const packageJson = require('./package.json');
    const baileysVersion = packageJson.dependencies['@fizzxydev/baileys-pro'] || packageJson.devDependencies['@fizzxydev/baileys-pro'];
    const botStatus = conn.public ? 'Public' : 'Self';
     let menu = `
     halo kak ${pushname}, aku ${namabot} ada bisa saya bantu
     
     *Versi:* 1.0
     *Nodejs:* ${nodeVersion}
     *Library:* ${baileysVersion}
     *Runtime:* ${uptime}
     *Owner:* ${namaowner}
     *Status:* ${botStatus}
     
     OWNER
     - ${prefix}addgroup
     - ${prefix}removegroup
     - ${prefix}addcase
     - ${prefix}update
     - ${prefix}getcase
     - ${prefix}upchv1
     - ${prefix}banned
     - ${prefix}unbanned
     - ${prefix}setppbot
     - ${prefix}public 
     - ${prefix}self
     
     AI
     - ${prefix}muslimai
     
     DOWNLOADER
     - ${prefix}tiktok
     - ${prefix}instagram
     - ${prefix}x
     - ${prefix}mediafire
     
     STICKER
     - ${prefix}stiker
     - ${prefix}brat
     - ${prefix}furrybrat
     - ${prefix}cewebrat
     
     TOOLS
     - ${prefix}hd
     - ${prefix}upchv2
     - ${prefix}getpb
     - ${prefix}getgist
     - ${prefix}ping
     - ${prefix}owner`.trim()
    await conn.sendMessage(m.chat, {
        image: { url: "https://files.catbox.moe/1xa5yl.jpg" }, // Ganti dengan URL gambar Anda
        caption: menu,
        footer: `Powered by WhatsApp`,
        contextInfo: {
            mentionedJid: [m.sender],
            forwardingScore: 20,
            isForwarded: true,
            externalAdReply: {
                showAdAttribution: true,
                title: namabot,
                body: "Bot Simpel Made By Nodejs",
                thumbnailUrl: imagez, // Ganti dengan URL thumbnail Anda
                sourceUrl: website, // Ganti dengan URL sumber Anda
                mediaType: 1,
                renderLargerThumbnail: true
            }
        },
        buttons: [
            {
     buttonId: '.ping',
     buttonText: {
       displayText: 'Kecepatan'
     },
     type: 1
   },
   {
     buttonId: '.owner',
     buttonText: {
       displayText: 'Pemilik Bot'
     },
     type: 1
   },
        ],
        headerType: 1,
        viewOnce: true
    });
     }
     break
     
     //FITUR OWNER
case 'update':{
if (!isOwner) return repfut(mess.owner)
if (!args[0]) return repfut("⚠️ Masukin link raw file yang mau diupdate!");
const fs = require("fs");
const fetch = require("node-fetch");
let updatedFiles = [];
const updateFile = async (url) => {
try {
let splitUrl = url.split("/main/"); 
if (splitUrl.length < 2) throw new Error("Format URL salah!");
let path = splitUrl[1];
if (!path) throw new Error("Path file tidak ditemukan!");
let res = await fetch(url);if (!res.ok) throw new Error("Gagal fetch file!");
let fileData = await res.text();
fs.writeFileSync(`./${path}`, fileData);
updatedFiles.push(`🗃️ Updated: ./${path}`);
} catch (err) {
updatedFiles.push(`❌ Error: ${err.message}`);
}
};

(async () => {
await Promise.all(args.map(updateFile));
repfut(`🔄 **UPDATE SELESAI!**\n\n${updatedFiles.join("\n")}\n\n⏳ Restarting bot...`);

setTimeout(() => {
process.exit(1);
}, 3000);
})();

     }
     break
     
case 'public': {
    if (!isOwner) return repfut(mess.owner)
    conn.public = true;
    repfut('succes');
    break;
}

case 'self': {
    if (!isOwner) return repfut(mess.owner)
    conn.public = false;
    repfut('succes');
    break;
}


case 'setppbot':
case 'setpppanjang': {
  if (!isOwner) return repfut(mess.owner)
  let q = m.quoted ? m.quoted : m;
  let mime = (q.msg || q).mimetype || '';

  if (!/image/.test(mime)) return repfut('❌ Kirim atau reply gambar buat dijadiin foto profil!');

  repfut('⏳ Lagi update foto profil...');

  try {
    let media = await q.download();
    await conn.updateProfilePicture(conn.user.id, media);
    repfut('✅ Berhasil update foto profil!');
  } catch (err) {
    console.error(err);
    repfut('❌ Gagal update foto profil, coba lagi nanti!');
  }
}
break;

     
     // banned
     case 'ban':
     case 'banned': {
if (!isOwner) return repfut(mess.owner)
if (!args[0]) return repfut(`contoh: ${prefix + command} 628xxx`)
var ben = text.split("|")[0].replace(/[^0-9]/g, '')
let target = ben + '@s.whatsapp.net'
ban.push(ben)
fs.writeFileSync('./systems/database/banned.json', JSON.stringify(ban))
repfut(`Sukses banned @${target.split('@')[0]}, Sekarang @${target.split('@')[0]} tidak dapat menggunakan bot.`)
}
break

case 'unban':
case 'unbanned': {
if (!isOwner) return repfut(mess.owner)
if (!args[0]) return repfut(`contoh: ${prefix + command} 628xxx`)
var benn = text.split("|")[0].replace(/[^0-9]/g, '')
let target =benn + '@s.whatsapp.net'
unp = ban.indexOf(benn)
ban.splice(unp, 1)
fs.writeFileSync('./systems/database/banned.json', JSON.stringify(ban))
repfut(`Sukses unbanned @${target.split('@')[0]}, Sekarang @${target.split('@')[0]} dapat menggunakan bot lagi.`)
}
break
     
case 'getcase': {
  if (!isOwner) return repfut(mess.owner);

  try {
    const getCase = (cases) => {
      const fileContent = fs.readFileSync("case.js").toString();
      const caseStart = fileContent.split('case \'' + cases + '\'')[1];
      if (!caseStart) throw new Error("Case not found");
      return "case" + `'${cases}'` + caseStart.split("break")[0] + "break";
    };

    if (!q) return reply('Please enter the case name you want to retrieve!');
    const raolgetcase = `${getCase(q)}`;
    await repfut(`${raolgetcase}`);
  } catch (error) {
    repfut(`Case ${q} does not exist in the directory!`);
  }
}
break;

     case 'addgroup': {
    // Hanya owner yang bisa menambahkan grup
    if (!isOwner) return repfut(mess.owner)

    // Ambil ID grup
    const targetGroup = m.quoted ? m.quoted.chat : m.chat
    if (!targetGroup.endsWith('@g.us')) return repfut('❌ Bukan ID grup yang valid!')

    // Baca database grup yang diizinkan
    let allowedGroups = []
    try {
        allowedGroups = JSON.parse(fs.readFileSync('./systems/database/allowedGroups.json'))
    } catch {
        allowedGroups = []
    }

    // Tambahkan grup ke whitelist jika belum ada
    if (!allowedGroups.includes(targetGroup)) {
        allowedGroups.push(targetGroup)
        fs.writeFileSync('./systems/database/allowedGroups.json', JSON.stringify(allowedGroups, null, 2))
        repfut(`✅ Berhasil menambahkan grup ke whitelist!\nID: ${targetGroup}`)
    } else {
        repfut('⚠️ Grup ini sudah terdaftar di whitelist!')
    }
    break
}

case 'removegroup': {
    // Hanya owner yang bisa menghapus grup
    if (!isOwner) return repfut(mess.owner)

    // Ambil ID grup
    const targetGroup = m.quoted ? m.quoted.chat : m.chat
    if (!targetGroup.endsWith('@g.us')) return repfut('❌ Bukan ID grup yang valid!')

    // Baca database grup yang diizinkan
    let allowedGroups = JSON.parse(fs.readFileSync('./systems/database/allowedGroups.json'))
    allowedGroups = allowedGroups.filter(g => g !== targetGroup)

    // Update database
    fs.writeFileSync('./systems/database/allowedGroups.json', JSON.stringify(allowedGroups, null, 2))
    repfut(`✅ Berhasil menghapus grup dari whitelist!\nID: ${targetGroup}`)
    break
    }
     case 'upchv1': {
if (!isCreator) return repfut(mess.owner)
        		try {
					ppuser = await conn.profilePictureUrl(m.sender, 'image');
				} catch (err) {
					ppuser = 'https://files.catbox.moe/j9k007.jpg'
				}	
				let fotoProfil = await getBuffer(ppuser);
				let pelers = `Message from ${m.pushName}`
				try {
					if (!mime && !text) {
						return repfut(`Uh-oh, sis! You haven't sent any media or text yet. Please try again! 🤭`)
					}
					media = mime ? await quoted.download() : null
					let defaultCaption = "✨ This media is sent via an automated system✨"
					if (/image/.test(mime)) {
						conn.sendMessage(idsaluran.id1, {
					contextInfo: {	
		        externalAdReply: {
						showAdAttribution: true,
						title: pelers,
						mediaType: 1,
						previewType: 1,
						body: 'Massage to channel',
						thumbnail: avatar,
					    renderLargerThumbnail: false,
						mediaUrl: '',
					    sourceUrl: ''
			        }
			        },
							image: media,
							caption: text ? text : defaultCaption
						})
						repfut(`📸 Image successfully uploaded to channel with caption: "${text ? text : defaultCaption}"`)
					} else if (/video/.test(mime)) {
						conn.sendMessage(idsaluran.id1, {
					contextInfo: {
						
		        externalAdReply: {
						showAdAttribution: true,
						title: pelers,
						mediaType: 1,
						previewType: 1,
						body: 'Massage to channel',
						thumbnail: avatar,
					    renderLargerThumbnail: false,
						mediaUrl: '',
					    sourceUrl: ''
			        }
			        },
							video: media,
							caption: text ? text : defaultCaption
						})
						repfut(`🎥 Video successfully uploaded to channel with caption: "${text ? text : defaultCaption}"`)
					} else if (/audio/.test(mime)) {
						conn.sendMessage(idsaluran.id1, {
					contextInfo: {
						
		        externalAdReply: {
						showAdAttribution: true,
						title: pelers,
						mediaType: 1,
						previewType: 1,
						body: 'Massage to channel',
						thumbnail: avatar,
					    renderLargerThumbnail: false,
						mediaUrl: '',
					    sourceUrl: ''
			        }
			        },
							audio: media,
							mimetype: mime,
							ptt: true
						})
						repfut(`🎵 Audio successfully uploaded to the channel, sis!`)
					} else if (/text/.test(mime) || text) {
						conn.sendMessage(idsaluran.id1, {
					contextInfo: {
						
		        externalAdReply: {
						showAdAttribution: true,
						title: pelers,
						mediaType: 1,
						previewType: 1,
						body: 'Massage to channel',
						thumbnail: avatar,
					    renderLargerThumbnail: false,
						mediaUrl: '',
					    sourceUrl: ''
			        }
			        },
							text: text ? text : defaultCaption
						})
						repfut(`💬 Text message successfully sent to channel: "${text ? text : defaultCaption}"`)
					} else {
						repfut(`Hmm... I don't know what kind of media this is. Please check again, sis! 🧐`)
					}
				} catch (error) {
					console.error(error)
					repfut(`Oh, sis! 😣 There was a problem uploading to the channel. Try again later, OK!`)
				}
			}
			break
     case 'addcase': {
     if (!isCreator) return repfut(mess.owner);
     if (!text) return repfut(`Example: ${prefix+command} the case`);
const namaFile = path.join(__dirname, 'case.js');
const caseBaru = `${text}\n\n`;
const tambahCase = (data, caseBaru) => {
const posisiDefault = data.lastIndexOf("default:");
if (posisiDefault !== -1) {
const kodeBaruLengkap = data.slice(0, posisiDefault) + caseBaru + data.slice(posisiDefault);
return { success: true, kodeBaruLengkap };
} else {
return { success: false, message: "Cannot find default case in file!" };
}};
fs.readFile(namaFile, 'utf8', (err, data) => {
if (err) {
console.error('An error occurred while reading the file:', err);
return repfut(`An error occurred while reading the file: ${err.message}`);
}
const result = tambahCase(data, caseBaru);
if (result.success) {
fs.writeFile(namaFile, result.kodeBaruLengkap, 'utf8', (err) => {
if (err) {
console.error('An error occurred while writing the file:', err);
return repfut(`An error occurred while writing the file: ${err.message}`);
} else {
console.log('Successfully added new case:');
console.log(caseBaru);
return repfut('Successfully added case!');
}});
} else {
console.error(result.message);
return repfut(result.message);
}});
}
break 

     //FITUR TOOLS
     case 'getidch': {
if (isBan) return repfut(mess.ban)
if (!m.quoted) return repfut('reply saluran channel nya lah')
try {
let id = (await m.getQuotedObj()).msg.contextInfo.forwardedNewsletterMessageInfo
const channel = `Name: ${id.newsletterName}\nId: ${id.newsletterJid}\nMessageId: ${id.serverMessageId}`
let textu7 = generateWAMessageFromContent(m.chat, {
          'viewOnceMessage': {
            'message': {
              'messageContextInfo': {
                'deviceListMetadata': {},
                'deviceListMetadataVersion': 2
              },
              'interactiveMessage': proto.Message.InteractiveMessage.create({
                'body': proto.Message.InteractiveMessage.Body.create({
                  'text': channel,
                }),
                'footer': proto.Message.InteractiveMessage.Footer.create({
                  'text': "Powered by WhatsApp"
                }),
                'header': proto.Message.InteractiveMessage.Header.create({
                  'title': "*GET ID CHANNEL*",
                  'subtitle': '--',
                  'hasMediaAttachment': false,
                }),
                'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [ {
                    name: 'cta_copy',
    buttonParamsJson: JSON.stringify({
      display_text: 'Id Channel',
      id: '123456789',
      copy_code: id.newsletterJid,
    }),
                 },]
                })
              })
            },
          }
        }, {
          quoted: m
        });
        conn.relayMessage(m.chat, textu7.message, {});
 } catch (e) {
repfut('Harus chat dari channel bang')
}
}
break       
     
     
case 'getgist': case 'getgists': {
   if (isBan) return repfut(mess.ban)
    const { writeFile, readFile, rm } = require('fs/promises');
    const path = require('path');
    const mime = require('mime-types');
    
    if (!text) return repfut('enter GitHub Gist link-!'); 
    if (!/gist.github.com/.test(text)) return repfut('invalid url-!');

    let isFileMode = text.includes('--file');
    const gistId = text.replace('--file', '').trim().split('/').pop();

    try {
        const response = await fetch(`https://api.github.com/gists/${gistId}`);
        if (!response.ok) return m.reply('failed to fetch content from GitHub Gist.');
        
        const data = await response.json();
        if (!data.files) return repfut('no files found in Gist-!');

        let firstFile = Object.values(data.files)[0];
        let content = firstFile.content;
        let fileName = firstFile.filename;
        let detectedExt = path.extname(fileName).substring(1) || 'txt';
        let detectedMime = mime.lookup(detectedExt) || 'text/plain';

        if (!isFileMode) {
            return repfut(`${content}`);
        }

        const filePath = path.join(__dirname, fileName);
        await writeFile(filePath, content);

        await conn.sendMessage(m.chat, {
            document: await readFile(filePath), 
            caption: `*\`Get Gist Content-!!\`*\n> *Detected File*: .${detectedExt}\n> *MIME Type*: ${detectedMime}`,
            fileName,
            mimetype: detectedMime
        }, { quoted: m });
        
        rm(filePath)
    } catch (error) {
        console.log(error);
        repfut('oops! something went wrong. please try again later.');
    }
}
break
case 'getpb': {
if (isBan) return repfut(mess.ban)
    const { writeFile, readFile, rm } = require('fs/promises');
    const path = require('path');
    
    if (!text) return repfut('enter pastebin link-!'); 
    if (!/pastebin.com/.test(text)) return repfut('invalid url-!');

    let isFileMode = text.includes('--file');
    const pasteId = text.replace('--file', '').trim().split('/').pop();

    try {
        const response = await fetch(`https://pastebin.com/raw/${pasteId}`);
        if (!response.ok) return repfut('failed to fetch content from pastebin.');
        
        const content = await response.text();
        if (!content) return repfut('no content found on pastebin-!');
        
        if (!isFileMode) {
            return repfut(`${content}`);
        }

        let detectedExt = 'txt';
        let detectedMime = 'text/plain';

        if (/^\s*</.test(content)) { 
            detectedExt = 'html';
            detectedMime = 'text/html';
        } else if (/^(\s*{|\s*\[)/.test(content)) { 
            detectedExt = 'json';
            detectedMime = 'application/json';
        } else if (/^\s*function|\s*const|\s*let|\s*var/.test(content)) { 
            detectedExt = 'js';
            detectedMime = 'application/javascript';
        } else if (/^\s*import|^\s*from\s+['"]/.test(content)) { 
            detectedExt = 'py';
            detectedMime = 'text/x-python';
        } else if (/^\s*<\?php/.test(content)) { 
            detectedExt = 'php';
            detectedMime = 'application/x-php';
        } else if (/^\s*SELECT|^\s*INSERT|^\s*UPDATE|^\s*DELETE/.test(content)) { 
            detectedExt = 'sql';
            detectedMime = 'application/sql';
        }

        const fileName = `pastebin_${pasteId}.${detectedExt}`;
        const filePath = path.join(__dirname, fileName);
        await writeFile(filePath, content);

        await conn.sendMessage(m.chat, {
            document: await readFile(filePath), 
            caption: `*\`Get Pastebin Content-!!\`*\n> *Detected File*: .${detectedExt}\n> *MIME Type*: ${detectedMime}`,
            fileName,
            mimetype: detectedMime
        }, { quoted: m });
        
        rm(filePath)
    } catch (error) {
        console.log(error);
        repfut('oops! something went wrong. please try again later.');
    }
}
break
     case 'sticker': case 's': case 'stickergif': case 'stiker': {
     if (isBan) return repfut(mess.ban)
 if (!quoted) return repfut(`Balas Video/Image Dengan Caption ${prefix + command}`)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await conn.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return repfut('Maksimal 10 detik!')
let media = await quoted.download()
let encmedia = await conn.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else {
repfut(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
}
}
break
case 'brat': {
if (isBan) return repfut(mess.ban)
    if (!text) return repfut('input text');
    const apiUrl = `https://brat.caliphdev.com/api/brat?text=${encodeURIComponent(text)}`;
    await conn.sendImageAsSticker(m.chat, apiUrl, m, {
        packname: global.packname,
        author: global.author
    });
    break;
}
case 'furrybrat': {
if (isBan) return repfut(mess.ban)
    if (!text) return repfut('input text');
    const apiUrl = `https://furrbrats.vercel.app/generate?text=${encodeURIComponent(text)}`;
    await conn.sendImageAsSticker(m.chat, apiUrl, m, {
        packname: global.packname,
        author: global.author
    });
    break;
}
     
     //FITUR AI
     case 'muslimai': {
     if (isBan) return repfut(mess.ban)
     if (!text) return repfut('text input')
     let hasil = await muslimai(text)
     repfut(hasil.answer)
     }
     break
     
     //FITUR DOWNLOAD 
     /*case 'nhentais': 
     case 'nhentaisearch':{
     if (isBan) return repfut(mess.ban)
     if (!text) return repfut('code input')
     let data = await nhentaiSearch(text)
      async function createImage(url) {
    const { imageMessage } = await generateWAMessageContent({
      image: {
        url
      }
    }, {
      upload: conn.waUploadToServer
    });
    return imageMessage;
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  let push = [];
  let res = data.map(v => v.thumb);

  shuffleArray(res);
  let ult = res.splice(0, 5); 
  let i = 1;

  for (let lucuy of ult) {
    push.push({
      body: proto.Message.InteractiveMessage.Body.fromObject({
        text: `Image ke - ${i++}`
      }),
      footer: proto.Message.InteractiveMessage.Footer.fromObject({
        text: global.namabot
      }),
      header: proto.Message.InteractiveMessage.Header.fromObject({
        title: data.title,
        hasMediaAttachment: true,
        imageMessage: await createImage(lucuy)
      }),
      nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
        buttons: [
          {
            "name": "cta_url",
            "buttonParamsJson": `{"display_text":"Source","url":"${data.link}","merchant_url":"${data.link}"}`
          }
        ]
      })
    });
  }

  let bot = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.fromObject({
          body: proto.Message.InteractiveMessage.Body.create({
            text: "Done"
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: `Search: ${text} | Nama: ${pushname}`
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            hasMediaAttachment: false
          }),
          carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
            cards: [
              ...push
            ]
          })
        })
      }
    }
  }, {});

  await conn.relayMessage(m.chat, bot.message, {
    messageId: bot.key.id
     })
     }
     break
     case 'nhentai': {
     if (isBan) return repfut(mess.ban)
     if (!text) return repfut('code input')
     let res = await nhentaiDL(text)
     console.log(res)
     }
     break */
     
     // tiktok
     case 'tt':
     case 'tiktok':{
     if (isBan) return repfut(mess.ban)
     if (!text) return repfut('url input')
     let api = await ttdl(text);
     let captionx = `
     *Title:* ${api.title}
     *Title Audio:* ${api.title_audio}`
     conn.sendMessage(m.chat, { video: { url: api.video }, caption: captionx })
     conn.sendMessage(m.chat, { audio: { url: api.audio }, mimetype: "audio/mpeg", ptt: true }, { quoted: m })
     }
     break
     
     // Instagram 
     case 'ig':
     case 'instagram':{
     if (isBan) return repfut(mess.ban)
     if (!text) return repfut('url input')
     const mediaUrl = await igdl(text);
     const urlmedia = mediaUrl[0].url;
     try {
        const response = await axios.head(urlmedia); 
        const contentType = response.headers['content-type']; // Mendapatkan tipe konten dari header
        if (contentType.startsWith('image/')) {
            await conn.sendMessage(m.chat, { image: { url: urlmedia}, caption: mess.done }, { quoted: m });
            return
        } else {
            await conn.sendMessage(m.chat, { video: { url: urlmedia}, caption: mess.done }, { quoted: m });
            return 
        }
     } catch(e) {
        return repfut(mess.error)
     }
     }
     break
     
case 'remini':
case 'hd':
case 'hdr': {
if (isBan) return repfut(mess.ban)
if (!quoted || !/image/.test(mime)) return repfut(`Balas Gambar Dengan Caption *${prefix + command}*`)
let media = await quoted.download()
let proses = await remini(media, "enhance")
conn.sendMessage(m.chat, {
image: proses
}, {
quoted: m
})
}
break
     
     case 'twitter': case 'x':{
     if (isBan) return repfut(mess.ban)
  if (!args[0]) return repfut(`*url Twitter*`)
  const sender = m.sender.split('@')[0];
  const url = args[0];
 
  try {
    let downloadResult = (await axios.get(`https://api.ryzendesu.vip/api/downloader/twitter?url=${url}`)).data;
 
    if (!downloadResult.status || !downloadResult.media || downloadResult.media.length === 0) {
      const tempResult = (await axios.get(`https://api.ryzendesu.vip/api/downloader/v2/twitter?url=${url}`)).data;
      downloadResult = Array.isArray(tempResult) && tempResult.length > 0
        ? { status: true, media: tempResult }
        : { status: false, media: [] };
    }
 
    if (!downloadResult.status || !downloadResult.media || downloadResult.media.length === 0) {
      throw 'Gagal mendownload konten dari Twitter';
    }
 
    const type = downloadResult.type || 'video';
 
    if (type === 'image') {
      for (let i = 0; i < downloadResult.media.length; i++) {
        const mediaUrl = downloadResult.media[i];
        const { data: imageBuffer } = await axios.get(mediaUrl, { responseType: 'arraybuffer' });
        const caption = i === 0 ? `Ini kak fotonya @${sender}` : '';
        await conn.sendMessage(
          m.chat,
          {
            image: imageBuffer,
            caption: caption,
            fileName: `image_${i + 1}.jpg`,
            mentions: i === 0 ? [m.sender] : [],
          },
          { quoted: m }
        );
      }
    } else {
      const mediaUrl = downloadResult.media[0].url || downloadResult.media[0];
      const { data: videoBuffer } = await axios.get(mediaUrl, { responseType: 'arraybuffer' });
      const caption = `Ini kak videonya @${sender}`;
      await conn.sendMessage(
        m.chat,
        {
          video: videoBuffer,
          mimetype: 'video/mp4',
          fileName: 'video.mp4',
          caption: caption,
          mentions: [m.sender],
        },
        { quoted: m }
      );
    }
  } catch (error) {
    console.error('Handler Error:', error);
    repfut(`An error occurred: ${error}`)
  }
}
break
     case 'mediafire':
     case 'mf':{
     if (isBan) return repfut(mess.ban)
     if (!text) return repfut('text input')
     let hasil = await mediaFire(text)
     let massage = `Nama: ${hasil.title}\nSize: ${hasil.size}`
     conn.sendMessage(m.chat, {document: {url:hasil.url}, mimetype: 'application/zip', fileName: hasil.filename, caption: massage}, {quoted:m});
     }
     break
     
     //FITUR SALURAN
     case 'upchv2': {
     if (isBan) return repfut(mess.ban)
    // [0] Cek apakah pesan berasal dari grup
    if (!m.chat.endsWith('@g.us')) return repfut('❌ Fitur ini hanya bisa digunakan di dalam grup!')

    // [1] Baca database grup yang diizinkan
    let allowedGroups = []
    try {
        allowedGroups = JSON.parse(fs.readFileSync('./systems/database/allowedGroups.json'))
    } catch {
        fs.writeFileSync('./systems/database/allowedGroups.json', '[]') // Buat file jika belum ada
    }

    // [2] Verifikasi ID grup
    const groupId = m.chat
    if (!allowedGroups.includes(groupId)) {
        return repfut(`🚫 Akses ditolak!\nGrup ini tidak terdaftar dalam whitelist sistem!`)
    }

    // [3] Cek apakah pengguna adalah admin grup
    if (!groupAdmins) return repfut(mess.owner)

    try {
        // [4] Baca database penggunaan
        let upchUsage = {}
        try {
            upchUsage = JSON.parse(fs.readFileSync('./systems/database/upchUsage.json'))
        } catch {
            fs.writeFileSync('./systems/database/upchUsage.json', '{}')
        }

        // [5] Cooldown System
        const lastUsed = upchUsage[m.sender] || 0
        const cooldown = 0 * 1 * 60 * 1000 // 24 jam
        const remainingTime = cooldown - (Date.now() - lastUsed)

        if (remainingTime > 0) {
            const hours = Math.floor(remainingTime / (1000 * 60 * 60))
            const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60))
            return repfut(`⏳ *Cooldown Active!*\nKamu bisa menggunakan fitur ini lagi dalam *${hours} jam ${minutes} menit*`)
        }

        // [6] Update waktu penggunaan terakhir
        upchUsage[m.sender] = Date.now()
        fs.writeFileSync('./systems/database/upchUsage.json', JSON.stringify(upchUsage, null, 2))

        // [7] Handle Text dan Media
        try {
            ppuser = await Raol404.profilePictureUrl(m.sender, 'image')
        } catch (err) {
            ppuser = 'https://files.catbox.moe/j9k007.jpg'
        }
        let fotoProfil = await getBuffer(ppuser)
        let pelers = `Message from ${m.pushName}`

        // [PERUBAHAN PENTING] Logic text diutamakan
        const media = mime ? await quoted.download() : null
        const textMessage = text ? text : `✨ Pesan dikirim via ${namabot}✨`

        if (/image/.test(mime)) {
            await conn.sendMessage(idsaluran.id1, {
                contextInfo: {
                    externalAdReply: {
                        showAdAttribution: true,
                        title: pelers,
                        mediaType: 1,
                        previewType: 1,
                        body: 'Massage to channel',
                        thumbnail: avatar,
                        renderLargerThumbnail: false,
                        mediaUrl: '',
                        sourceUrl: ''
                    }
                },
                image: media,
                caption: textMessage // Text sebagai caption
            })
            repfut(`✅ Gambar + Text berhasil diupload!`)

        } else if (/video/.test(mime)) {
            await conn.sendMessage(idsaluran.id1, {
                contextInfo: {
                    externalAdReply: {
                        showAdAttribution: true,
                        title: pelers,
                        mediaType: 1,
                        previewType: 1,
                        body: 'Massage to channel',
                        thumbnail: avatar,
                        renderLargerThumbnail: false,
                        mediaUrl: '',
                        sourceUrl: ''
                    }
                },
                video: media,
                caption: textMessage // Text sebagai caption
            })
            repfut(`✅ Video + Text berhasil diupload!`)

        } else if (/audio/.test(mime)) {
            await conn.sendMessage(idsaluran.id1, {
                contextInfo: {
                    externalAdReply: {
                        showAdAttribution: true,
                        title: pelers,
                        mediaType: 1,
                        previewType: 1,
                        body: 'Massage to channel',
                        thumbnail: avatar,
                        renderLargerThumbnail: false,
                        mediaUrl: '',
                        sourceUrl: ''
                    }
                },
                audio: media,
                mimetype: mime,
                ptt: true,
                caption: textMessage // Text sebagai caption untuk audio
            })
            repfut(`✅ Audio + Text berhasil dikirim!`)

        } else if (text) { // [FIX] Handle text-only
            await conn.sendMessage(idsaluran.id1, {
                contextInfo: {
                    externalAdReply: {
                        showAdAttribution: true,
                        title: pelers,
                        mediaType: 1,
                        previewType: 1,
                        body: 'Massage to channel',
                        thumbnail: avatar,
                        renderLargerThumbnail: false,
                        mediaUrl: '',
                        sourceUrl: ''
                    }
                },
                text: textMessage // Text utama
            })
            repfut(`✅ Text berhasil dikirim!\n✉️ Pesan: "${text}"`)

        } else {
            repfut(`❌ Harap sertakan media ATAU text!`)
        }

    } catch (error) {
        console.error('Upch Error:', error)
        repfut(`🚨 Gagal mengirim! Error: ${error.message}`)
    }
    }
    break
    
    // STIKER MENU
    case 'cewebrat' : {
if (isBan) return repfut(mess.ban)
registerFont('./systems/media/font/font-nulis.ttf', { family: 'Agus' }); //sesuaikan

async function Brats(teks) {
    const folderna = './systems/media/';
    if (!fs.existsSync(folderna)) fs.mkdirSync(folderna, { recursive: true });

    const file_path = `${folderna}${Math.random().toString(36).slice(2, 6)}.jpg`;

    const response = await axios.get('https://files.catbox.moe/vkoaby.jpg', { responseType: 'arraybuffer' });
    fs.writeFileSync(file_path, Buffer.from(response.data));

    try {
        const img = await loadImage(file_path);
        const canvas = createCanvas(img.width, img.height);
        const ctx = canvas.getContext('2d');

        ctx.drawImage(img, 0, 0, img.width, img.height);

        const paper_x = img.width * 0.285;
        const paper_y = img.height * 0.42;
        const paper_width = img.width * 0.42;
        const paper_height = img.height * 0.32;

        let font_size = Math.min(paper_width / 7.5, paper_height / 3.5);
        ctx.font = `${font_size}px Agus`;
        ctx.fillStyle = 'black';

        const max_width = paper_width * 0.88;
        let words = teks.split(' ');
        let lines = [];
        let line = '';

        for (let word of words) {
            let test_line = line + (line ? ' ' : '') + word;
            let test_width = ctx.measureText(test_line).width;

            if (test_width > max_width && line) {
                lines.push(line);
                line = word;
            } else {
                line = test_line;
            }
        }
        if (line) lines.push(line);

        while (lines.length * font_size > paper_height * 0.85) {
            font_size -= 2;
            ctx.font = `${font_size}px Agus`;

            let tmp_lines = [];
            let tmp_line = '';
            for (let word of words) {
                let test_line = tmp_line + (tmp_line ? ' ' : '') + word;
                let test_width = ctx.measureText(test_line).width;

                if (test_width > max_width && tmp_line) {
                    tmp_lines.push(tmp_line);
                    tmp_line = word;
                } else {
                    tmp_line = test_line;
                }
            }
            if (tmp_line) tmp_lines.push(tmp_line);
            lines = tmp_lines;
        }

        let line_height = font_size * 1.15;
        let text_height = lines.length * line_height;

        let textStartY = paper_y + (paper_height - text_height) / 2 + (lines.length > 2 ? 270 : 275);

        ctx.save();
        ctx.translate(paper_x + paper_width / 2 + 24, textStartY);
        ctx.rotate(0.12);

        ctx.textAlign = 'center';

        ctx.shadowColor = 'rgba(0, 0, 0, 0.3)';
        ctx.shadowBlur = 3;
        ctx.shadowOffsetX = 2;
        ctx.shadowOffsetY = 2;

        for (let i = 0; i < lines.length; i++) {
            ctx.fillText(lines[i], 0, i * line_height);
        }
        ctx.restore();

        return canvas.toBuffer();
    } finally {
        if (fs.existsSync(file_path)) fs.unlinkSync(file_path);
    }
}
    if (!text) repfut('Masukkan teks yang ingin ditulis!')

    try {
        const gambar = await Brats(text);

        const sticker = new Sticker(gambar, {
            pack: global.packname,
            author: global.author,
            type: 'image/png',
        });

        const stikerBuffer = await sticker.toBuffer();
        await conn.sendMessage(m.chat, { sticker: stikerBuffer }, { quoted: m });

    } catch (err) {
        repfut(`Terjadi kesalahan: ${err.message}`);
    }
};
break
case 'hd':
case 'hdr': 
case 'hdimg':
case 'remini':
case 'enhance': {
if (isBan) return repfut(mess.ban)
async function Upscale(imageBuffer) {
 try {
 const response = await fetch("https://lexica.qewertyy.dev/upscale", {
 body: JSON.stringify({
 image_data: Buffer.from(imageBuffer, "base64"),
 format: "binary",
 }),
 headers: {
 "Content-Type": "application/json",
 },
 method: "POST",
 });
 return Buffer.from(await response.arrayBuffer());
 } catch {
 return null;
 }
}
if (!/image/.test(mime)) return repfut(`Kirim/kutip gambar dengan caption`)
let media = await quoted.download()
let proses = await Upscale(media);
conn.sendMessage(m.chat, { image: proses, caption: 'BERHASIL HDR ✅'}, { quoted: null})
}
break


case "reactch": {
if (isBan) return repfut(mess.ban)
    const args = body.trim().split(/ +/);
    if (args.length < 3) return repfut("Format salah! Gunakan: .reactch <idsaluran> <message_id> <emoji>");

    const channelId = args[0];
    const messageId = args[1];
    const emoji = args[2];

    try {
        await conn.newsletterReactMessage(channelId, messageId, emoji);
        repfut(`Berhasil mengirim reaksi ${emoji} ke pesan dengan ID ${messageId} di saluran ${channelId}.`);
    } catch (error) {
        console.error("Gagal mengirim reaksi:", error);
        repfut("Gagal mengirim reaksi. Pastikan ID saluran dan pesan benar.");
    }
    break;
}
    
     //=================================================// 
default:

   
   if ((mime.includes("audio") || budy) && m.chat.includes("@s.whatsapp.net")) {
  if (!autoaidb.aktif[sender]) {
    if (budy && budy.toLowerCase() === "ai on") {
      autoaidb.aktif[sender] = { lastsend: now };
      autoaidb.session[sender] = { chat: [] };
      aiwriteDB(dbPath, autoaidb);
      return repfut(`Halo ${m.pushName}, AI aktif. Tanya apapun ke saya!`);
    }
    return;
    
  }
  
   if (budy && budy.toLowerCase() === "ai off") {
    delete autoaidb.aktif[sender];
    delete autoaidb.session[sender];
    repfut("AI dimatikan.");
    return aiwriteDB(dbPath, autoaidb);
  }
  
if (!budy && mime.includes("audio")) budy =
 await transcribe(await quoted.download())
  try {
    autoaidb.aktif[sender].lastsend = now;
    autoaidb.session[sender].chat = autoaidb.session[sender].chat || [];
    
        const { writeFile } = require('fs/promises');
        
       const text = m.text || '';
    if (!text) return;
    const prefixRegex = /^[°zZ#$+,.?=''():√%!¢£¥€π¤ΠΦ&><™©®Δ^βα¦|/\\©^]/;
    const prefixtex = prefixRegex.test(text) ? text.match(prefixRegex)[0] : '.';
    if (text.startsWith(prefixtex)) return;
       const isImageRequest = /^\s*(buatkan|bikinin)\s+gambar\s+(.+)/i.exec(text); 
      
      if (isImageRequest) {
            const imagePrompt = isImageRequest[2];
            const imageResponse = await axios.get(
                `https://api.siputzx.my.id/api/ai/flux?prompt=${encodeURIComponent(imagePrompt)}`,
                { responseType: 'arraybuffer' }
            );

            const imagePath = path.join(__dirname, `temp_${Date.now()}.jpg`);
            await writeFile(imagePath, imageResponse.data);

            await conn.sendMessage(m.chat, { 
                image: { url: imagePath }, 
                caption: `Ini gambar hasil dari prompt: "${imagePrompt}"` 
            });
            setTimeout(() => {
                require('fs').unlinkSync(imagePath);
            }, 5000);
            } else {
      
    let logic = `lawan bicara kamu adalah ${pushname}, ${sifat}`
         const url = 'https://luminai.my.id/';
         const userMessage = { role: "user", content: budy };
          const data = {
         content: budy,
         user: "user",
         prompt: logic,
        webSearchMode: false
       };
       
        if (quoted && /image/.test(mime)) {
       const imageBuffer = await quoted.download();
        data.imageBuffer = imageBuffer;
      }
      
    const response = (await axios.post(url, data)).data.result;
    const assistantReply =
      response || "Maaf, ada kesalahan.";
    autoaidb.session[sender].chat.push(userMessage);
    autoaidb.session[sender].chat.push({ role: "assistant", content: assistantReply });

    aiwriteDB(dbPath, autoaidb);

    repfut(assistantReply);
               }
         } catch (error) {
       console.error("Error fetching data:", error);
        throw error;
              }
        }

if ((budy.match) && ["Assalamualaikum", "assalamualaikum", "Assalamu'alaikum",].includes(budy)) {
repfut(`WaalaikumSalam ${pushname}`)
}
        
if (budy.startsWith('=>')) {
if (!isCreator) return repfut(mess.owner)

function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return repfut(bang)
}
try {
repfut(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
repfut(String(e))
}
}

if (budy.startsWith('>')) {
if (!isOwner) return repfut(mess.owner)
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await repfut(evaled)
} catch (err) {
await repfut(String(err))
}
}

if (budy.startsWith('$')) {
if (!isOwner) return repfut(mess.owner)
require("child_process").exec(budy.slice(2), (err, stdout) => {
if (err) return repfut(`${err}`)
if (stdout) return repfut(stdout)
})
}

        }      
     } catch (err) {
     console.log(util.format(err))
     let e = String(err)
     conn.sendMessage(`${owner}@s.whatsapp.net`, { text: "err:" + util.format(e), 
     contextInfo:{
     forwardingScore: 5, 
     isForwarded: true
     }})
     }
     
     // Auto Clear Session System
function autoClearSession() {
    const sessionDir = `./${sessionName}`; // Sesuaikan dengan path session
    const clearInterval = 2 * 60 * 60 * 1000; // 2 jam dalam milidetik
    
    setInterval(async () => {
        try {
            const files = fs.readdirSync(sessionDir);
            const filteredFiles = files.filter(file => 
                file.startsWith('pre-key') ||
                file.startsWith('sender-key') ||
                file.startsWith('session-') ||
                file.startsWith('app-state')
            );

            if (filteredFiles.length === 0) return;

            console.log(chalk.yellow('[AUTO CLEAN] Starting auto session cleanup...'));
            
            filteredFiles.forEach(file => {
                fs.unlinkSync(path.join(sessionDir, file));
            });

            console.log(chalk.green(`[AUTO CLEAN] Removed ${filteredFiles.length} session files`));
        } catch (error) {
            console.error(chalk.red('[AUTO CLEAN ERROR]'), error);
        }
    }, clearInterval);
}

// Jalankan saat panel start
autoClearSession();
     
     } 
     let file = require.resolve(__filename)
     fs.watchFile(file, () => {
     fs.unwatchFile(file)
     console.log(chalk.redBright(`Update ${__filename}`))
     delete require.cache[file]
     require(file)
     })