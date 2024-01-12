$(window).on('headerLoaded', function () {
    const proyectOne = $("#proyectOne");
    const proyectTwo = $("#proyectTwo");
    const proyectThree = $("#proyectThree");

    let activeProyect = proyectOne;
    
    $('#btnOne').on("click", function () {
        
        if (activeProyect) {
            activeProyect.slideUp(1500); // Si hay un elemento activo, ciérralo
        }
        proyectOne.slideDown(1500); // Abre proyectOne
        activeProyect = proyectOne;

    });
    $('#btnTwo').on("click", function () {
        
        if (activeProyect) {
            activeProyect.slideUp(1500); // Si hay un elemento activo, ciérralo
        }
        proyectTwo.slideDown(1500);
        proyectTwo.css("display", "grid");
        // Abre proyectOne
        activeProyect = proyectTwo;
    });
    $('#btnThree').on("click", function () {
        if (activeProyect) {
            activeProyect.slideUp(1500); // Si hay un elemento activo, ciérralo
        }
        proyectThree.slideDown(1500); // Abre proyectOne
        proyectThree.css("display", "grid");
        activeProyect = proyectThree;

    });

    list_images =document.querySelectorAll(".img-src")
    
    var modal =document.getElementById('modal01')
    var modalImg = document.getElementById("img01");

    for (let index = 0; index < list_images.length; index++) {
        list_images[index].addEventListener('click', function() {
            modal.style.display = "block";
            modalImg.src = this.src;

          });
        
    }

    modal.addEventListener('click',function() {
        modal.style.display = "none";
    })


});
