
// const

const pullBack = document.getElementById("pull-back");
const arrUp = document.getElementById("arrow-nav");

// EL

window.addEventListener("scroll", showNav);

// F->

// show & hide bottom nav
function showNav(){
    
    let pos = window.scrollY;

    function addRemove (add, remove) {
        pullBack.classList.add(add);
        pullBack.classList.remove(remove);
    }

    if (pos > 600) {
        addRemove("opa-1", "opa-0")
    } else {
        addRemove("opa-0", "opa-1")
    }

    if (pos>0 && pos<1392) {
        arrUp.style.color = "var(--border-pastel-dark)";
    } else if (pos>=1392 && pos<2019) {
        arrUp.style.color = "var(--marin-blue-dark)";
    } else if (pos>=1825 && pos<3147) {
        arrUp.style.color = "var(--team-grey)";
    } else if (pos>=3147 && pos<3776) {
        arrUp.style.color = "var(--green-nav)";
    } else {
        arrUp.style.color = "var(--or-nav)";
    }

    // console.log(window.innerWidth)
    console.log(pos);

    // "pull up menu" for window < 630px
    if (window.innerWidth < 630) {
        
        if (pos>0 && pos<1392) {
            arrUp.style.color = "var(--border-pastel-dark)";
        } else if (pos>=1392 && pos<2019) {
            arrUp.style.color = "var(--marin-blue-dark)";
        } else if (pos>=1825 && pos<3430) {
            arrUp.style.color = "var(--team-grey)";
        } else if (pos>=3430 && pos<4046) {
            arrUp.style.color = "var(--green-nav)";
        } else {
            arrUp.style.color = "var(--or-nav)";
        }

    }

    // "pull up menu" for window < 500px
    if (window.innerWidth < 500) {
        
        if (pos>0 && pos<1392) {
            arrUp.style.color = "var(--border-pastel-dark)";
        } else if (pos>=1392 && pos<2019) {
            arrUp.style.color = "var(--marin-blue-dark)";
        } else if (pos>=1825 && pos<3974) {
            arrUp.style.color = "var(--team-grey)";
        } else if (pos>=3974 && pos<4592) {
            arrUp.style.color = "var(--green-nav)";
        } else {
            arrUp.style.color = "var(--or-nav)";
        }

    }

    // "pull up menu" for window < 400px
    if (window.innerWidth < 500) {
        
        if (pos>0 && pos<1392) {
            arrUp.style.color = "var(--border-pastel-dark)";
        } else if (pos>=1392 && pos<2019) {
            arrUp.style.color = "var(--marin-blue-dark)";
        } else if (pos>=1825 && pos<3857) {
            arrUp.style.color = "var(--team-grey)";
        } else if (pos>=3857 && pos<4479) {
            arrUp.style.color = "var(--green-nav)";
        } else {
            arrUp.style.color = "var(--or-nav)";
        }

    }
}   
