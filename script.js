let count = 5;
let sections = document.querySelectorAll(".card");
let current = 0;

const countdown = setInterval(() => {
  document.getElementById("countdown").innerText = count;
  count--;
  if (count < 0) {
    clearInterval(countdown);
    document.getElementById("opening").style.display = "none";
    sections[0].classList.remove("hidden");
    startLove();
    document.getElementById("music").play();
  }
}, 1000);

function nextSection() {
  sections[current].classList.add("hidden");
  current++;
  if (sections[current]) {
    sections[current].classList.remove("hidden");
  }
}

function startLove() {
  setInterval(() => {
    const love = document.createElement("div");
    love.className = "love";
    love.innerHTML = Math.random() > 0.5 ? "❤" : "🌸";
    love.style.left = Math.random() * 100 + "vw";
    love.style.fontSize = Math.random() * 20 + 20 + "px";
    document.body.appendChild(love);
    setTimeout(() => love.remove(), 7000);
  }, 400);
}
