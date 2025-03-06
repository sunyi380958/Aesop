$(function (){
    let section1Top = $('.section01').offset().top;
$(window).scroll(function(){
    let scrollBar = $(window).scrollTop();
    if(scrollBar + 400 >= section1Top) {
        $('.background').addClass('active') ;
     
    }else {
        $('.background').removeClass('active');
     
    };
});

//main_visual
const sliders = document.querySelectorAll(".slider");
 
  const interval = 2800;
  const animDuration = 1000;

  for (let i = 0; i < sliders.length; ++i) {
    const slider = sliders[i];
    const dots = slider.querySelector(".dots");
    const sliderImgs = slider.querySelectorAll(".img");

    let currImg = 0;
    let prevImg = sliderImgs.length - 1;
    let intrvl;
    let timeout;

    for (let i = 0; i < sliderImgs.length; ++i) {
      const dot = document.createElement("div");
      dot.classList.add("dot");
      dots.appendChild(dot);
      dot.addEventListener("click", dotClick.bind(null, i), false);
    }

    const allDots = dots.querySelectorAll(".dot");
    allDots[0].classList.add("active-dot");

    sliderImgs[0].style.left = "0";
    timeout = setTimeout(() => {
      animateSlider();
      sliderImgs[0].style.left = "";
      intrvl = setInterval(animateSlider, interval);
    }, interval - animDuration);   

    /**
     * Animates images
     * @param {number} [nextImg] - index of next image to show
     * @param {boolean} [right = false] - animate to right
     */
    function animateSlider(nextImg, right) {
      if (!nextImg)
        nextImg = currImg + 1 < sliderImgs.length ? currImg + 2 : 1;

      --nextImg;
      sliderImgs[prevImg].style.animationName = "";

      if (!right) {
        sliderImgs[nextImg].style.animationName = "leftNext";
        sliderImgs[currImg].style.animationName = "leftCurr";
      } 
      else {
        sliderImgs[nextImg].style.animationName = "rightNext";
        sliderImgs[currImg].style.animationName = "rightCurr";
      }

      prevImg = currImg;
      currImg = nextImg;

      currDot = allDots[currImg];
      currDot.classList.add("active-dot");
      prevDot = allDots[prevImg];
      prevDot.classList.remove("active-dot");
    }

    /**
     * Decides if animate to left or right and highlights clicked dot
     * @param {number} num - index of clicked dot
     */
    function dotClick(num) {
      if (num == currImg)
        return false;

      clearTimeout(timeout);
      clearInterval(intrvl);

      if (num > currImg)
        animateSlider(num + 1);
      else
        animateSlider(num + 1, true);

      intrvl = setInterval(animateSlider, interval);
    }
  }



// section05

let paragraphs = [...document.querySelectorAll('.h3event')];
let spans = [];

paragraphs.forEach(paragraph =>{
    let htmlString = '';
    let pArray = paragraph.textContent.split('');
    for(let i = 0; i< pArray.length; i++){
        htmlString += `<span>${pArray[i]}</span>`;
    }
    paragraph.innerHTML = htmlString;
})

spans = [...document.querySelectorAll('.section05 span')];
function revealSpans(){
    for(let i = 0; i < spans.length; i++){
        if(spans[i].parentElement.getBoundingClientRect().top < window.innerHeight / 2){
            let {left, top} = spans[i].getBoundingClientRect();
            top = top - (window.innerHeight * .2 );
            let opacityValue = 1 - ((top * .01) + (left * 0.001)) < 0.1 ? 0.1 : 1 - ((top * .01) + (left * 0.001)).toFixed(2);
            opacityValue = opacityValue > 1 ? 1 : opacityValue.toFixed(2)
            spans[i].style.opacity = opacityValue;
        }
    }
}

window.addEventListener('scroll',()=>{
    revealSpans()
})
revealSpans()




});