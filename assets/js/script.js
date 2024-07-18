var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})

$('#viajes').click(function () {
    alert("Revisa ofertas de viajes");
});  


$("h3").on('dblclick', function (event) {
    $(this).css({
        "color": "black",
    });
});  