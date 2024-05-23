function convertTemperatureRange(){

    var temp=prompt("Enter C for Celsius or F for Fahrenheit:");
    let start=prompt('start point');
    let end=prompt('End point');
    let num=start
   

    for(let i=start;i<=end;i++){
        
    
        if(temp=="c"){
            let c=(num*9/5)+32;
        
            document.write(`<li> ${i} x ${start} = ${(i*9/5)+32 }</li>`);
            }
             else if(temp=="f"){
                 let f=(num-32)*5/9;
        
                 document.write(`<li> ${i} x ${start} = ${(i-32)*5/9}</li>`);
      }
    }
}