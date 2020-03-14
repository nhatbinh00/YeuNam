$(document).ready(function(){
    var str="";
    var kq;
    // Nhap phep toan hien thi ra man hinh& animated
    $(".number,.operations").click(function(){
        str=str+ $(this).text();
        $("#Result").val(str);
        $(this).addClass('animate');
    });
    // tinh toan xuat ket qua
    $(".result").click(function(){
        $("#Result").val("");
        kq= eval(str);
        $("#Result").val(kq);
        str=kq;
    });
    // xoa man hinh
    $(".ac").click(function(){
        str="";
        $("#Result").val("");
    });
    // thao tac nut %
    $(".phantram").click(function(){
        str=str+"/100";
        $("#Result").val(str);
    });
    // back
    $(".back").click(function(){
        str =str.substring(0, str.length-1);
        $("#Result").val(str);
    });
    
});