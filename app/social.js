const youtube = document.querySelector('.youtube');
const tiktok = document.querySelector('.tiktok');
const instagram = document.querySelector('.instagram');
const discord = document.querySelector('.discord');

// YouTube
youtube.addEventListener('mouseenter', () => {
    tiktok.style.opacity = '0.5';
    instagram.style.opacity = '0.5';
    discord.style.opacity = '0.5';

    tiktok.style.height = '30px';
    instagram.style.height = '30px';
    discord.style.height = '30px';
  });
  
  youtube.addEventListener('mouseleave', () => {
    tiktok.style.opacity = '1';
    instagram.style.opacity = '1';
    discord.style.opacity = '1';

    tiktok.style.height = '35px';
    instagram.style.height = '35px';
    discord.style.height = '35px';
  });

// TikTok
tiktok.addEventListener('mouseenter', () => {
    youtube.style.opacity = '0.5';
    instagram.style.opacity = '0.5';
    discord.style.opacity = '0.5';

    youtube.style.height = '30px';
    instagram.style.height = '30px';
    discord.style.height = '30px';
  });
  
  tiktok.addEventListener('mouseleave', () => {
    youtube.style.opacity = '1';
    instagram.style.opacity = '1';
    discord.style.opacity = '1';

    youtube.style.height = '35px';
    instagram.style.height = '35px';
    discord.style.height = '35px';
  });

// Instagram
instagram.addEventListener('mouseenter', () => {
    youtube.style.opacity = '0.5';
    tiktok.style.opacity = '0.5';
    discord.style.opacity = '0.5';

    youtube.style.height = '30px';
    tiktok.style.height = '30px';
    discord.style.height = '30px';
  });
  
  instagram.addEventListener('mouseleave', () => {
    youtube.style.opacity = '1';
    tiktok.style.opacity = '1';
    discord.style.opacity = '1';

    youtube.style.height = '35px';
    tiktok.style.height = '35px';
    discord.style.height = '35px';
  });

// Discord
discord.addEventListener('mouseenter', () => {
    youtube.style.opacity = '0.5';
    tiktok.style.opacity = '0.5';
    instagram.style.opacity = '0.5';

    youtube.style.height = '30px';
    tiktok.style.height = '30px';
    instagram.style.height = '30px';
  });
  
  discord.addEventListener('mouseleave', () => {
    youtube.style.opacity = '1';
    tiktok.style.opacity = '1';
    instagram.style.opacity = '1';

    youtube.style.height = '35px';
    tiktok.style.height = '35px';
    instagram.style.height = '35px';
  });