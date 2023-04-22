console.log("hello")

var isDrop = false;

const dropDown = () => {
    if (isDrop) {
        document.querySelector(".drop-below").style.display = "none"
        isDrop = false
        console.log(isDrop)
    }
    else {
        document.querySelector(".drop-below").style.display = "block"
        isDrop = true
        console.log(isDrop)

    }
}
var isShown = false;

const headers = document.querySelectorAll(".showBtn")
const contents = document.querySelectorAll(".para")


console.log(headers)
console.log(contents)


for (let i = 0; i < headers.length; i++) {
    headers[i].addEventListener("click", () => {
        for (let j = 0; j < contents.length; j++) {
            if (i == j) {
                contents[j].style.display = contents[j].style.display == "block" ? "none" : "block";
                headers[j].classList = headers[j].classList == "fa-solid fa-chevron-up" ? "fa-solid fa-chevron-down" : "fa-solid fa-chevron-up";
            } else {
                contents[j].style.display = "none";
                headers[j].classList = "fa-solid fa-chevron-up";
            }
        }
    });
}