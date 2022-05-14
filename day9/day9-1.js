//HW1
//toán tử dấu ?
 function checkAge(age) {
     let checkAge = true;
//     return  checkAge = (age > 18) ? true : confirm('Did parents allow you?');
//sử dụng OR||
    return checkAge = (age == "18" || age <18) ? confirm("Did parents allow you?") : true;
 }
