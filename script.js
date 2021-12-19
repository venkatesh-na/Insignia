const bar = document.querySelector(".bar")
const nav = document.querySelector(".nav-container")
const fl = document.querySelector(".feature-left")
const fr = document.querySelector(".feature-right")
const tl = document.querySelector(".test-left")
const tr = document.querySelector(".test-right")
const feature_div = document.querySelectorAll(".features > div")
const testimonial_div = document.querySelectorAll(".testimonials > div")
const scroll_up = document.querySelector(".scroll-up")
let moveTestimonial = 0
let moveFeature = 0
scroll_up.addEventListener("click",()=>{
    window.scrollTo(0,0)
})
bar.addEventListener("click",()=>{
    nav.classList.toggle("nav-toggle")
    bar.classList.toggle("bar-toggle")
})
fl.addEventListener("click",()=>{
    moveFeature += 110;
    feature_div.forEach(e=>{
        e.style.transform = `translateX(-${moveFeature}px)`
    })
})
fr.addEventListener("click",()=>{
    moveFeature -= 110
    feature_div.forEach(e=>{
        e.style.transform = `translateX(${moveFeature}px)`
    })
})
tl.addEventListener("click",()=>{
    moveTestimonial += 110
    testimonial_div.forEach(e=>{
        e.style.transform = `translateX(-${moveTestimonial}%)`
    })
})
tr.addEventListener("click",()=>{
    moveTestimonial -= 110;
    testimonial_div.forEach(e=>{
        e.style.transform = `translate(${moveTestimonial}%)`
    })
})