function xacdinhdau(dau){
    var bien1 = document.getElementById("num1").value;
    giaTri = parseInt(bien1);
    congTru = 0;
    if(dau=='+')
    {
        congTru = giaTri + 1;
    }
    else
    {
        congTru = giaTri - 1;
    }
    if(congTru <= 0)
    {
        congTru = 0;
    }
    document.getElementById("num1").value = congTru;
}