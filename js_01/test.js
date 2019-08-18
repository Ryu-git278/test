
// alert(ようこそ);
// とても良い！やってみよう！（JSが効いているのかもチェックできる）


console.log("はじめてのジャバスクリプト");
console.log(23 + 5);
console.log(2_000 - 1_800);
console.log("18 + 5");
// ダブルコーテーションで囲うと文字に
// コンソールログでは、数値と文字と色に違いが出るので、知っていると検証でも便利

var namejp="古屋 龍太郎";
var name="ryutaro furuya";
// var はjs的に無くそう運動が起こっているが！まだ気にしなくてOK
// 私的には ”ラベル”をつけるイメージ（先生は箱に入れるイメージ）

console.log(namejp);
console.log(name);

var point=90; 


// 以下HTMLに表示例
if(point >= 89) 
    {document.write("素晴らしい！おめでとう！") ;
    }
    else if(point >= 70) {
    document.write("不合格です！おしい！");
    }
    else if(point >= 40) {
    document.write("もっと頑張りましょう！");
    }
    else{document.write("再テスト");
    } 



// 以下 コンソールログに表示例
if(point >=89) 
    {console.log("素晴らしい！おめでとう！") ;
    }
    else if(point >= 70) {
    console.log("不合格です！おしい！");
    }
    else if(point >= 40) {
    console.log("もっと頑張りましょう！");
    }
    else{console.log("再テスト");
    } 

    
//以下の場合は、乱数が0～4まで表示される 
// Math.floor(Math.random()*5);
// Math.random()は0...0.99999
// Math.random()*6 は0...5.99999
// Math.floorは小数点以下切り捨て
// Math.floor(Math.random()*101 + 1);

// PDFの課題の回答は
// var random = Math.floor(Math.random()*5);


// 以下応用して、先ほどの点数表示と組み合わせてみる。
var point = Math.floor(Math.random()*101);

console.log(point);


// 以下 コンソールログに表示例
if(point >=100) 
    {console.log("満点！おめでとう") ;
    }
    else if(point >= 90) {
        console.log("惜しいね！合格です！");
    }    
    else if(point >= 80) {
    console.log("素晴らしい！おめでとう！");
    }
    else if(point >= 70) {
    console.log("不合格です！おしい！");
    }
    else if(point >= 40) {
    console.log("もっと頑張りましょう！");
    }
    else{console.log("再テスト");
    } 


// 課題その2　おみくじ5パターン作成

var omikuji = Math.floor(Math.random()*6);

console.log(omikuji);

if(omikuji ==5) 
    {console.log("大吉") ;
    }
    else if(omikuji == 4) {
        console.log("吉");
    }    
    else if(omikuji == 3) {
    console.log("なんて普通の日");
    }
    else if(omikuji == 2) {
    console.log("凶");
    }
    else if(omikuji == 1) {
    console.log("大凶");
    }
    else if(omikuji == 0) {
    console.log("人生最大のピンチ");
    }
// else{console.log("人生最大のピンチ");
// } 


// 問題2　おみくじ HTMLのh1 に表示させる（すでに以下は、回答）下記文で htmlにある[h1]を攻撃できる
var h1 = document.querySelector("h1");
// h1.innerHTML = '大吉';

if(omikuji ==5) {
    h1.innerHTML = '大吉';
    console.log("大吉");
    }
    else if(omikuji == 4) {
    h1.innerHTML = '吉';
    console.log("吉");
    }    
    else if(omikuji == 3) {
    h1.innerHTML = 'なんて普通の日';
    console.log("なんて普通の日");
    }
    else if(omikuji == 2) {
    h1.innerHTML = '凶';
    console.log("凶");
    }
    else if(omikuji == 1) {
    h1.innerHTML = '大凶';
    console.log("大凶");
    }
    else if(omikuji == 0) {
    h1.innerHTML = '人生最大のピンチ';
    console.log("人生最大のピンチ");
    }

    
    // メモ
    // 遊び
    $("h1").on("click", function () {
        var random = Math.floor(Math.random() * 5 + 1);
    
        if (random == 1) {
            //innerHTMLでh1の中身を書き換えるkakikaeru
            $("h1").html("大吉");
        } else if (random == 2) {
            $("h1").html("中吉");
        } else if (random == 3) {
            $("h1").html("小吉");
        } else if (random == 4) {
            $("h1").html("末吉");
        } else if (random == 5) {
            $("h1").html("吉");
        }
    });