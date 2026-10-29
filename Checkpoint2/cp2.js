function trocarProduto() {
    const img = document.getElementById("myImage");
    const coletarSrc = img.getAttribute("src");

    if (coletarSrc === "iphone.png") {
        img.setAttribute("src", "smart-tv.png");
        img.setAttribute("alt", "Segunda img Github")

    } else {
        img.setAttribute("src", "iphone.png")
        img.setAttribute("alt", "iphoneXR branco")

    }
}