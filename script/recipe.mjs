import feature_dishes from "./Data/feature_dishes.mjs"

const data = feature_dishes


const selector = (name) => {
    const base = document.querySelector(`${name}`)
    return base;
}


console.log(data)
const nav = selector("nav")
const feature = selector(".featured_dish")
// NAVBAR HIDE 
var lasttop = window.scrollY


window.addEventListener("scroll", () => {
    if (lasttop < window.scrollY) {
        nav.classList.add("nav_hidden")
    } else {
        nav.classList.remove("nav_hidden")
    }
    lasttop = window.scrollY
})

const display_dishes = (start, end, classGlide) => {
    const show = data.slice(start, end)
    const show_display = show.map(n => (
    `<div class="Card" id=${n.id} >
             <img src="${n.image}" alt="" class="dishes">
             <h3>${n.dish}</h3>
             <p>${n.servings}</p>
         <div class="desc">
             <p>Cook Time: ${n.cook_time}</p>
        </div>
    </div>`
    ))

    classGlide.innerHTML = show_display.join('')

}


display_dishes(0,10,feature)
function glid(class_for_glide, dots) {
    new Glider(document.querySelector(`.${class_for_glide}`), {
        slidesToShow: 2,
        slidesToScroll: 1,
        draggable: true,
        dots: `.${dots}`,
        responsive: [{
            // screens greater than >= 775px
            breakpoint: 200,
            settings: {
                // Set to `auto` and provide item width to adjust to viewport
                slidesToShow: 1.8,
                slidesToScroll: 'auto',
                itemWidth: 50,
                duration: 0.25
            }
        },
        {
            // screens greater than >= 775px
            breakpoint: 400,
            settings: {
                // Set to `auto` and provide item width to adjust to viewport
                slidesToShow: 2,
                slidesToScroll: 'auto',
                itemWidth: 50,
                duration: 0.25
            }
        },
        {
            // screens greater than >= 775px
            breakpoint: 600,
            settings: {
                // Set to `auto` and provide item width to adjust to viewport
                slidesToShow: 2.5,
                slidesToScroll: 'auto',
                itemWidth: 50,
                duration: 0.25
            }
        },
        {
            // screens greater than >= 775px
            breakpoint: 800,
            settings: {
                // Set to `auto` and provide item width to adjust to viewport
                slidesToShow: 3,
                slidesToScroll: 'auto',
                itemWidth: 150,
                duration: 0.25
            }
        }, {
            // screens greater than >= 1024px
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                itemWidth: 150,
                duration: 0.25
            }
        },
        {
            // screens greater than >= 1024px
            breakpoint: 1300,
            settings: {
                slidesToShow: 4.7,
                slidesToScroll: 1,
                itemWidth: 150,
                duration: 0.25
            }
        }
        ]
    });

}


glid("featured_dish","dots_featured_dish")

// -------------------------
