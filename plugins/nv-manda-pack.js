import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = './media/manda-pack.mp3'
conn.sendFile(m.chat, vn, 'manda-pack.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /Manda pack|manda pack|manden packs|Manden pack|manda nudez/i
handler.command = new RegExp
handler.fail = null
handler.exp = 100
export default handler
