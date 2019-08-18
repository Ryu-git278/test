// 後半戦：Jquery

// var aa = document.querySelector(h1);
// $("h1") この上が実行していることと同じ
// $("h1").html("Jquery");

$("h1").html("ここをクリック");

// ここから→
// $("h1").on("click", function(){
    // 意味はclickされたら実行したいことを書く

    // $("h1").html("爆発まで3秒…");
    // 意味は htmlのh1にcomment表示！そのままや！
    // $("h1").css("color","red");
    // 意味は h1に対してCSSでcolorを指示！そのままや！

    // $("p").fadeOut(5000);
    // $("p").fadeIn(5000);
    // $("p").append("<p>追加されたタグ</p>");

// });
// ←ここまでが 公式として覚える


// 追加の演習

$('#ex').hide();
$('#ex').fadeIn('5000');

// その２（ドム操作）
$("#ex").on("click", function(){
    // 意味はclickされたら実行したいことを書く
    // hide消す
    // 上で消してフェードインからスタート

    $("#ex").html("<p>かきくけこ</p>");
    // かきくけこを追加

    $("#ex").css("color","white");
    // 文字色をwhiteに
   
    $("#ex").css("background-color","black");
    // バックグランドに背景色を設定
   
    $("#ex").prepend("<p>あいうえお</p>");
    // あいうえおを挿入
   
    $("#ex").append("<p>さしすせそ</p>");
    // さしすせそを挿入

    $("#ex p:odd").css("background-color", "white");
    $("#ex p:odd").css('color','black');
    // 偶数行だけ背景色を白にする

});


// キーワード：エイジャックス