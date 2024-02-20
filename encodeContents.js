function convertFromHex(hex) {
    var hex = hex.toString();//force conversion
    var str = '';
    for (var i = 0; i < hex.length; i += 2)
        str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    return str;
}
function convertToHex(str) {
    var hex = '';
    for(var i=0;i<str.length;i++) {
        hex += ''+str.charCodeAt(i).toString(16);
    }
    return hex;
}
document.getElementById("demo").tokens = "DISP 3";
var str = "PHYSICS";
document.getElementById("demo").innerHTML = convertFromHex("0xE6");
for (var a=0;a<str.length;a++) {
	var e = document.getElementById("demo");
    var letter = str.slice(a,a+1);
    e.innerHTML += " __" + letter + " ";
    e.innerHTML += "encoded: 0x" + convertToHex(letter) + "__";
}
