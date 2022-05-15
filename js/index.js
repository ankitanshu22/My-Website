if (document.documentElement.clientWidth > 650) {
  const e = document.getElementById("text-profile"),
    t = ["Software Engineer", "UI/UX Designer"];
  let n = 0;
  function typeText() {
    t[n] || (n = 0);
    const o = t[n];
    o.split();
    let r = "",
      l = 0,
      c = setInterval(() => {
        o[l]
          ? ((r += o[l++]), (e.innerHTML = r))
          : (n++,
            setTimeout(() => {
              deleteText(r);
            }, 700),
            clearInterval(c));
      }, 100);
  }
  function deleteText(t) {
    let n = setInterval(() => {
      0 === t.length
        ? (setTimeout(() => {
            typeText();
          }, 100),
          clearInterval(n))
        : ((t = t.split("")).pop(), (t = t.join("")), (e.innerHTML = t));
    }, 25);
  }
  typeText();
}
const navToggle = () => {
  var e = document.getElementById("burger"),
    t = document.querySelector(".dropdown-content"),
    n = "https://ankitanshuswaroop.com/img/burger.png";
  e.addEventListener("click", () => {
    t.classList.toggle("dropdown-content-active"),
      e.src === n
        ? (e.src = "https://ankitanshuswaroop.com/img/collapse.png")
        : (e.src = n);
  });
};
navToggle();
