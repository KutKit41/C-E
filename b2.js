//Tìm số nguyên tố
//nhập vào 1 số dương
const number = parseInt(prompt("Nhập vào 1 số dương:"));
let isPrime = true;
//Kiểm tra xem đó có phải số nguyên tố không bằng cách giải thuật chia thử trong khoảng 2 đến căn của số nhập vào
if (number < 2) {
    //các số lớn hơn 1 thì là số nguyên tố hay các số nhỏ hơn 2 không phải là số nguyên tố
    isPrime = false;
} else if (number == 2){
    isPrime = true;
} else if (number % 2 == 0){
    isPrime = false;
} else { for (var i=2; i <= Math.sqrt(number); i++){
    if (number % i == 0){
        isPrime = false;
    }
}
//cho ra kết quả    
}
if (isPrime == true){
    console.log(number, ("là số nguyên tố"));
} else {
    console.log(number, ("không là số nguyên tố"));
}