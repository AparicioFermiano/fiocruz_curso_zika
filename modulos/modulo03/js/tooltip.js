// TOOLTIP
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

.ready(function(){
    $('[data-toggle="tooltip"]').tooltip({
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner custom-tooltip"></div></div>',
        trigger: 'hover'
    });   
});