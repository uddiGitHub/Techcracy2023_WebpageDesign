document.body.style.backgroundColor = "black";

const checkbox = document.getElementById("color-toggle");
const blackHoodie = document.getElementById("black-hoodie");
const grayHoodie = document.getElementById("gray-hoodie");

checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
        blackHoodie.style.display = "none";
        grayHoodie.style.display = "block";
        document.body.style.backgroundColor = "lightgray";
    } else {
        blackHoodie.style.display = "block";
        grayHoodie.style.display = "none";
        document.body.style.backgroundColor = "black";
    }
});
