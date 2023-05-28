const rotatorAll = Array.from(document.querySelectorAll('.rotator__case'));
setInterval(() => {
    let elActive = rotatorAll.findIndex(item => item.className.includes('rotator__case_active'));
    rotatorAll[elActive].classList.remove('rotator__case_active');
    elActive++;
    rotatorAll[elActive].classList.add('rotator__case_active');
    if (elActive === (rotatorAll.length -1)){
        elActive = 0;
        rotatorAll[elActive].classList.add('rotator__case_active');
    }
}, 1000)






