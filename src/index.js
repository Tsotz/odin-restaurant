import "./index.css";
import cBeanImg from "./images/cBean.jpg";

const header = document.querySelector("header");
header.textContent = "Our Coffee"
document.getElementById("content").appendChild(header);


const backGroundImage = document.createElement("div");
backGroundImage.style.backgroundImage = `url(${cBeanImg})`;
backGroundImage.style.backgroundSize = "cover";
backGroundImage.style.width = "100vw"; 
backGroundImage.style.height = "100vh";
document.getElementById("content").appendChild(backGroundImage);



