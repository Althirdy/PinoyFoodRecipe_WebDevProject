import Data from "./Data/data.mjs";

const data =Data

const selector = (name) => {
    const base = document.querySelector(`${name}`)
    return base;
}

const navbar = selector(".navbar");
const toggle = selector(".toggle")
const count = document.querySelectorAll(".value");
var interval = 1000;
const nav = selector("nav")
const lunch_show = selector(".lunch")
const breakfast_show = selector(".breakfast")
const dinner_show=selector(".dinner")
//----------------live count

count.forEach(n => {
    var startvalue = 0
    var endValue = parseInt(n.getAttribute("data-val"));
    var duration = Math.floor(interval / endValue);
    let counter = setInterval(() => {
        startvalue += 1;
        n.textContent = `${startvalue}+`
        if (startvalue == endValue) {
            clearInterval(counter)

        }
    }, duration)

})

// END OF LIVE COUNT
//-----------Toggle Navbar
toggle.addEventListener('click', () => {
    navbar.classList.toggle("show");
    toggle.classList.toggle("show_toggle")


})



// ---------for Navbar show
var lasttop = window.scrollY
window.addEventListener("scroll", () => {
    if (lasttop < window.scrollY) {
        nav.classList.add("nav_hidden")
    } else {
        nav.classList.remove("nav_hidden")
    }
    lasttop = window.scrollY
})

// ---showing- of-data
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

display_dishes(10, 20, breakfast_show);
display_dishes(0, 10, lunch_show)
display_dishes(20,30,dinner_show)
// ----------------TESTING FOR CLICK

const card = document.querySelectorAll(".Card");

card.forEach(n => {
    n.addEventListener('click', () => {
        console.log(n.id)
    })

})




















// -----------For glider

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
                slidesToShow: 1.5,
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
                slidesToShow: 1.8,
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
                slidesToShow: 5,
                slidesToScroll: 1,
                itemWidth: 150,
                duration: 0.25
            }
        }
        ]
    });

} //<<<< FUNCTION FOR GLIDE 

glid("lunch", "dots_lunch") //lunch
glid("breakfast", "dots_breakfast")//breakfast
glid("dinner","dots_dinner")//dinner 