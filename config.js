const chalk = require("chalk")
const fs = require("fs")

  global.d = new Date()
  global.calender = d.toLocaleDateString('id')

  //===========> OWNER <==============
  global.owner = ['628xxxxxxxx'] // ganti nomor lu
  global.namaowner = 'Zann'
  global.namabot = 'Rem Bot'
  global.email = 'raazan.muhammad.ikhsan@gmail.com'
  global.website = 'zannweb.my.id'
  global.idsaluran = {
   id1: "-",
   id2: "-"
  }
  global.linkch = "-"
  //===========> STIKER <==============
  global.packname = "Di buat oleh"
  global.author = "Rem Bot"
  //===========> START <==============
  global.start = {
  nomorbot: "6283xxxxxxxx", // nomor bot
  customcode: "ZANNBOTT", // minimal kata 8
  pairing: true
  }
  //===========> MESS <==============
  global.mess = { //do not replace
    grup: 'ini fitur khusus grup bang!!',
    owner: 'lu siapa anjir, ini khusus owner gw!',
    premium: 'lu bukan user premium!',
    ban: `*BANNED*\n\nNomor anda telah di ban sekarang anda tidak bisa menggunakan bot ini lagi.`,
    done: 'Done bang',
    wait: 'Tunggu Bang...'
    }
  //===========> SETTING <==============
  global.sifat = `nama kamu adalah zann AI, dan kamu di ciptakan untuk melakukan tugaskan yang diberikan oleh orang , dan kamu di di buat oleh Razan, dan kamu harus menjawab dengan bahasa Indonesia dan mudah di pahami.`
  global.prefa = ['','/','.',',','🐤','🗿']
  global.sessionName = "Zann" // jangan di ubah
  global.foto = fs.readFileSync('./systems/media/rem.png')
  global.menu = fs.readFileSync('./systems/media/menu.png')
//===========> AKUN PAY <==============
global.gmailSaweria = "-" // gmail saweria
global.passwdSaweria = "-" // sandi saweria
global.pesanSaweria = "-" // pesan buat donasi
global.nominalSaweria = 1000 // nominal mau brp di donasi, minimal 1000 sampe 50000 kalo gak salah

let file = require.resolve(__filename)
     fs.watchFile(file, () => {
	 fs.unwatchFile(file)
	 console.log(chalk.redBright(`Update'${__filename}'`))
   	 delete require.cache[file]
	 require(file)
     })