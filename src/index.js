import createPage from "./main.js";


function loadMenuTab() {
    document.getElementById("content").innerHTML = ''; 
    createPage("Our Coffee", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, maxime aliquam. Doloribus a nisi, debitis nulla mollitia dolorum cupiditate dignissimos quasi eaque repellat corporis, ipsa cumque delectus ut ab obcaecati? ", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, maxime aliquam. Doloribus a nisi, debitis nulla mollitia dolorum cupiditate dignissimos quasi eaque repellat corporis, ipsa cumque delectus ut ab obcaecati?", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, maxime aliquam. Doloribus a nisi, debitis nulla mollitia dolorum cupiditate dignissimos quasi eaque repellat corporis, ipsa cumque delectus ut ab obcaecati?"); 
}

function loadContactTab() {
    document.getElementById("content").innerHTML = ''; 
    createPage("Our Locations", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, maxime aliquam. Doloribus a nisi, debitis nulla mollitia dolorum cupiditate dignissimos quasi eaque repellat corporis, ipsa cumque delectus ut ab obcaecati?", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, maxime aliquam. Doloribus a nisi, debitis nulla mollitia dolorum cupiditate dignissimos quasi eaque repellat corporis, ipsa cumque delectus ut ab obcaecati?", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, maxime aliquam. Doloribus a nisi, debitis nulla mollitia dolorum cupiditate dignissimos quasi eaque repellat corporis, ipsa cumque delectus ut ab obcaecati?");
}


function loadAboutTab() {
    document.getElementById("content").innerHTML = ''; 
    createPage("About Us", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, maxime aliquam. Doloribus a nisi, debitis nulla mollitia dolorum cupiditate dignissimos quasi eaque repellat corporis, ipsa cumque delectus ut ab obcaecati?", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, maxime aliquam. Doloribus a nisi, debitis nulla mollitia dolorum cupiditate dignissimos quasi eaque repellat corporis, ipsa cumque delectus ut ab obcaecati?", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, maxime aliquam. Doloribus a nisi, debitis nulla mollitia dolorum cupiditate dignissimos quasi eaque repellat corporis, ipsa cumque delectus ut ab obcaecati?");
}

document.getElementById('home').addEventListener('click', loadMenuTab);
document.getElementById('location').addEventListener('click', loadContactTab);
document.getElementById('about').addEventListener('click', loadAboutTab);


window.onload = loadMenuTab;