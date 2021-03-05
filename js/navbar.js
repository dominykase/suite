var container = document.getElementById("linksContainer");
var links = document.querySelectorAll("#linksContainer a");

function navbarPop() {
    if (container.className === "") {
        container.className += "responsive";

        Velocity(container, { height: "100px" }, { duration: 400, easing: "easeOut"})
        links.forEach(link => {
            Velocity(link, { opacity: 1, fontSize: "1em" }, { duration: 400, delay: 400 })
        });
    } else {
        links.forEach(link => {
            Velocity(link, { opacity: 0, fontSize: "0.5em"  }, { duration: 400 })
        });

        Velocity(container, { height: "0px" }, { duration: 400, delay: 400, easing: "easeOut", complete: function (){
            container.className = "";
        }});
    }
}

function windowResize () {
    const viewportWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);

    if (viewportWidth >= 800) {
        links.forEach(link => {
            container.className = "";
            container.style.height = "100px";
            link.style.opacity = 1;
            link.style.fontSize = "1.3em"
        })
    } else if (container.className === "") {
        links.forEach(link => {
            container.style.height = 0;
            link.style.opacity = 0;
            link.style.fontSize = "0.5em";
        })
    } else {}
}

window.onresize = windowResize;