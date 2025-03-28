import "./main.css";
import cBeanImg from "./images/cBean.jpg";


function createPage (headerText, paragraph1, paragraph2, paragraph3) {
const h1 = document.createElement("h1");
h1.textContent = headerText;
document.getElementById("content").appendChild(h1);

const para = document.createElement("div");
para.classList.add("para");
document.getElementById("content").appendChild(para);

const p1 = document.createElement("p");
p1.textContent = paragraph1;
para.appendChild(p1);

const p2 = document.createElement("p");
p2.textContent = paragraph2;
para.appendChild(p2);

const p3 = document.createElement("p");
p3.textContent = paragraph3;
para.appendChild(p3);

const backGroundImage = document.querySelector("body");
backGroundImage.style.backgroundImage = `url(${cBeanImg})`;
backGroundImage.style.backgroundSize = "cover";
backGroundImage.style.width = "100vw"; 
backGroundImage.style.height = "100vh";

};

export default createPage;


