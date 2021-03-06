let handler = async (m, { conn, participants, groupMetadata }) => {
const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './src/avatar_contact.png'
const { isBanned, welcome, detect, sWelcome, sBye, sPromote, sDemote, antiLink, antiLink2, modohorny, autosticker, audios, delete: del } = global.db.data.chats[m.chat]
const groupAdmins = participants.filter(p => p.admin)
const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n')
const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
let text = `${groupMetadata.subject}

${groupMetadata.desc?.toString() || 'ππΈπ½ π³π΄ππ²ππΈπΏπ²πΈπΎπ½'}

*π°π³πΌπΈπ½π π³π΄π» πΆπππΏπΎ:*
${listAdmin}

*ππΎππ°π» π³π΄ πΏπ°πππΈπ²πΈπΏπ°π½ππ΄π:*
${participants.length} Participantes
`.trim()
conn.sendFile(m.chat, pp, 'error.jpg', text, m, false, { mentions: [...groupAdmins.map(v => v.id), owner] })
}
handler.help = ['infogrup']
handler.tags = ['group']
handler.command = /^(infogrupo|reglas|info(gro?up|gc))$/i
handler.group = true
export default handler
