let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Indosat Ooredoo [08882611841]
╰────

╭─「 Donasi • Non Pulsa 」
│ • Gopay, OVO, Dana [08882611841]
│ • https://saweria.co/irwanxyans
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
