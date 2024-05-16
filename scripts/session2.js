

function taxCalculation(){
    var prroduct=prompt('enter product name:');
    var price=prompt('enter price');
    var qty = prompt('enter the quantity');
    const taxes = 1.08;

    var subtotal=price*qty
    var total= subtotal*taxes;

    console.log(prroduct);
    console.log(subtotal);
    console.log(total);
}

function stockSheet(){
    var num1=prompt('enter product qty');
    var num2=prompt('enter price');

    var total=num1+num2;

    console.log(total);
}

function getGPA(){

    var name=prompt('enter the name:');
    var grade101=Number(prompt('enter the 101 grade:'));
    var grade102=Number(prompt('enter the 102 grade:'));

    var gpa=(grade101+grade102)/2;

    document.getElementById("studentlist").innerHTML+=`
    <li> Name: ${name} - GPA: ${gpa} <li>`;
}