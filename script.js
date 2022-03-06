

let bos = document.getElementById("bos")


bos.onclick = function () {
    let tema = document.getElementById("tema")
    if(tema.getAttribute("href") == "./css/style.css"){
        tema.href = "./css/qora.css"
    }else {
        tema.href = "./css/style.css"
    }
    if(bos.getAttribute("src") == "./img/qorarasm.png"){
        bos.src = "./img/oqrasm1.png"
        bos.style.width = ("35px")
    }else{
        bos.src = "./img/qorarasm.png"
        bos.style.width = ("30px")
    }
 }
 

// let bos = document.getElementById("bos")


// bos.onclick = function () {
  


    // if(bos.getAttribute("src") == "qorarasm.png"){
    //     bos.src = "oqrasm.png"
    // }else{
    //     bos.src = "qorarasm.png"
    // }

// }



//    function window onload ichida bulish kiri
 
 window.onload = function(){
    var btn1 = document.getElementById("btn1")
    var btn2 = document.getElementById("btn2")
    var btn3 = document.getElementById("btn3")
    var btn4 = document.getElementById("btn4")
    var btn5 = document.getElementById("btn5")

    
    btn1.onclick  = function () {
        btn1.style.color = ("#0555FF")
    }
    btn2.onclick  = function () {
        btn2.style.color = ("#0555FF")
    }
    btn3.onclick  = function () {
        btn3.style.color = ("#0555FF")
    }

    btn4.onclick  = function () {
        btn4.style.color = ("#0555FF")
    }
    btn5.onclick  = function () {
        btn5.style.color = ("#0555FF")
    }
    
    
 }







