import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = './media/pensamientos-sexuales.mp3'
conn.sendFile(m.chat, vn, 'pensamientos-sexuales.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /Andan cogiendo|andan cogiendo|culear|coito/i
handler.command = new RegExp
handler.fail = null
handler.exp = 100
export default handler
