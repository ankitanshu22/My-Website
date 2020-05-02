const mHTML = document.getElementById('text-profile'),
 text = [
  'Web Developer',
  'Web Designer',
  'UI/UX Designer'
 ];
let currentText = 0;
function typeText() {
 if (!text[currentText]) {
  currentText = 0;
 }
 const currentStr = text[currentText];
 currentStr.split();
 let part = '';
 let currentLetter = 0;
 let int1 = setInterval(() => {
  if (!currentStr[currentLetter]) {
   currentText++;
   setTimeout(() => {
    deleteText(part);
   }, 100);
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
   str = str.split('');
   str.pop();
   str = str.join('');
   mHTML.innerHTML = str;
  }
 }, 100);
}
typeText();