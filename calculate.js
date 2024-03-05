function calculate(){
    let a= +document.querySelector("#bookone").value;
    let b= +document.querySelector("#book2").value;
    let c= +document.querySelector("#book3").value;
    let d= +document.querySelector("#book4").value;
    let e= +document.querySelector("#book5").value;
    let f= +document.querySelector("#book6").value;
    

 if (a>100 || b>100 || c>100 || d>100 || e>100 || f>100) {
    
    alert("please enter correct marks");
 }

 else{
   let obtain=a+b+c+d+e+f;
   document.querySelector("#ob").innerHTML=obtain;
   let percentage=(obtain/600)*100;
   document.querySelector("#per").innerHTML=percentage;

if(a>32 && b>32 && c>32 && d>32 && e>32 && f>32){
document.querySelector("#rem").innerHTML="pass";
}
else{
document.querySelector("#rem").innerHTML="fail";
}

if( percentage>=80){
   document.querySelector("#gd").innerHTML="Grade A";
   
   }
   else if( percentage>=70){
      document.querySelector("#gd").innerHTML="Grade B+";
      
      }
   
     else if( percentage>=60){
         document.querySelector("#gd").innerHTML="Grade B";
         
         }
   
        else if( percentage>=50){
            document.querySelector("#gd").innerHTML="Grade C";
            
            }
            else if(percentage>=40){
               document.querySelector("#gd").innerHTML="Grade D";
            }
            else if(percentage<=33){
               document.querySelector("#gd").innerHTML="F";
            }

 }



}