function genQR() {
    var goapi = "https://api.qrserver.com/v1/create-qr-code/?size=";
    var myimg = document.getElementById("img");
    var mytext = document.getElementById("qrtext").value;
    var mysize = document.getElementById("size").value;

    if (mytext !== "") {
        // Update the API URL and parameters
        var qrDataURL = goapi + mysize + "x" + mysize + "&data=" + encodeURIComponent(mytext);
        myimg.src = qrDataURL;

        // Fetch the image for download link setup
        fetch(qrDataURL)
            .then(response => response.blob())
            .then(blob => {
                var downloadLink = document.getElementById("download");
                downloadLink.href = URL.createObjectURL(blob);
                downloadLink.download = "qrcode.png"; // Set a filename for download
                downloadLink.style.display = "block";
            })
            .catch(error => {
                console.error("Error fetching image:", error);
            });
    } else {
        alert("Please Enter Text");
    }
}
