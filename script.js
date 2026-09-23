/* ==================================================
   HAFSA SHAREEF
   EDITORIAL PORTFOLIO
================================================== */


/* ==================================================
   PAGE LOADER
================================================== */

window.addEventListener("load", () => {

    const loader =
        document.querySelector(".page-loader");

    setTimeout(() => {

        loader.classList.add("hide");

    }, 700);

});



/* ==================================================
   MOBILE NAVIGATION
================================================== */

const menuToggle =
    document.getElementById("menuToggle");

const mainNav =
    document.getElementById("mainNav");


menuToggle.addEventListener("click", () => {

    mainNav.classList.toggle("open");

    document.body.classList.toggle("no-scroll");

});



/* Close mobile navigation */

const navigationLinks =
    document.querySelectorAll(".main-nav a");


navigationLinks.forEach(link => {

    link.addEventListener("click", () => {

        mainNav.classList.remove("open");

        document.body.classList.remove("no-scroll");

    });

});



/* ==================================================
   SCROLL REVEAL
================================================== */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});



/* ==================================================
   ACTIVE NAVIGATION
================================================== */

const sections =
    document.querySelectorAll("section[id]");


const navLinks =
    document.querySelectorAll(".main-nav a");


const sectionObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) {
                    return;
                }


                const currentId =
                    entry.target.getAttribute("id");


                navLinks.forEach(link => {

                    link.classList.remove(
                        "active"
                    );


                    if (
                        link.getAttribute("href") ===
                        `#${currentId}`
                    ) {

                        link.classList.add(
                            "active"
                        );

                    }

                });

            });

        },

        {
            rootMargin: "-30% 0px -60% 0px"
        }

    );


sections.forEach(section => {

    sectionObserver.observe(section);

});



/* ==================================================
   IMAGE LOADING
================================================== */

const images =
    document.querySelectorAll("img");


images.forEach(image => {

    if (image.complete) {

        image.classList.add("loaded");

    } else {

        image.addEventListener(
            "load",
            () => {

                image.classList.add(
                    "loaded"
                );

            }
        );

    }

});



/* ==================================================
   CERTIFICATE LIGHTBOX
================================================== */

const certificateImages =
    document.querySelectorAll(
        ".certificate-image img"
    );


const lightbox =
    document.createElement("div");


lightbox.className = "lightbox";


lightbox.innerHTML = `

    <button
        class="lightbox-close"
        aria-label="Close certificate"
    >
        ×
    </button>

    <img
        src=""
        alt="Certificate preview"
    >

`;


document.body.appendChild(lightbox);


const lightboxImage =
    lightbox.querySelector("img");


const lightboxClose =
    lightbox.querySelector(
        ".lightbox-close"
    );


certificateImages.forEach(image => {

    image.style.cursor = "zoom-in";


    image.addEventListener("click", () => {

        lightboxImage.src =
            image.src;

        lightboxImage.alt =
            image.alt;

        lightbox.classList.add(
            "active"
        );

        document.body.classList.add(
            "no-scroll"
        );

    });

});


function closeLightbox() {

    lightbox.classList.remove(
        "active"
    );

    document.body.classList.remove(
        "no-scroll"
    );

}


lightboxClose.addEventListener(
    "click",
    closeLightbox
);


lightbox.addEventListener(
    "click",
    event => {

        if (
            event.target === lightbox
        ) {

            closeLightbox();

        }

    }
);



/* ==================================================
   ESCAPE KEY
================================================== */

document.addEventListener(
    "keydown",
    event => {

        if (event.key === "Escape") {

            closeLightbox();

            mainNav.classList.remove(
                "open"
            );

            document.body.classList.remove(
                "no-scroll"
            );

        }

    }
);



/* ==================================================
   PROJECT IMAGE PARALLAX
================================================== */

const projectImages =
    document.querySelectorAll(
        ".project-image img"
    );


projectImages.forEach(image => {

    const parent =
        image.closest(
            ".project-image"
        );


    parent.addEventListener(
        "mousemove",
        event => {

            if (
                window.innerWidth < 900
            ) {
                return;
            }


            const rect =
                parent.getBoundingClientRect();


            const x =
                (event.clientX - rect.left)
                / rect.width
                - .5;


            const y =
                (event.clientY - rect.top)
                / rect.height
                - .5;


            image.style.transform =
                `
                scale(1.04)
                translate(
                    ${x * 8}px,
                    ${y * 8}px
                )
                `;

        }
    );


    parent.addEventListener(
        "mouseleave",
        () => {

            image.style.transform =
                "scale(1)";

        }
    );

});



/* ==================================================
   MOUSE MAGNETIC EFFECT
================================================== */

const circleButton =
    document.querySelector(
        ".circle-link"
    );


if (circleButton) {

    circleButton.addEventListener(
        "mousemove",
        event => {

            if (
                window.innerWidth < 900
            ) {
                return;
            }


            const rect =
                circleButton.getBoundingClientRect();


            const x =
                event.clientX -
                rect.left -
                rect.width / 2;


            const y =
                event.clientY -
                rect.top -
                rect.height / 2;


            circleButton.style.transform =
                `
                translate(
                    ${x * .12}px,
                    ${y * .12}px
                )
                `;

        }
    );


    circleButton.addEventListener(
        "mouseleave",
        () => {

            circleButton.style.transform =
                "";

        }
    );

}



/* ==================================================
   SMOOTH ANCHOR NAVIGATION
================================================== */

document.querySelectorAll(
    'a[href^="#"]'
).forEach(anchor => {

    anchor.addEventListener(
        "click",
        event => {

            const href =
                anchor.getAttribute(
                    "href"
                );


            if (
                href === "#" ||
                !href
            ) {
                return;
            }


            const target =
                document.querySelector(
                    href
                );


            if (!target) {
                return;
            }


            event.preventDefault();


            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }
    );

});



/* ==================================================
   CV DOWNLOAD FEEDBACK
================================================== */

const cvButton =
    document.querySelector(
        ".nav-cv"
    );


if (cvButton) {

    cvButton.addEventListener(
        "click",
        () => {

            const original =
                cvButton.innerHTML;


            cvButton.innerHTML =
                "Downloading ↓";


            setTimeout(() => {

                cvButton.innerHTML =
                    original;

            }, 1800);

        }
    );

}



/* ==================================================
   CURRENT YEAR
================================================== */

const yearElement =
    document.getElementById(
        "year"
    );


if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}



/* ==================================================
   SUBTLE SCROLL COLOR EFFECT
================================================== */

const header =
    document.querySelector(
        ".site-header"
    );


window.addEventListener(
    "scroll",
    () => {

        if (
            window.scrollY > 40
        ) {

            header.style.boxShadow =
                "0 8px 30px rgba(30,25,20,.05)";

        } else {

            header.style.boxShadow =
                "none";

        }

    }
);



/* ==================================================
   CONSOLE
================================================== */

console.log(
    "%cHafsa Shareef",
    "font-family:serif;font-size:24px;color:#b95f46;"
);

console.log(
    "%cMCA • Data Analytics • Full-Stack Development",
    "font-size:12px;color:#77736b;"
);