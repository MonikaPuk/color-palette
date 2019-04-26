let colorWheel;
let defaultColor = "#BA14D3";
let boxOne = document.querySelector("#box1");
let hexOne = document.querySelector(".hex1");
let hexTwo = document.querySelector(".hex2");
let hexThree = document.querySelector(".hex3");
let hexFour = document.querySelector(".hex4");
let hexFive = document.querySelector(".hex5");
let boxTwo = document.querySelector("#box2");
let boxThree = document.querySelector("#box3");
let boxFour = document.querySelector("#box4");
let boxFive = document.querySelector("#box5");


let colorRGB = 'rgb(123, 21, 211)';
let colorHSL = rgbToHsl(colorRGB);
let currentHarmony;

window.addEventListener("load", init);

function init() {
    colorWheel = document.querySelector("#colorWheel");
    colorWheel.value = defaultColor;
    colorWheel.addEventListener("input", updateColor);
    updateColors();
    updateColor();

}

function updateColor(color) {
  let boxOne = document.querySelector("#box1");
    if (color === undefined){
      boxOne.style.backgroundColor = '#BA14D3';
      // hexOne.innerHTML = boxOne.style.backgroundColor;
      // console.log(hexOne)
    }
    else{
      boxOne.style.backgroundColor = color.target.value;
      hexOne.innerHTML = boxOne.style.backgroundColor;
    }
    hexOne.innerHTML = colorWheel.value;
    colorRGB = boxOne.style.backgroundColor;
    colorHSL = rgbToHsl(colorRGB);

    updateColors();
}

function changeHarmony(option){
  currentHarmony = option.value;
  updateColors();
 
}

function updateColors() {
  if (currentHarmony === "Analogous"){
    calculateAn(colorHSL);
  }
  else if (currentHarmony === "Monochromatic"){
    calculateMon(colorHSL);
  }
  else if (currentHarmony === "Triad"){
    calculateTr(colorHSL);
  }
  else if(currentHarmony === "Complementary"){
    calculateCompl(colorHSL);
  }
  else if(currentHarmony === "Compound"){
    calculateCompo(colorHSL);
  }
  else{
    calculateShad(colorHSL);
  }
}

function displayColorValues(colorOne, colorTwo, colorThree, colorFour, colorFive){
  hexOne.innerHTML = colorOne;
  hexTwo.innerHTML = colorTwo;
  hexThree.innerHTML = colorThree;
  hexFour.innerHTML = colorFour;
  hexFive.innerHTML = colorFive;

}

function calculateAn(colorHSL){
  boxTwo.style.background = `hsl(${colorHSL.h + 20}, ${colorHSL.s}%, ${colorHSL.l}%)`;
  boxThree.style.background = `hsl(${colorHSL.h + 40}, ${colorHSL.s}%, ${colorHSL.l}%)`;
  boxFour.style.background = `hsl(${colorHSL.h + 60}, ${colorHSL.s}%, ${colorHSL.l}%)`;
  boxFive.style.background = `hsl(${colorHSL.h + 80}, ${colorHSL.s}%, ${colorHSL.l}%)`;
  // boxTwo.style.background = `hsl(${}, ${}%, ${}%)`
  displayColorValues(boxOne.style.background, boxTwo.style.background, boxThree.style.background, boxFour.style.background, boxFive.style.background )
}

function calculateMon(colorHSL) {
  boxTwo.style.background = `hsl(${colorHSL.h}, ${colorHSL.s}%, ${colorHSL.l + 15}%)`;
  boxThree.style.background = `hsl(${colorHSL.h}, ${colorHSL.s}%, ${colorHSL.l + 10}%)`;
  boxFour.style.background = `hsl(${colorHSL.h}, ${colorHSL.s}%, ${colorHSL.l + 30}%)`;
  boxFive.style.background = `hsl(${colorHSL.h}, ${colorHSL.s}%, ${colorHSL.l + 20}%)`;
  displayColorValues(boxOne.style.background, boxTwo.style.background, boxThree.style.background, boxFour.style.background, boxFive.style.background )

}

