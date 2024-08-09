const decreaseBtn = document.getElementById("decrease");
const increaseBtn = document.getElementById("increase");
const resetBtn = document.getElementById("reset");
const number = document.getElementById("number");
let count = 0;
increaseBtn.onclick = function(){
    count++;
    number.textContent = count;
    console.log(count);
}
decreaseBtn.onclick = function(){
    count--;
    number.textContent = count;
    console.log(count);
}
resetBtn.onclick = function(){
    count = 0;
    number.textContent = count;
    console.log(count);
}