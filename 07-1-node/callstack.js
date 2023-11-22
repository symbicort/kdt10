function first(){
    second();
    console.log(1);
}
function second(){
    third();
    console.log(2);
}

function third(){
    console.log(3);
}

// LIFO 방식
first();


function run(){
    console.log('3초 뒤 실행');
}

console.log('start');
setTimeout(run,3000);
console.log('end');