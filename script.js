
onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
};
document.addEventListener("DOMContentLoaded", () => {
  const msgs = document.querySelectorAll(".msg");

  let index = 0;

  // Hide all messages initially
  msgs.forEach(m => {
    m.style.opacity = "0";
    m.style.transform = "translateY(20px)";
  });

  function showNext() {
    const msg = msgs[index];

    // reset position
    msg.style.transition = "none";
    msg.style.opacity = "0";
    msg.style.transform = "translateY(20px)";

    // force reflow (important for animation restart)
    void msg.offsetWidth;

    // animate in
    msg.style.transition = "all 0.8s ease";
    msg.style.opacity = "1";
    msg.style.transform = "translateY(-20px)";

    // fade out after delay
    setTimeout(() => {
      msg.style.opacity = "0";
      msg.style.transform = "translateY(-60px)";
    }, 2000);

    // next message
    index = (index + 1) % msgs.length;
  }

  // start loop
  showNext();
  setInterval(showNext, 2800);
});
const bgMusic   = document.getElementById('bgMusic');
const musicBtn  = document.getElementById('musicBtn');
musicBtn.addEventListener('click', () => {
  if (bgMusic.paused) {
    bgMusic.play().catch(() => {}); /* ignore autoplay policy errors */
    musicBtn.innerHTML = '❚❚';
    musicBtn.classList.add('playing');
  } else {
    bgMusic.pause();
    musicBtn.innerHTML = '♫';
    musicBtn.classList.remove('playing');
  }
});