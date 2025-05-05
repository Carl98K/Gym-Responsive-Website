function showSidebar() {
    const sidebar = document.getElementById("sidebar-list");
    /*sidebar.style.display = "flex";*/
    sidebar.style.right = "0";
}

function hideSideBar() {
    const sidebar = document.getElementById("sidebar-list");
    /*sidebar.style.display = "none";*/
    sidebar.style.right = "-100%";
}


const topButton = document.getElementById("up-icon");


window.onscroll = function () { scrollFunction() };

function checkScroll() {
    if (window.scrollY == 0)
        topButton.style.display = "none";
}

checkScroll();

function resetImageTopButton() {
    const arrowUpIcon = document.getElementById("arrowUp-icon");
    arrowUpIcon.src = "images/Arrow Up.png";
}

function changeImageTopButton() {
    const arrowUpIcon = document.getElementById("arrowUp-icon");
    arrowUpIcon.src = "images/Arrow Up Black.png";
}

function scrollFunction() {
    if (document.body.scrollTop > 950 || document.documentElement.scrollTop > 950) {
        topButton.style.display = "block";
    }
    else
        topButton.style.display = "none";
}

document.addEventListener('DOMContentLoaded', function (e) {
    document.addEventListener('scroll', function (e) {
        let documentHeight = document.body.scrollHeight;
        let currentScroll = window.scrollY + window.innerHeight;
        // When the user is [modifier]px from the bottom, fire the event.
        let modifier = 200;
        if (currentScroll + modifier > documentHeight) {
            changeImageTopButton();
        }
        else {
            resetImageTopButton();
        }
    })
})
