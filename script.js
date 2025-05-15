function rollDice(color) {
  const result = Math.floor(Math.random() * 6) + 1;
  document.getElementById(`${color}-result`).innerText = `🎲 ${result}`;
}
