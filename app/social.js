const youtube = document.querySelector('.youtube');
const tiktok = document.querySelector('.tiktok');
const instagram = document.querySelector('.instagram');
const discord = document.querySelector('.discord');

// YouTube
youtube.addEventListener('mouseenter', () => {
    tiktok.style.opacity = '0.5';
    instagram.style.opacity = '0.5';
    discord.style.opacity = '0.5';

    tiktok.style.height = '40px';
    instagram.style.height = '40px';
    discord.style.height = '40px';
  });
  
  youtube.addEventListener('mouseleave', () => {
    tiktok.style.opacity = '1';
    instagram.style.opacity = '1';
    discord.style.opacity = '1';

    tiktok.style.height = '45px';
    instagram.style.height = '45px';
    discord.style.height = '45px';
  });

// TikTok
tiktok.addEventListener('mouseenter', () => {
    youtube.style.opacity = '0.5';
    instagram.style.opacity = '0.5';
    discord.style.opacity = '0.5';

    youtube.style.height = '40px';
    instagram.style.height = '40px';
    discord.style.height = '40px';
  });
  
  tiktok.addEventListener('mouseleave', () => {
    youtube.style.opacity = '1';
    instagram.style.opacity = '1';
    discord.style.opacity = '1';

    youtube.style.height = '45px';
    instagram.style.height = '45px';
    discord.style.height = '45px';
  });

// Instagram
instagram.addEventListener('mouseenter', () => {
    youtube.style.opacity = '0.5';
    tiktok.style.opacity = '0.5';
    discord.style.opacity = '0.5';

    youtube.style.height = '40px';
    tiktok.style.height = '40px';
    discord.style.height = '40px';
  });
  
  instagram.addEventListener('mouseleave', () => {
    youtube.style.opacity = '1';
    tiktok.style.opacity = '1';
    discord.style.opacity = '1';

    youtube.style.height = '45px';
    tiktok.style.height = '45px';
    discord.style.height = '45px';
  });

// Discord
discord.addEventListener('mouseenter', () => {
    youtube.style.opacity = '0.5';
    tiktok.style.opacity = '0.5';
    instagram.style.opacity = '0.5';

    youtube.style.height = '40px';
    tiktok.style.height = '40px';
    instagram.style.height = '40px';
  });
  
  discord.addEventListener('mouseleave', () => {
    youtube.style.opacity = '1';
    tiktok.style.opacity = '1';
    instagram.style.opacity = '1';

    youtube.style.height = '45px';
    tiktok.style.height = '45px';
    instagram.style.height = '45px';
  });