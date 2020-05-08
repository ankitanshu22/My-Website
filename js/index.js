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

const navToggle = () => {
  var burger = document.getElementById("burger");
  var nav = document.querySelector(".dropdown-content");
  var img1 = "https://ankitanshuswaroop.com/img/burger.png",
    img2 = "https://ankitanshuswaroop.com/img/collapse.png";
  burger.addEventListener("click", () => {
    nav.classList.toggle("dropdown-content-active");
    if (burger.src === img1) {
      burger.src = img2;
    } else {
      burger.src = img1;
    }
  });
};

navToggle();

const alertUnderDev = () => {
  var links = document.querySelectorAll(".card-link");

  for (const link of links) {
    link.addEventListener("click", () => {
      alert("The Product is Under Development!");
    });
  }
};

alertUnderDev();
