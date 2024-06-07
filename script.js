let imgs=document.querySelectorAll('.header-slider ul img')
let pbtn=document.querySelector('.control_previous')
let nbtn=document.querySelector('.control_next')

let n = 0;

function changeSlide(){
    for (let i=0; i < imgs.length; i++ ){
        imgs[i].style.display='none';
    }
    imgs[n].style.display='block';
}

changeSlide()

pbtn.addEventListener('click',(e)=>{
    if(n>0){
        n--;
    }
    else{
        n=imgs.length-1;
    }
    changeSlide()
})

nbtn.addEventListener('click',(e)=>{
    if(n<imgs.length-1){
        n++;
    }
    else{
        n=0;
    }
    changeSlide()
})

let scrool=document.querySelectorAll('.products');

for(let i of scrool){
    i.addEventListener('wheel',(e)=>{
        e.preventDefault();
        i.scrollLeft+=e.deltaY
    })
}