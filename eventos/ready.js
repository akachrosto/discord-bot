module.exports = (client) => {
  
  client.user.setPresence({
    activity: {
      name: 'a la pared.',
      type: "WATCHING"
    },
    status: "dnd"
  });
}