
document.addEventListener(`DOMContentLoaded`, () => {
    const navDropButton = document.querySelector(`.navigation`);
    const navList = document.querySelector(`.navDropContent`); 
    const navLinks = document.querySelectorAll('.navDropContent a');
    const pageFade = document.querySelector(`.pageContainer`);

    navList.style.display = `none`;
    pageFade.style.opacity =`1`;
    pageFade.style.transition = `2s`;   

    navDropButton.addEventListener(`mouseenter`, () => {
        navList.style.display = `block`; 
        navDropButton.style.backgroundColor = `rgba(255, 255, 255, .5)`;
        navDropButton.style.borderRadius = '10px';
        pageFade.style.opacity = `.2`;
        pageFade.style.transition = `1s`;
    });
    navDropButton.addEventListener(`mouseleave`, () => {
        navList.style.display = `none`;
        navDropButton.style.backgroundColor = ``;
        pageFade.style.opacity =`1`;        
        pageFade.style.transition = `1s`;
    });

    navList.addEventListener(`mouseenter`, () => {
        navList.style.display = `block`;
        pageFade.style.opacity = `.2`;
        pageFade.style.transition = `1s`;
    });
    navList.addEventListener(`mouseleave`, () => {
        navList.style.display = `none`;
        pageFade.style.opacity = `1`;
        pageFade.style.transition = `1s`;
    });

    navLinks.forEach((link) => {
        link.addEventListener(`mouseenter`, () => {
            link.style.backgroundColor = `rgba(255, 255, 255, .5)`;
        });
        link.addEventListener(`mouseleave`, () => {
            link.style.backgroundColor = ``;
        });
    })    
});