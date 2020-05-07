if (document.documentElement.clientWidth > 650) {
  const mHTML = document.getElementById("text-profile"),
    text = ["Web Developer", "UI/UX Designer"];
  let currentText = 0;
  function typeText() {
    if (!text[currentText]) {
      currentText = 0;
    }
    const currentStr = text[currentText];
    currentStr.split();
    let part = "";
    let currentLetter = 0;
    let int1 = setInterval(() => {
      if (!currentStr[currentLetter]) {
        currentText++;
        setTimeout(() => {
          deleteText(part);
        }, 700);
        clearInterval(int1);
      } else {
        part += currentStr[currentLetter++];
        mHTML.innerHTML = part;
      }
    }, 100);
  }
  function deleteText(str) {
    let int = setInterval(() => {
      if (str.length === 0) {
        setTimeout(() => {
          typeText();
        }, 100);
        clearInterval(int);
      } else {
        str = str.split("");
        str.pop();
        str = str.join("");
        mHTML.innerHTML = str;
      }
    }, 25);
  }
  typeText();
}

// $('ul li').on('click', function () {
//  $('li').removeClass('active');
//  $(this).addClass('active');
// });

const navSlide = () => {
  const burger = document.querySelector(".burger");
  const burger2 = document.querySelector(".burger-2");
  const burger3 = document.querySelector(".burger-3");
  const burger4 = document.querySelector(".burger-4");
  const burger5 = document.querySelector(".burger-5");
  const nav = document.querySelector(".nav-links");
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
  });
  burger2.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
  });
  burger3.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
  });
  burger4.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
  });
  burger5.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
  });
};

navSlide();
