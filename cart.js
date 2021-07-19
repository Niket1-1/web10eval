

var data_div=document.getElementById("data")

function appendlocation(el){
    
    var div=document.createElement('div')
    let p_name=document.createElement('p')
    p_name.innerHTML=el.name
    let p_rating=document.createElement('p')
    p_rating.innerHTML=el.rating
    let img=document.createElement('img')
    img.src=el.image
    let btn=document.createElement('button')
    btn.textContent="APPLY PROMOCODE";

    btn.addEventListener("click",function(){
        alert("use masai30 to get 30% discount")
        alert("Promocode applied succesfully")
        window.location.href="checkout.html"
    })




    btn.style.display="block"
  
    div.append(p_name,p_rating,img,btn)
    data_div.append(div)
}


function showVisited(){
    let data=JSON.parse(localStorage.getItem('visited'))
    data_div.innerHTML=null;
    data.forEach(function (el){

appendlocation(el)
    })
}   
    showVisited();

