let birthDate=document.getElementById("date")
let birthMonth=document.getElementById("month")
let birthYear=document.getElementById("year")
let calcButton=document.querySelector(".calc")
let clear=document.querySelector(".clr")
let result=document.querySelector("#result")

    calcButton.addEventListener("click",function(){
       result.innerHTML=""
      let date=new Date()
      let currentDate=date.getDate()
      let currentMonth=date.getMonth()+1
      let currentYear=date.getFullYear()
    if((birthDate.value!="" && birthMonth.value!="") && birthYear.value!="")
        {
          if(birthDate.value>=1 && birthDate.value<=31 && birthMonth.value>=1 && birthMonth.value<=12 && birthYear.value<=currentYear)
          {
     
      let days=currentDate-Number(birthDate.value)
      let months=currentMonth-Number(birthMonth.value)
      let years=currentYear-Number(birthYear.value)
      if(days<0){
        months-=1
        days+=30;
      }
      if(months<0){
        years-=1;
        months+=12;
      }
      let h2=document.createElement("h2")
      h2.innerHTML=`Your Age: ${years} Years ${months} Months ${days} Days`
      result.appendChild(h2)
    }
    else{
      alert("Enter valid input")
      }
     }

    else{
    alert("Enter all inputs")
    }
})
clear.addEventListener("click",function(){
  result.innerHTML=""
  birthDate.value="" 
  birthMonth.value=""
  birthYear.value=""

})