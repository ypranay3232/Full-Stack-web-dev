function FAQ(){
    let faqs = document.querySelectorAll(".faq")
    // now loop all the faqs together
    faqs.forEach(faq =>{
        faq.addEventListener("click",() =>{
            faq.classList.toggle("active")
        })
    })
}
FAQ()