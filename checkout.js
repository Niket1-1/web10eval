
function adress(){
    let form=document.getElementById("adress")
     let name=form.name.value;
     let city=form.city.value;
     let pincode=form.pincode.value;
     let adres={
         name,
         city,
         pincode

     }
     let arr;
     arr=localStorage.getItem('adress')
     if(arr==null){
         arr=[]
     }
     else{
         arr=JSON.parse(localStorage.getItem('adress'))
     }


     arr.push(adres)
     localStorage.setItem('adress',JSON.stringify(arr))





     alert("Your Adress is added Successfully")


     window.location.href="payment.html"
}
 



