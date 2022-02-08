const slides=document.querySelectorAll('.slide' )

for ( const slide of slides){
    slide.addEventListener( 'click',()=>{
            cleareActive()
            slide.classList.add('active')
        }
    )
}
function cleareActive(){
    slides.forEach( (i ) =>{
        i.classList.remove('active')
    })
}