console.log('script')

function temp(){

    const celsius=prompt("Enter Celsius value");

    const fahrenheit=(celsius * 9/5) + 32

    document.getElementById("tempList").innerHTML+=`
    <li> The conversion of Celcius ${celsius} to Fahrenheit is  ${fahrenheit} </li>`;
}