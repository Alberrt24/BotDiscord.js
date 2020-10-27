module.exports = (client) => {
    const channelId = '708137417697132560' // Todes 
    const targetChannelId = '737065449929572452' // Primer canal
    const targetChanerlDo = '745676172674859089' // Segundo canal
  
    client.on('guildMemberAdd', (member) => {
      const message = `Bienvenide <@${member.id}> Por favor lee los canales ${member.guild.channels.cache.get(targetChannelId).toString()},  ${member.guild.channels.cache.get(targetChanerlDo).toString()} para evitar inconvenientes`
      const channel = member.guild.channels.cache.get(channelId)
      channel.send(message)
    })
  }