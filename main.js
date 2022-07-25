const items = document.querySelectorAll(".panel")

items.forEach(function(item){
    item.addEventListener('click',function(){
        removeActiveclasses();
        item.classList.add("active");

    });
});

function removeActiveclasses() {
    items.forEach(function(item){
        item.classList.remove("active");
    });
};