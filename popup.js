document.getElementById('saveButton').addEventListener('click', () => {
  const chance = document.getElementById('chance').value;
  chrome.storage.sync.set({rickrollChance: chance}, () => {
    alert('Chance saved!');
  });
});
