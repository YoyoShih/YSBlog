export const windowWheel = (e) => {
    let timer = null

    clearTimeout(timer)
    timer = setTimeout(() => {
        let header = document.querySelector('.header-container')
        if (e.deltaY <= 0) {
            header.classList.remove('header-container-close')
            header.classList.add('header-container-open')
        }
        else {
            header.classList.remove('header-container-open')
            header.classList.add('header-container-close')
        }
        windowOffset()
    }, 150)
}

export const windowOffset = () => {
    let sec = document.querySelector('.top-body-section')
    let dimg = document.querySelector('.daily-life-img')
    let dtitle = document.querySelector('.daily-life-title')
    let title = sec.children[0]
    let content = sec.children[1]
    if (window.pageYOffset < 240) {
        title.classList.remove('top-body-section-display')
        content.classList.remove('top-body-section-display')
        dimg.classList.remove('daily-life-img-display')
        dtitle.classList.remove('daily-life-title-fixed')
    }
    else if (window.pageYOffset > 280 && window.pageYOffset < 950) {
        dimg.classList.remove('daily-life-img-display')
        dtitle.classList.remove('daily-life-title-fixed')
        title.classList.add('top-body-section-display')
        content.classList.add('top-body-section-display')
    }
    else if (window.pageYOffset > 950 && window.pageYOffset < 1540) {
        dtitle.classList.remove('daily-life-title-fixed')
        dimg.classList.add('daily-life-img-display')
    }
    else if (window.pageYOffset > 1540 && window.pageYOffset < 2000) {
        dtitle.classList.add('daily-life-title-fixed')
    }
}