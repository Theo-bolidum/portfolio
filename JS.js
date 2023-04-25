window.onscroll = function(ev) {
    if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
document.getElementById("flèche").style.display = "flex"
    }
    else{document.getElementById("flèche").style.display = "none"}
};

/**
 * @var { HTMLCollection<HTMLAnchorElement> } links
 */
let links = document.querySelectorAll(".link-btn");

links.forEach(link => {
    if (window.location.hostname === "theo-bolidum.github.io" || window.location.hostname.includes("github.io")) {
        link.href = link.href.replace("/uploads", "/portfolio/uploads");
    }
})
