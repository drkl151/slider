# [View a demo](https://drkl151.github.io/slider/slider.html)

# Slider
__A simple slider in pure JavaScript.__

![slider](slider.gif)
> Description + photo. Stylish and compact.

## Advantages of this slider:

* The script uses dynamic values, so the number of images is unlimited and editable.
* Easy to manipulate and style, you can give the slider any look.
* This slider will be a good addition to many projects.
## All Javascript:
__There is not much Javascript code, it is easy to understand and does not require comments.__
```javascript
const wrapperSlider = document.querySelector(".wrapper-slider");
const upBtn = document.querySelector(".up-button");
const downBtn = document.querySelector(".down-button");
const mainSlide = document.querySelector(".main-slide");
const slidesCount = mainSlide.querySelectorAll("div").length;
const slider = document.querySelector(".slider");

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowUp') {
    changeSlide("up");
  } else if (e.key === 'ArrowDown') {
    changeSlide("down");
  }
})

slider.style.top = `-${(slidesCount - 1) * 100}vh`;

let activeSlideIndex = 0;

upBtn.addEventListener('click', () => {
  changeSlide("up");
});

downBtn.addEventListener('click', () => {
  changeSlide("down");
});


function changeSlide(direction) {
  if (direction === "up") {
    activeSlideIndex++;
    if (activeSlideIndex === slidesCount) {
      activeSlideIndex = 0;
    }
  } else if (direction === "down") {
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesCount - 1;
    }
  }

  const height = wrapperSlider.clientHeight

  mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`;
  slider.style.transform = `translateY(${activeSlideIndex * height}px)`;
}
```
