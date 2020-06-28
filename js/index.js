let userClick = false;
let sliderDots = document.getElementsByClassName("slide-dot-link");
for (let i = 0; i < sliderDots.length; i++)
    sliderDots[i].addEventListener("click", () => {
        userClick = true;
    })


const getActiveSliderNo = (sliders) => {
    for (let i = 0; i < sliders.length; i++)
        if(sliders[i].checked)
            return i;
};

const slider = (activeSliderNo, sliders) => {
    setTimeout(function() {
        if (userClick == true) return;

        sliders[activeSliderNo].checked = true;      
        activeSliderNo++;      
        if (activeSliderNo == sliders.length) activeSliderNo = 0;
        slider(activeSliderNo, sliders);
    }, 5000)
};

const runSlider = () => {
    let sliders = document.getElementsByName("slide-radio-btn");
    let activeSliderNo = getActiveSliderNo(sliders);
    slider(activeSliderNo, sliders);
};

runSlider();