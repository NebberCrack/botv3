import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = './media/no-chupalo.mp3'
conn.sendFile(m.chat, vn, 'no-chupalo.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /No chupala|no chupala|No chupalo|no chupalo|no quiero|obligame|oblígame/i
handler.command = new RegExp
handler.fail = null
handler.exp = 100
export default handler
