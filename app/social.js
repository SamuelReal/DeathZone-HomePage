const youtube = document.querySelector('.youtube');
const tiktok = document.querySelector('.tiktok');
const instagram = document.querySelector('.instagram');
const discord = document.querySelector('.discord');

// YouTube
youtube.addEventListener('mouseenter', () => {
    tiktok.style.opacity = '0.5';
    instagram.style.opacity = '0.5';
    discord.style.opacity = '0.5';

    tiktok.style.transform = 'scale(0.9)';
    instagram.style.transform = 'scale(0.9)';
    discord.style.transform = 'scale(0.9)';
  });
  
  youtube.addEventListener('mouseleave', () => {
    tiktok.style.opacity = '1';
    instagram.style.opacity = '1';
    discord.style.opacity = '1';

    tiktok.style.transform = 'scale(1)';
    instagram.style.transform = 'scale(1)';
    discord.style.transform = 'scale(1)';
  });

// TikTok
tiktok.addEventListener('mouseenter', () => {
    youtube.style.opacity = '0.5';
    instagram.style.opacity = '0.5';
    discord.style.opacity = '0.5';

    youtube.style.transform = 'scale(0.9)';
    instagram.style.transform = 'scale(0.9)';
    discord.style.transform = 'scale(0.9)';
  });
  
  tiktok.addEventListener('mouseleave', () => {
    youtube.style.opacity = '1';
    instagram.style.opacity = '1';
    discord.style.opacity = '1';

    youtube.style.transform = 'scale(1)';
    instagram.style.transform = 'scale(1)';
    discord.style.transform = 'scale(1)';
  });

// Instagram
instagram.addEventListener('mouseenter', () => {
    youtube.style.opacity = '0.5';
    tiktok.style.opacity = '0.5';
    discord.style.opacity = '0.5';

    youtube.style.transform = 'scale(0.9)';
    tiktok.style.transform = 'scale(0.9)';
    discord.style.transform = 'scale(0.9)';
  });
  
  instagram.addEventListener('mouseleave', () => {
    youtube.style.opacity = '1';
    tiktok.style.opacity = '1';
    discord.style.opacity = '1';

    youtube.style.transform = 'scale(1)';
    tiktok.style.transform = 'scale(1)';
    discord.style.transform = 'scale(1)';
  });

// Discord
discord.addEventListener('mouseenter', () => {
    youtube.style.opacity = '0.5';
    tiktok.style.opacity = '0.5';
    instagram.style.opacity = '0.5';

    youtube.style.transform = 'scale(0.9)';
    tiktok.style.transform = 'scale(0.9)';
    instagram.style.transform = 'scale(0.9)';
  });
  
  discord.addEventListener('mouseleave', () => {
    youtube.style.opacity = '1';
    tiktok.style.opacity = '1';
    instagram.style.opacity = '1';

    youtube.style.transform = 'scale(1)';
    tiktok.style.transform = 'scale(1)';
    instagram.style.transform = 'scale(1)';
  });