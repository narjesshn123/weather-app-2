

const form = document.querySelector("form");         
const formInput = document.querySelector("input");
const msg = document.querySelector(".msg");        
const list = document.querySelector(".cities");       

const apiKeys = "3b40717f67d3fb3d2146e4579c569a01";


form.addEventListener("submit", e => 
{ e.preventDefault();
    let inputValue = formInput.value;      
    // const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${apiKeys}&units=metric`
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${apiKeys}&units=metric`
    fetch(url)
    .then((response)=>response.json())
    .then(data =>{console.log(data)
    const{main, sys, name, weather} = data;           
    const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0]["icon"]}.svg`
    const li = document.createElement("li");        
    li.classList.add("city");
    const markUp = `<h2 class="city-name" data-name=${name},${sys.country}>
    <span>${name}</span>
    <span>${sys.country}</span>
    </h2>
    <div class="city-temp">${Math.round(main.temp)}</div>
    <figure>
    <img class="city-icon" src=${icon} alt="city">           
    <figurecaption>${weather[0]["description"]}</figurecaption>
    </figure>`                    
    li.innerHTML = markUp;        
    list.appendChild(li);  
    msg.innerText = "";                
    })
    .catch(()=>{
        msg.innerText = "Search for a valid city";        
    })
formInput.value = "";       
})             
