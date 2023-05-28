const reveal = Array.from(document.querySelectorAll('.reveal'))
const visible = () => {
    reveal.forEach (item =>{
        const {top,bottom} = item.getBoundingClientRect();
        const isVisible = (top < window.innerHeight) && (bottom > 0)
        if (isVisible) {
            item.classList.add('reveal_active');
        } else {
            item.classList.remove('reveal_active');
        }

    });
    
};
window.addEventListener('scroll', visible);