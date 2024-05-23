console.log('script')

function temp(){

    const celsius=prompt("Enter Celsius value");

    const fahrenheit=(celsius * 9/5) + 32

    document.getElementById("tempList").innerHTML+=`
    <li> The conversion of Celcius ${celsius}  to Fahrenheit is ${fahrenheit} </li>`;
}
function Temp(){

    var temp=prompt("Enter C for Celsius or F for Fahrenheit:");
   
    var num=prompt("Enter Temperature:");
    

    if(temp=="c"){
        let c=(num*9/5)+32;
        
        document.getElementById("tempList").innerHTML+=`
    <li> The conversion of Celcius ${c}  to Fahrenheit is ${num} </li>`;
    }
     else if(temp=="f"){
        let f=(num-32)*5/9;
        
        document.getElementById("tempList").innerHTML+=`
    <li> The conversion of Fahrenheit is ${f} to Celcius ${num} </li>`; 
    }
    
}