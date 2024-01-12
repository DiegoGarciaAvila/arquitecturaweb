window.addEventListener('headerLoaded', function () {

    const menuList2 = document.getElementById("list_menu");

    menuButton=document.getElementById("menu-button2")
    $('#menu-button2').on("click",function () {
        console.log("OJ")
        if (menuList2.style.display === "block") {
            menuList2.style.display = "none";
            
        } else {
            menuList2.style.display = "block";
        }

    })
});