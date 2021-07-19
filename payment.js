
function makepayment(){
    let form=document.getElementById("payment")
     let name=form.name.value;
     let cardnumber=form.cardnum.value;
     let cvv=form.cvv.value;
     let details={
         name,
         cardnumber,
         cvv

     }
     let arr;
     arr=localStorage.getItem('carddetails')
     if(arr==null){
         arr=[]
     }
     else{
         arr=JSON.parse(localStorage.getItem('carddetails'))
     }


     arr.push(details)
     localStorage.setItem('carddetails',JSON.stringify(arr))
       
       if(name=="Niket Nayan"){
     alert("card details filled")
       
       


       var myVar;

function myFunction() {
  myVar = setTimeout(alertFunc, 3000);
}

function alertFunc() {
  alert("Order Placed Successfully");
}
    alertFunc()
       }
}

