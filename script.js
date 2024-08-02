const cityName = [
  "뉴욕",
  "베이징",
  "파리",
  "시드니",
  "카이로",
  "부에노스아이레스",
];
const header2 = document.querySelector(".header2");

function deleteText(time) {
  const text = header2.innerHTML;
  let i = text.length;
  const timePerLetter = time / i;

  const interval = setInterval(function () {
    i -= 1;
    if (i) {
      header2.innerHTML = text.slice(0, i);
    } else {
      header2.innerHTML = "　"; // 전각 공백
    }
  }, timePerLetter);
  setTimeout(function () {
    clearTimeout(interval);
  }, time + 10);
}

function createText(text, time) {
  let i = 0;
  const timePerLetter = time / text.length;

  const interval = setInterval(function () {
    i += 1;
    header2.innerHTML = text.slice(0, i);
  }, timePerLetter);
  setTimeout(function () {
    clearTimeout(interval);
  }, time + 10);
}

let i = 0;
setInterval(function () {
  deleteText(600);
  i = (i + 1) % 5;
  setTimeout(function () {
    createText(cityName[i], 600);
  }, 815);
}, 3000);
