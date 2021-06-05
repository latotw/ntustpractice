let box1 = document.getElementById("boxOne");
let box2 = document.getElementById("boxTwo");
let box3 = document.getElementById("boxThree");
let box4 = document.getElementById("boxFour");
let box5 = document.getElementById("boxFive");

box1.onclick = () => {
  box1.classList.add("active");
};
/*直接用Javascript替box1在html的架構加上另一個叫做active的class*/

box2.onclick = () => {
  box2.classList.add("active");
};

box3.onclick = () => {
  box3.classList.add("active");
};

box4.onclick = () => {
  box4.classList.add("active");
};

box5.onclick = () => {
  box5.classList.add("active");
};
