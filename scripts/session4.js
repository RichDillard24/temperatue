// for(let i=1;i<=10;1++){
//     console.log(i);
// }

// for(let i=10;i<=100;i++){
//     console.log(i);
// }

function MultTable(x){
    let x=prompt('Entrer a Number');
    let start=prompt('start point');
    let end=prompt('End point');

    document.write(`<h2> Multiplacation table for ${x}</h2>`);
    for(let i=start;i<=end;i++){
        console.log(i*5)
        document.write(`<li> ${i} x ${x} = ${i*x} </li>`);
    }
}

for(let i=1;i<=50;i++){
    if(i%3==0 && i%5==0){
        console.log("fizzbuzz");
    }else if(i%5==0){
        console.log("buzz");
    }else if(i%3==0){
        console.log("fizz");
    }
    else{
        console.log(i);
    }
}