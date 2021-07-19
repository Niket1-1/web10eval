var data_div=document.getElementById('data')
function storeLocation(el){
    let form=document.getElementById("myForm")
     let name=form.name.value;
     let rating=form.rating.value;
     let image=form.img.value;
     let location={
         name,
         rating,
         image

     }
     let arr;
     arr=localStorage.getItem('locations')
     if(arr==null){
         arr=[]
     }
     else{
         arr=JSON.parse(localStorage.getItem('locations'))
     }


     arr.push(location)
     localStorage.setItem('locations',JSON.stringify(arr))
}
 


function appendlocation(el){
    
    var div=document.createElement('div')
    let p_name=document.createElement('p')
    p_name.innerHTML=el.name
    let p_rating=document.createElement('p')
    p_rating.innerHTML=el.rating
    let img=document.createElement('img')
    img.src=el.image
        
    let btn=document.createElement('button')
    btn.textContent="Add To Cart";

    btn.addEventListener("click",function(){
        addtoVisited(el);
    })




    btn.style.display="block"
    div.append(p_name,p_rating,img,btn)
    data_div.append(div)
}
function showLocations(){
    let data=JSON.parse(localStorage.getItem('locations'))
    data_div.innerHTML=null;
    data.forEach(function (el){

appendlocation(el)
    })
}   
    

showLocations()
function addtoVisited(){

}

function addtoVisited(obj){
    
    let arr;
    arr=localStorage.getItem('visited')
    if(arr==null){
        arr=[]
    }
    else{
        arr=JSON.parse(localStorage.getItem('visited'))
    }


    arr.push(obj)
    localStorage.setItem('visited',JSON.stringify(arr));



}



function showVisited(){

    window.location.href='cart.html'
}