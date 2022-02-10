const hamburger = document.querySelector("#ham"); //seleting hamburger menu
const menu = document.querySelector("nav"); //selcting navigation menu
const icon = document.querySelector(".fa-solid"); //selection hamburger icon
//Adding event listener on hamburger menu
hamburger.addEventListener("click", function () {

    menu.classList.toggle("active"); //adding new class in navigation menu when we click on hamburger menu

    //Displaying the cross icon after 6sec
    setTimeout(() => {
        icon.classList.toggle("fa-bars");
        icon.classList.toggle("fa-xmark");
    }, 600);

})

//Selecting all the nav links
const link = document.querySelectorAll(".link");

for (let i = 0; i < link.length; i++) {
    //Adding event listener on all the links, when we click on links it hides the navigation menu
    link[i].addEventListener("click", () => {
        menu.classList.toggle("active");
        icon.classList.toggle("fa-bars");
        icon.classList.toggle("fa-xmark");
    })
}

const header = document.querySelector("header");//selection header part
//Making Navbar Sticky
window.addEventListener("scroll", () => {
    header.classList.toggle("sticky", window.scrollY);
})