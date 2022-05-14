let account = prompt("Tài khoản đăng nhập:")
if (account == "Admin") {
    alert("Xin chao! Hay nhap mat khau.");
    let password = prompt("Mat khau:")
    if (password == "mindX") {
        alert("Chao mung ban!")
    } else if (password == "" || password == null){
        alert("Da huy!")
    } else {
        alert("Sai mat khau.")
    }  
} else if (account == "" || account == null){
    alert("Canceled");
} else {
    alert("Toi khong biet ban")
}
