function copyServerIp() {
    if (window.innerWidth < 1000) {
        serverIp = "bedrock.deathzone.net";
    } else {
        serverIp = "play.deathzone.net";
    }
  
    navigator.clipboard.writeText(serverIp)
      .then(() => {
        console.log("Texto copiado al portapapeles: " + serverIp);
      });
  }