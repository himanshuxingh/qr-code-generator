function genQR() {
    var goapi = "https://chart.googleapis.com/chart?chf=bg,s,65432100&cht=qr&chs=";
    var myimg = document.getElementById("img");
    var mytext = document.getElementById("qrtext").value;
    var mysize = document.getElementById("size").value;

    if (mytext !== "") {
        var qrDataURL = goapi + mysize + "x" + mysize + "&chl=" + encodeURIComponent(mytext);
        myimg.src = qrDataURL;
        
        // Convert the data URL to a blob and create an anchor element for download
        fetch(qrDataURL)
            .then(response => response.blob())
            .then(blob => {
                var downloadLink = document.getElementById("download");
                downloadLink.href = URL.createObjectURL(blob);
                downloadLink.style.display = "block";
            })
            .catch(error => {
                console.error("Error fetching image:", error);
            });
    } else {
        alert("Please Enter Text");
    }
}
