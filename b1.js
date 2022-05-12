//Máy Tính Cơ Bản.
//sử dụng prompt nhập 2 số và dùng parseFloat để chuyển string thành number và hiện ra được 1 số float
    let a = parseFloat(prompt("nhập vào số thứ nhất"));
    let b = parseFloat(prompt("nhập vào số thứ hai"));
//sử dụng prompt nhập vào phép tính
    const operator = prompt("phép tính +, -, * hoặc /");
//tạo biến Result
    let result;
//sử dụng if-else
    if (operator == "+") {
        result = a + b 
    } else if (operator == "-"){
        result = a - b
    } else if (operator == "*"){
        result = a * b
    } else if (operator == "/"){
        result = a / b
    } else {  
        result = "Đây không phải một phép tính"
    }
console.log(("kết quả phép toán:"), a, operator, b, "=" ,result);
//sử dụng switch
    switch (operator){
        case "+":
            result = a + b;
            break;
        case "-":
            result = a - b;
            break;
        case "*":
            result = a * b;
            break;
        case "/":
            result = a / b;
            break; 
    }
console.log(("kết quả phép toán:"), a, operator, b, "=", result);
