const minecraftProtocol = require('minecraft-protocol');

// Configura los datos de conexión a tu servidor
const serverOptions = {
  host: 'tu.servidor.com', // Reemplaza con la dirección IP o nombre de dominio de tu servidor
  port: 25575, // Reemplaza con el puerto RCON de tu servidor
  enableRcon: true,
  rconPassword: 'tuContraseñaRCON' // Reemplaza con la contraseña RCON de tu servidor
};

// Conectarse al servidor
const client = minecraftProtocol.createClient(serverOptions);

// Manejar eventos de conexión
client.on('connect', () => {
  console.log('Conectado al servidor de Minecraft');
});

client.on('disconnect', () => {
  console.log('Desconectado del servidor de Minecraft');
});

// Enviar comando para obtener los jugadores conectados
client.on('state', (newState) => {
  if (newState === minecraftProtocol.states.PLAY) {
    client.write('chat', { message: '/list' });
  }
});

// Manejar respuestas del servidor
client.on('chat', (packet) => {
  const jsonMsg = JSON.parse(packet.message);
  if (jsonMsg.translate === 'commands.players.list') {
    const players = jsonMsg.with[0].extra.map((player) => player.text);
    console.log('Jugadores conectados:', players);
  }
});