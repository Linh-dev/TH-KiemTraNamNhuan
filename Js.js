function tinh(){
    let nam = parseInt(document.getElementById("sonam").value);
    if (nam % 100==0){
        if (nam % 400==0){
            document.write(nam+" la nam nhuan")
        }else {
            document.write(nam+" khong phai la nam nhuan")
        }
    }else if (nam % 4==0){
        document.write(nam+" la nam nhuan")
    }else {
        document.write(nam+" khong phai la nam nhuan")
    }
}