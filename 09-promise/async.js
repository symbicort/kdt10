// // async - await
// // async: 함수 앞에 붙이는 키워드
// // - 함수만 보고도 비동기 함수임을 알 수 있다.
// // - 프로미스를 반환

// // - await: 기다리다
// // - 성공/실패로 프로미스 객체의 실행이 완료되기를 기다려줌
// // - await 뒤에는 프로미스가 오게 됨
// // async 키워드를 사용한 함수 안에서만 await 사용

// function goMart() {
//     console.log('마트에 와서 어떤 음료를 살지 고민중')
// }

// function pickDrink(callback){
//     // 3초 고민 (3초 후 실행)
//     return new Promise((resolve,reject) => {
//         setTimeout(function(){
//             console.log('고민 끝');
//             product = '콜라';
//             price = 1600;
//             resolve();
//         }, 3000);
//     })
// }

// function pay(product,price){
//     console.log(`상품명: ${product}, 가격: ${price}`);
// }

// let product, price;
// async function exec(){
//     goMart();
//     await pickDrink();
//     pay(product,price)
// }

// exec();

// // async - await 키워드 사용 시, 에러 처리는 try-catch 문으로!
// async function exec1(){
//     try {
//         goMart();
//         await pickDrink();
//         pay(product,price);
//     } catch(error){
//         console.log(error);
//     }
// }

// goMart();
// pickDrink().then((result) => {
//     pay(product,price);
// })

function call(name){
    return new Promise((resolve,reject) => {
        setTimeout(function(){
            console.log(name);
            resolve(name);
        }, 1000);
    })
}

function back(){
    return new Promise((resolve, reject) => {
        setTimeout(function (){
            console.log('back');
            resolve('back');
        }, 1000);
    })
}

function hell(){
    return new Promise((resolve,reject ) => {
        setTimeout(function(){
            resolve('callback hell')
        },1000);
    })
}

async function exec(){
    try{
        let asname = await call('kim');
        console.log(asname + ' 반가워');
        let asback = await back();
        console.log(asback + ' 을 실행했구나');
        let ashell = await hell();
        console.log('여기는' + ashell);
    } catch(error){
        console.log(error);
    }
}

exec();



function viewcolor(color){
    return new Promise((resolve, reject) => {
        setTimeout(function (){
            document.body.style.backgroundColor = color;
            resolve();
        }, 1000);
    })
}

async function execcolor(){
    try{
        await viewcolor("red");
        await viewcolor("orange");
        await viewcolor("yellow");
        await viewcolor("green");
        await viewcolor("blue");
    } catch(error){
        console.log(error);
    }
}