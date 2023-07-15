
function genQR() {
    var goapi = "https://chart.googleapis.com/chart?chf=bg,s,65432100&cht=qr&chs=";
    var myimg = document.getElementById("img");
    var mytext = document.getElementById("qrtext").value;
    var mysize = document.getElementById("size").value;

    if (mytext !== "" && mysize == "100") {
        myimg.src = goapi + "100x100" + "&chl=" + mytext;
        // https://chart.googleapis.com/chart?cht=qr&chs=100x100&chl=hello
        document.getElementById("download").style.display="block";
    } else if (mytext !== "" && mysize == "150") {
        myimg.src = goapi + "150x150" + "&chl=" + mytext;
        document.getElementById("download").style.display="block";
    } else if (mytext !== "" && mysize == "200") {
        myimg.src = goapi + "200x200" + "&chl=" + mytext;
        document.getElementById("download").style.display="block";
    } else if (mytext !== "" && mysize == "250") {
        myimg.src = goapi + "250x250" + "&chl=" + mytext;
        document.getElementById("download").style.display="block";
    } else if (mytext !== "" && mysize == "300") {
        myimg.src = goapi + "300x300" + "&chl=" + mytext;
        document.getElementById("download").style.display="block";
    } else {
        alert("Please Enter Text");

    }
    
    document.getElementById("download").href=myimg.src;   
    
}
    


