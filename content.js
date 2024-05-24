chrome.storage.sync.get('rickrollChance', (data) => {
  const chance = data.rickrollChance || 10;
  document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', (event) => {
      if (Math.random() * 100 < chance) {
        event.preventDefault();
        window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
      }
    });
  });
});
