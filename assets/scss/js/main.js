/* eslint-disable default-case */
console.log('Sample JavaScript #5 HW #17')
let carouselContainer = null
let indicatorsContainer = null
let flagIndicators = null

function getContainer() {
  carouselContainer = document.querySelector('#carousel')
}

function createSliders(count) {
  const slideList = document.createElement('ul')
  slideList.classList.add('slides')
  carouselContainer.append(slideList)

  for (let i = 0; i < count; i++) {
    const slidesItem = document.createElement('li')
    slidesItem.setAttribute('class', !i ? 'slides__item active' : 'slides__item')
    slidesItem.innerHTML = `<a href="#">Slide ${i + 1}</a>`
    slideList.appendChild(slidesItem)
  }
}
function createIndicators(count) {
  indicatorsContainer = document.createElement('div')
  indicatorsContainer.classList.add('indicators')
  carouselContainer.append(indicatorsContainer)

  for (let i = 0; i < count; i++) {
    const indicatorsItem = document.createElement('span')
    indicatorsItem.setAttribute('class', !i ? ' indicators__item active' : ' indicators__item')
    indicatorsItem.dataset.slideTo = i
    indicatorsContainer.appendChild(indicatorsItem)
  }
}

function controls() {
  const controlsContainer = document.createElement('div')
  controlsContainer.classList.add('controls')

  for (let i = 0; i < 3; i++) {
    const controlsBtn = document.createElement('div')
    const imgControls = document.createElement('i')
    controlsBtn.classList.add('controls__item')
    imgControls.classList.add('fas')

    switch (i) {
      case 0:
        controlsBtn.classList.add('controls__prev')
        imgControls.classList.add('fa-chevron-left')
        break
      case 1:
        controlsBtn.classList.add('controls__next')
        imgControls.classList.add('fa-chevron-right')
        break
      case 2:
        controlsBtn.classList.add('controls__pause')
        imgControls.classList.add('fa-play')
        break
    }
    controlsContainer.append(controlsBtn)
    controlsBtn.append(imgControls)
  }
  carouselContainer.append(controlsContainer)
}

function carouselStyle() {
  const styleCarousel = document.createElement('style')
  styleCarousel.innerHTML = ` 
  .slides {
    position: relative;
    display: flex;
    justify-content: center;
    gap: 20px;
    list-style: none;
  }

  .slides__item {
    width: 100px;
    height: 50px;
    background-color: tomato;
    border: 2px solid;
    line-height: 50px;
    text-align: center;
  }

  .slides__item a {
    display: block;
    height: 100%;
    width: 100%;
    text-decoration: none;
    font-size: 1.5rem;
    color: #000000;
  }

  .controls {
    position: relative;
    display: flex;
    justify-content: center;
    margin-top: 20px;
    gap: 20px;
  }

  .controls i {
    font-size: 1.5rem;
    color: #a9a9a9;
    cursor: pointer;
  }

  .indicators {
    display: flex;
    gap: 20px;
    justify-content: center;

  }

  .indicators__item {
    height: 10px;
    width: 35px;
    background-color: #a9a9a9;
    cursor: pointer;
  }`
  carouselContainer.append(styleCarousel)
}

function indicatorsActive() {
  indicatorsContainer.addEventListener('click', e => {
    const target = e.target
    if (target.classList.contains('indicators__item')) {
      if (flagIndicators !== null) flagIndicators.removeAttribute('style')
      target.style.backgroundColor = 'red'
      flagIndicators = target
    }
  })
}

function createCarousel(slidesCount = 5) {
  getContainer()
  createSliders(slidesCount)
  createIndicators(slidesCount)
  controls()
  carouselStyle()
  indicatorsActive()
}

createCarousel(4)
