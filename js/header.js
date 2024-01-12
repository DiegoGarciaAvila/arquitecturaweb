window.addEventListener('headerLoaded', function () {

    const menuList = document.getElementById("menu-list");

    menuButton=document.getElementById("menu-button")
    $('#menu-button').on("click",function () {
        if (menuList.style.display === "block") {
            menuList.style.display = "none";
            
        } else {
            menuList.style.display = "block";
        }

    })
});