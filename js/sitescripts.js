function ManageSticky() {
    var header = document.getElementById("header");
    var logoMain = document.getElementById("logo");
    var pageHeight = window.innerHeight;
    var sticky = header.offsetTop;
    if (window.pageYOffset > sticky) {
        header.classList.add("is-sticky");
        logoMain.style.width = "60px";
        
    } else {
        header.classList.remove("is-sticky");
        logoMain.style.width = "100px";
        
    }
}