if (document.documentElement.clientWidth > 650) {
  const e = document.getElementById("text-profile"),
    t = ["Software Engineer II", "FICO (Fair Isaac Corporation)"];
  let n = 0;
  function typeText() {
    t[n] || (n = 0);
    const o = t[n];
    let r = "",
      l = 0,
      c = setInterval(() => {
        o[l]
          ? ((r += o[l++]), (e.innerHTML = r))
          : (n++,
            setTimeout(() => {
              deleteText(r);
            }, 1200),
            clearInterval(c));
      }, 90);
  }
  function deleteText(t) {
    let n = setInterval(() => {
      0 === t.length
        ? (setTimeout(() => {
            typeText();
          }, 150),
          clearInterval(n))
        : ((t = t.split("")).pop(), (t = t.join("")), (e.innerHTML = t));
    }, 25);
  }
  typeText();
}

const navToggle = () => {
  const burger = document.getElementById("burger");
  const dropdown = document.querySelector(".dropdown-content");
  if (!burger || !dropdown) return;

  burger.addEventListener("click", () => {
    dropdown.classList.toggle("dropdown-content-active");
    const isBurger = burger.getAttribute("src") === "img/burger.png";
    burger.setAttribute("src", isBurger ? "img/collapse.png" : "img/burger.png");
  });

  dropdown.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      dropdown.classList.remove("dropdown-content-active");
      burger.setAttribute("src", "img/burger.png");
    });
  });
};
navToggle();
