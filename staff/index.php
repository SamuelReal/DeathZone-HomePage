<?php include('../php/db.php'); ?>

<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DeathZone | Staff del servidor</title>
    <link rel="icon" type="image/x-icon" href="/src/images/favicon.ico">
    <meta name="description" content="Conoce a nuestro increíble Staff de DeathZone.">

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">

    <link rel="stylesheet" href="/styles/main.css">

    <script src="https://cdn.jsdelivr.net/gh/leonardosnt/mc-player-counter/dist/mc-player-counter.min.js"></script>

    <!-- Fonts -->
    <link href="https://fonts.cdnfonts.com/css/minecraft-4" rel="stylesheet">
</head>

<body>
    <header class="navbar">
        <div class="shadow-txt nav-info">
            Jugadores conectados: <span>+</span><span data-playercounter-ip="play.deathzone.net"></span>
        </div>
        <div class="play-btn shadow-div" onclick="copyServerIp()" data-bs-toggle="modal" data-bs-target="#gameModal">
            <img src="/src/images/steve-head.png" class="steve-head" alt="Minecraft">
            ¡Jugar ahora!
        </div>
        <div class="shadow-txt nav-info">
            Estado del servidor:
            <span class="online">En línea</span>
        </div>
    </header>

    <div class="container logo">
        <a href="/">
            <img src="/src/images/deathzone-logo.png" alt="servidor de minecraft" class="logo-img">
        </a>
    </div>

    <div class="container shadow-div">
        <div class="info-div">
            <div class="info-msg shadow-txt">
                <b>
                    high-staff | deathzone network<br>
                    ¿quieres ser staff
                    <a href="#link" target="_blank" class="link">
                        » postúlate aquí «
                    </a>
                </b>
            </div>
        </div>
    </div>

    <div class="container options-menu">
        <div class="row">
            <?php foreach ($db->getStaffs() as $staff) { ?>
                <div class="col-lg-3 col-md-6 col-sm-12 option">
                    <div class="option-item shadow-div">
                        <img src="http://cravatar.eu/head/<?= $staff['nickname'] ?>.png" class="option-image">
                        <div class="option-subtxt">
                            <?= $staff['nickname'] ?>
                        </div>
                        <div class="option-ranktxt">
                            <?= $staff['role'] ?>
                        </div>
                    </div>
                </div>
            <?php } ?>
        </div>
    </div>

    <div class="container shadow-div back-div">
        <div class="info-div">
            <div class="info-msg shadow-txt">
                <b>
                    <a href="/" class="back-link">regresar al menú principal</a>
                </b>
            </div>
        </div>
    </div>

    <div class="footer">
        <img src="/src/images/minecraft.png" alt="minecraft edición java y bedrock" class="minecraft-img">

        <div class="social-menu">
            <a href="https://www.youtube.com/@DeathZoneNetwork/featured" target="_blank">
                <img src="/src/images/youtube-logo.svg" class="youtube" alt="canal de youtube oficial de DeathZone">
            </a>
            <a href="https://www.tiktok.com/@deathzone.net" target="_blank">
                <img src="/src/images/tiktok-logo.svg" class="tiktok" alt="cuenta de tiktok oficial de DeathZone">
            </a>
            <a href="https://www.instagram.com/deathzone_network/" target="_blank">
                <img src="/src/images/instagram-logo.svg" class="instagram" alt="cuenta de instagram oficial de DeathZone">
            </a>
            <a href="https://discord.com/invite/mGBVPfhjYD" target="_blank">
                <img src="/src/images/discord-logo.svg" class="discord" alt="servidor de discord oficial de DeathZone">
            </a>
        </div>
        <div class="copyright">
            copyright &copy; <span id="showedYear">-</span> DeathZone Network
        </div>
    </div>

    <!-- Modal -->
    <div class="modal modal-lg fade" id="gameModal" tabindex="-1" aria-labelledby="gameModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="container modal-header">
                    <div class="row">
                        <div class="col-lg-12">
                            <img src="/src/images/check-icon.png" class="check-icon">
                            <p class="modal-title" id="gameModalLabel">servidor de minecraft | java & bedrock</p>
                        </div>
                    </div>
                </div>
                <div class="modal-body">
                    <p>
                        Únete a Minecraft Multijugador en DeathZone Network.
                    </p>

                    <p>
                        Se ha copiado automáticamente la dirección de acceso del servidor para que la agregues
                        rápidamente a tu lista de servidores en Minecraft. ¡Disfruta de la aventura!
                    </p>

                    <p class="modal-title">¿Cómo entrar al servidor desde la web en 1 minuto?</p>

                    <p>
                        Primero, entra a tu Launcher de Minecraft e inicia el juego.<br>
                        Segundo, selecciona modo "MULTIJUGADOR" y luego "AGREGAR SERVIDOR".<br>
                        Por último, colocas la dirección del servidor "<span id="showedIp">deathzone.net</span>".
                    </p>

                    <iframe width="380" height="195" src="https://www.youtube.com/embed/YdPx2zaN5iU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div class="modal-footer">
                    <a type="button" class="btn btn-danger" href="https://www.youtube.com/watch?v=YdPx2zaN5iU" target="_blank">Ver tutorial</a>
                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cerrar mensaje</button>
                </div>
            </div>
        </div>
    </div>

    <script src="/app/social.js"></script>
    <script src="/app/clipboard.js"></script>
    <script src="/app/copyright-date.js"></script>
    <script defer src="https://app.embed.im/snow.js"></script>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>
</body>

</html>