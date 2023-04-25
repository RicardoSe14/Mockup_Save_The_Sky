var tooltipTriggerList = Array.prototype.slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

$("#enviarCorreo").click(function(){
    alert("El correo fue enviado correctamente");
});

     $("#INGREDIENTES").on('dblclick',function(){
        $(this).css("color", "red");
    });

    $("#PREPARACIÓN").on('dblclick',function(){
        $(this).css("color", "red");
    });
    
    $(".card-title1").click(function(){
        $(".descripcion1").toggle(100);
    });

    $(".card-title2").click(function(){
        $(".descripcion2").toggle(100);
    });

    $(".card-title3").click(function(){
        $(".descripcion3").toggle(100);
    });