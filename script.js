document.addEventListener("DOMContentLoaded",function() {
    const dowloadButton = documnet.getElementById("dowloadButton");

    dowloadButton.addEventListener("click", function(){
        const cvPath = "PROPOSAL TUGAS AKHIR(1).docx";

        const link = document.createElement("a");
        link.href =cvPath;

        link.download = "silvi_cv.docx";

        link.target = "_blank";

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
});
