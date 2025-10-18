
let buttons=document.querySelectorAll("button");
let inputs=document.querySelector("input");
let body=document.querySelector("body");
let happen="";
let arr=Array.from(buttons);
arr.forEach((calculate)=>{
  calculate.addEventListener("click",(e)=>{
     
      if(e.target.innerHTML=="="){
        happen=eval(happen); 
        inputs.value=happen;
      }
      
      else if(e.target.innerHTML=="C"){
        
        happen=""
       
        
        inputs.value=happen;}
        else if(e.target.innerHTML=="MC"){
        
          happen="0"
         
          
          inputs.value=happen;}
          


      

      else{
    
     happen= happen+e.target.innerHTML;
     inputs.value=happen;
    };
    function calculate() {
      try {
          inputs.value = eval( inputs.value);
      } catch (e) {
           inputs.value = 'invalid';
      }
       
  }let equal=document.querySelector("#equal");
  equal.addEventListener("click",()=>{
    calculate();
  });
   
 
 
     
  })
   
});
 