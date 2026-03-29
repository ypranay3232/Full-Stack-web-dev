function userrating(){
    // first select all stars, this puts all 5 stars in nodelist (stars)
    let stars = document.querySelectorAll(".stars i")

    // now loop the stars : if a star is clicked (index 1 keep tracks of stars clicked )
    stars.forEach((star,index1)=>{
        // now add click function 
        star.addEventListener("click",()=>{
            console.log(index1)
            // now we compare index1 and 2 : (if the star clicked is >= index2 if yes we add color it it via .active else remove gold color if not applied else keep it as it is)
            stars.forEach((star,index2) =>{
                index1>=index2 ? star.classList.add("active") : star.classList.remove("active")
            })
        })
    })
}
userrating()