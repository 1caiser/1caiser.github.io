function helloWorld(){
    alert("Hello world!");
}

function makeTextBigger() {
    document.getElementById("textPlace1").style.fontSize = "2em";
}

function makeTextFancy() {
    if(!document.getElementById("boringButton").checked) {
        document.getElementById("textPlace1").style.fontWeight = "bold";
        document.getElementById("textPlace1").style.color = "blue";
        document.getElementById("textPlace1").style.textDecoration = "underline";
    }
    else {
        document.getElementById("textPlace1").style.fontWeight = "";
        document.getElementById("textPlace1").style.color = "";
        document.getElementById("textPlace1").style.textDecoration = "";
    }
}

function makeTextMoo() {
    var text = document.getElementById("textPlace1").value;
    var text = text.toUpperCase();
    var textParts = text.split(".");
    text = textParts.join("-moo.");
    document.getElementById("textPlace1").value = text;
}