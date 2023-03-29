 ////////////////////COVERTER///////////////////////////
var select = document.querySelectorAll(".currency"),
  input_currency = document.getElementById("input_currency"),
  output_currency = document.getElementById("output_currency");

const host = "api.frankfurter.app";
fetch(`https://${host}/currencies`)
  .then((resp) => resp.json())
  .then((data) => {
    const entries = Object.entries(data);
    //   console.log(entries);
    //   alert(`10 GBP = ${data.rates.USD} USD`);
    for (i = 0; i < entries.length; i++) {
      select[0].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]}</option>`;
      select[1].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]}</option>`;
    }
  });

function converter() {
  var input_currency_val = input_currency.value;
  if (select[0].value != select[1].value) {
    // alert('Right')
    const host = "api.frankfurter.app";
    fetch(
      `https://${host}/latest?amount=${input_currency_val}&from=${select[0].value}&to=${select[1].value}`
    )
      .then((val) => val.json())
      .then((val) => {
        output_currency.value = Object.values(val.rates)[0];
        //alert(`10 GBP = ${data.rates.USD} USD`);
      });
  } else {
    alert("Please select two different currency");
  }
}

/* CHANGING TEXT*/
// NIGERIA
let allTexts = ["Instant delivery", "Card direct to account", "Most favorable exchange rate"];
let changeText = document.querySelector("#dTextNig");
let n = 0;
let currentText = allTexts[n];
changeText.innerHTML = currentText;

setInterval(() => {
  if (n < allTexts.length - 1) {
    n++;
  } else {
    n = 0;
  }
  currentText = allTexts[n];
  changeText.innerHTML = currentText;
}, 3000);
// GHANA
let allGTexts = ["Instant delivery", "Most favorable exchange rate", "Card direct to account"];
let changeGText = document.querySelector("#dTextGha");
let g = 0;
let currentGText = allGTexts[g];
changeText.innerHTML = currentText;

setInterval(() => {
  if (g < allGTexts.length - 1) {
    g++;
  } else {
    g = 0;
  }
  currentGText = allTexts[g];
  changeGText.innerHTML = currentGText;
}, 3000);
// CAMEROON
let allCTexts = ["Card direct to account", "Most favorable exchange rate", "Instant delivery"];
let changeCText = document.querySelector("#dTextCam");
let c = 0;
let currentCText = allCTexts[c];
changeText.innerHTML = currentText;

setInterval(() => {
  if (c < allCTexts.length - 1) {
    c++;
  } else {
    c = 0;
  }
  currentCText = allTexts[c];
  changeCText.innerHTML = currentCText;
}, 3000);
// KENYA
let allKTexts = ["Instant delivery", "Card direct to account", "Most favorable exchange rate"];
let changeKText = document.querySelector("#dTextKen");
let k = 0;
let currentKText = allKTexts[k];
changeText.innerHTML = currentText;

setInterval(() => {
  if (k < allKTexts.length - 1) {
    k++;
  } else {
    k = 0;
  }
  currentKText = allTexts[k];
  changeKText.innerHTML = currentKText;
}, 3000);
// SOUTH AFRICA
let allSTexts = ["Instant delivery", "Card direct to account", "Most favorable exchange rate"];
let changeSText = document.querySelector("#dTextSou");
let s = 0;
let currentSText = allSTexts[s];
changeText.innerHTML = currentText;

setInterval(() => {
  if (s < allSTexts.length - 1) {
    s++;
  } else {
    s = 0;
  }
  currentSText = allTexts[s];
  changeSText.innerHTML = currentText;
}, 3000);
// GAMBIA
let allMTexts = ["Instant delivery", "Card direct to account", "Most favorable exchange rate"];
let changeMText = document.querySelector("#dTextGam");
let m = 0;
let currentMText = allMTexts[m];
changeText.innerHTML = currentText;

setInterval(() => {
  if (m < allMTexts.length - 1) {
    m++;
  } else {
    m = 0;
  }
  currentMText = allTexts[m];
  changeMText.innerHTML = currentMText;
}, 3000);
// ////////////////////////////////////////
