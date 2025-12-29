const lines = [
  "If you were a fruit, you'd be a fine-apple 🍍",
  "Is your name Google? Because you have everything I’m searching for 😘",
  "Are you a magician? Whenever I look at you, everyone else disappears 💫",
  "Do you believe in love at first click? 💻❤️",
  "I must be a snowflake, because I’ve fallen for you ❄️💗"
];

const button = document.getElementById("flirtBtn");
const messageBox = document.getElementById("messageBox");

button.addEventListener("click", () => {
  const random = lines[Math.floor(Math.random() * lines.length)];
  messageBox.innerText = random;
});

