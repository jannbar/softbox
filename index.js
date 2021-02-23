console.log('%c🔦 Hello, friend!', 'color: #ffc600')

const controls = document.querySelector('.color-switches')
const body = document.querySelector('body')
const defaultBtn = document.querySelector('.color-btn.default-color')
const colorInput = document.querySelector('.color-input')

const colors = ['#EEDD82', 'rebeccapurple', '#0198e1', '#fdd9ca']

const switchBg = e => {
  const color = e.target.dataset.color

  body.style.backgroundColor = color

  const otherActiveButtons = document.querySelectorAll('.color-btn.active')
  if (otherActiveButtons.length > 0) {
    otherActiveButtons.forEach(btn => {
      btn.classList.remove('active')
    })
  }

  e.target.classList.add('active')
}

const renderBtn = color => {
  const btn = document.createElement('button')
  btn.classList.add('color-btn')
  btn.style.backgroundColor = color
  btn.setAttribute('data-color', color)
  btn.addEventListener('click', e => switchBg(e))
  defaultBtn.after(btn)
}

colors.forEach(color => {
  renderBtn(color)
})

colorInput.addEventListener('change', e => {
  const color = e.target.value

  const otherActiveButtons = document.querySelectorAll('.color-btn.active')
  if (otherActiveButtons.length > 0) {
    otherActiveButtons.forEach(btn => {
      btn.classList.remove('active')
    })
  }

  body.style.backgroundColor = color
})

defaultBtn.addEventListener('click', e => switchBg(e))
