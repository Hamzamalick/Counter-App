let add = document.querySelector(".add");
let minus = document.querySelector(".minus");
let counter = document.querySelector(".counter")

let count = 0;
add.addEventListener("click", function(){
   
   count++;
   counter.textContent = count
})
minus.addEventListener("click", function(){
    if (count > 0) {
        count--;
        counter.textContent = count;
    }
});