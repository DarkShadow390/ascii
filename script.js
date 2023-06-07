// let nombre60 = 60;
// for(let i = 0 ; i < 10; i++){
//     console.log(nombres);
//     nombres += 1;
// }

// let nombre70 = 70;
// for(let i = 0 ; i < 10; i++){

// }
function valider(){
    let tab1 = [];
    if(document.getElementById("essaie").value == "'"){
        document.getElementById("texte").value += 60;
    }
    if(document.getElementById("essaie").value == "a"){
        document.getElementById("texte").value += 61;
        tab1.push(61);
    }
    if(document.getElementById("essaie").value == "b"){
        document.getElementById("texte").value += 62;
        tab1.push(62);
    }
    if(document.getElementById("essaie").value == "c"){
        document.getElementById("texte").value += 63;
    }
    if(document.getElementById("essaie").value == "d"){
        document.getElementById("texte").value += 64;
    }
    if(document.getElementById("essaie").value == "e"){
        document.getElementById("texte").value += 65;
    }
    if(document.getElementById("essaie").value == "f"){
        document.getElementById("texte").value += 66;
    }
    if(document.getElementById("essaie").value == "g"){
        document.getElementById("texte").value += 67;
    }
    if(document.getElementById("essaie").value == "h"){
        document.getElementById("texte").value += 68;
    }
    if(document.getElementById("essaie").value == "i"){
        document.getElementById("texte").value += 69;
    }
    console.log(tab1);
}


document.body.addEventListener("keypress", function(e){
    if(e.key == "Enter"){
        valider();
        console.log("valider");
        
    }
});


// let hex = "abcdefghijklmnopqrstuvwxyz";
//     for(let i = 0; i < hex.length; i++ ){
//         console.log(hex[i]);
//     }