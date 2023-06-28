function copyServerIp() {
  if (window.innerWidth < 1000) {
      serverIp = "bedrock.deathzone.net";
  } else {
      serverIp = "play.deathzone.net";
  }

  navigator.clipboard.writeText(serverIp)
    .then(() => {
      ipField = document.getElementById("showedIp");
      ipField.textContent = serverIp;
    });
  }