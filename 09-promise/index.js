// function goMart() {
//     console.log('마트에 와서 어떤 음료를 살지 고민중')
// }

// function pickDrink(){
//     // 3초 고민 (3초 후 실행)
//     setTimeout(function(){
//         console.log('고민 끝');
//         product = '콜라';
//         price = 1600;
//     }, 3000);
// }

// function pay(product,price){
//     console.log(`상품명: ${product}, 가격: ${price}`);
// }

// let product, price;
// goMart();
// pickDrink();
// pay(product,price);

function goMart() {
    console.log('마트에 와서 어떤 음료를 살지 고민중')
}

function pickDrink(callback){
    // 3초 고민 (3초 후 실행)
    setTimeout(function(){
        console.log('고민 끝');
        product = '콜라';
        price = 1600;
        // 위에 코드가 실행된 이후 실행될 콜백함수
        callback(product,price)
    }, 3000);
}

function pay(product,price){
    console.log(`상품명: ${product}, 가격: ${price}`);
}

let product, price;
goMart();
// pickDrink(pay);
pickDrink(function pay(product,price){
    console.log(`상품명: ${product}, 가격: ${price}`);
})
