const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const ref = urlParams.get('ref')

let name1 = document.querySelector(".name1")
let sdesc = document.querySelector(".sdesc")
let desc = document.querySelector(".desc")
let price = document.querySelector(".price")
let main = document.querySelector(".main_img")
let img1 = document.querySelector(".img1")
let img2 = document.querySelector(".img2")
let img3 = document.querySelector(".img3")
// let side = document.querySelectorall(".side_img")

async function pro() {

    let request = new Request("/json/brac.json");
    let response = await fetch(request);
    let json_obj = await response.json();
  
    load(json_obj);
  }
  

  function load(az){


    let name2 = document.createElement("h1")
    name2.innerHTML = az['products'][ref]['name']
    name1.append(name2)

    let sdesc1 = document.createElement("h4")
    sdesc1.innerHTML = az['products'][ref]['sdesc']
    sdesc.append(sdesc1)

    let desc1 = document.createElement("h4")
    desc1.innerHTML = az['products'][ref]['desc']
    desc.append(desc1)

    let price1 = document.createElement("h3")
    price1.innerHTML = az['products'][ref]['price']
    price.append(price1)

    main.src= az['products'][ref]['image']

    img1.src = az['products'][ref]['image']
    img2.src = az['products'][ref]['image']
    img3.src = az['products'][ref]['image']

    img1.classList.add('hello')
    img2.classList.add('hello')
    img3.classList.add('hello')


  }

  pro();