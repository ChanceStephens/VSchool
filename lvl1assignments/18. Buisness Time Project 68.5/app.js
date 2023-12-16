
document.addEventListener(`DOMContentLoaded`, () => {
    const navDropButton = document.querySelector(`.navigation`);
    const navList = document.querySelector(`.navDropContent`); 
    const navLinks = document.querySelectorAll(`.navDropContent a`);
    const pageFade = document.querySelector(`.pageContainer`);
    navList.style.display = `none`;
    pageFade.style.opacity =`1`;
    pageFade.style.transition = `2s`;

    navDropButton.addEventListener(`mouseenter`, () => {
        navList.style.display = `block`; 
        navDropButton.style.backgroundColor = `rgb(144, 232, 252, .4)`;
        navDropButton.style.borderRadius = `10px`;
        pageFade.style.opacity = `.2`;
    });
    navDropButton.addEventListener(`mouseleave`, () => {
        navList.style.display = `none`;
        navDropButton.style.backgroundColor = ``; 
        pageFade.style.transition = `1s`; 
    });

    navList.addEventListener(`mouseenter`, () => {
        navList.style.display = `block`;
        pageFade.style.opacity = `.2`;
    });
    navList.addEventListener(`mouseleave`, () => {
        navList.style.display = `none`;
        pageFade.style.opacity = `1`;
        pageFade.style.transition = `1s`;
    });

    navLinks.forEach((link) => {
        link.addEventListener(`mouseenter`, () => {
            link.style.backgroundColor = `rgb(144, 232, 252, .4)`;
        });
        link.addEventListener(`mouseleave`, () => {
            link.style.backgroundColor = ``;
        });
    })    

    const picContainers = document.querySelectorAll(`.locations .picContainer`);
    
    picContainers.forEach((picContainer) => {
        const pic = picContainer.querySelector(`img`);
        const picCap = picContainer.querySelector(`figcaption`);

        picContainer.addEventListener(`mouseover`, () => {
            pic.style.display = `none`;
            picCap.style.display = `initial`;
        });
        picContainer.addEventListener(`mouseout`, () => {
            pic.style.display = `initial`;
            picCap.style.display = `none`;
        });
    });  
}); 