function calculateTr(colorHSL) {
  boxTwo.style.background = `hsl(${colorHSL.h + 60}, ${colorHSL.s}%, ${colorHSL.l}%)`;
  boxThree.style.background = `hsl(${colorHSL.h + 180}, ${colorHSL.s}%, ${colorHSL.l}%)`;
  boxFour.style.background = `hsl(${colorHSL.h + 170 }, ${colorHSL.s + 20 }%, ${colorHSL.l}%)`;
  boxFive.style.background = `hsl(${colorHSL.h + 70}, ${colorHSL.s + 10 }%, ${colorHSL.l + 10}%)`;
  displayColorValues(boxOne.style.background, boxTwo.style.background, boxThree.style.background, boxFour.style.background, boxFive.style.background )

}

function calculateCompl(colorHSL) {
  boxTwo.style.background = `hsl(${colorHSL.h + 180}, ${colorHSL.s}%, ${colorHSL.l}%)`;
  boxThree.style.background = `hsl(${colorHSL.h + 145}, ${colorHSL.s + 10 }%, ${colorHSL.l}%)`;
  boxFour.style.background = `hsl(${colorHSL.h + 150 }, ${colorHSL.s + 20 }%, ${colorHSL.l}%)`;
  boxFive.style.background = `hsl(${colorHSL.h + 20}, ${colorHSL.s + 10 }%, ${colorHSL.l + 10}%)`;
  displayColorValues(boxOne.style.background, boxTwo.style.background, boxThree.style.background, boxFour.style.background, boxFive.style.background )

}

function calculateCompo(colorHSL){
  boxTwo.style.background = `hsl(${colorHSL.h + 20}, ${colorHSL.s}%, ${colorHSL.l}%)`;
  boxThree.style.background = `hsl(${colorHSL.h + 40}, ${colorHSL.s}%, ${colorHSL.l}%)`;
  boxFour.style.background = `hsl(${colorHSL.h + 180}, ${colorHSL.s}%, ${colorHSL.l + 10}%)`;
  boxFive.style.background = `hsl(${colorHSL.h + 180}, ${colorHSL.s + 20}%, ${colorHSL.l}%)`;
  displayColorValues(boxOne.style.background, boxTwo.style.background, boxThree.style.background, boxFour.style.background, boxFive.style.background )

}

function calculateShad(colorHSL){
  boxTwo.style.background = `hsl(${colorHSL.h}, ${colorHSL.s  + 10}%, ${colorHSL.l}%)`;
  boxThree.style.background = `hsl(${colorHSL.h}, ${colorHSL.s - 40}%, ${colorHSL.l}%)`;
  boxFour.style.background = `hsl(${colorHSL.h }, ${colorHSL.s - 60}%, ${colorHSL.l}%)`;
  boxFive.style.background = `hsl(${colorHSL.h}, ${colorHSL.s + 100}%, ${colorHSL.l}%)`;
  displayColorValues(boxOne.style.background, boxTwo.style.background, boxThree.style.background, boxFour.style.background, boxFive.style.background )

}

function rgbToHsl(colorRGB) {
  let rgbValue = colorRGB.replace("rgb(", "").replace(")", "").replace(/ /gi, "").split(",");
  rgbValue = rgbValue.map(element => {
  return element = parseInt(element);
  });

  let [r, g, b] = rgbValue;

  r /= 255;
  g /= 255;
  b /= 255;

  let h, s, l;

  const min = Math.min(r,g, b);
  const max = Math.max(r,g,b);

  if( max === min ) {
    h = 0;
  } else
  if (max === r) {
    h = 60 * (0 + (g - b) / (max - min) );
  } else
  if (max === g) {
    h = 60 * (2 + (b - r) / (max - min) );
  } else
  if (max === b) {
    h = 60 * (4 + (r - g) / (max - min) );
  }

  if (h < 0) {h = h + 360; }

  l = (min + max) / 2;

  if (max === 0 || min === 1 ) {
    s = 0;
  } else {
    s = (max - l) / ( Math.min(l,1-l));
  }
  // multiply s and l by 100 to get the value in percent, rather than [0,1]
  s *= 100;
  l *= 100;

  return{
    h: h,
    s: s,
    l: l,
  }

}


