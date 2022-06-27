import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = './media/te-quiero.mp3'
conn.sendFile(m.chat, vn, 'te-quiero.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /Te quiero|te quiero mucho|tqm|Tqm/i
handler.command = new RegExp
handler.fail = null
handler.exp = 100
export default handler
