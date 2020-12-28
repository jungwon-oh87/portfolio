const layer1 = document.getElementById('layer1');
const layer2 = document.getElementById('layer2');
const zoomText = document.getElementById('zoom-text');
let scroll = window.pageYOffset;


document.addEventListener('scroll', () => {
    var offset = window.pageYOffset;
    scroll = offset;
    layer1.style.width = (100 + scroll / 5) + '%';
    layer2.style.width = (100 + scroll / 5) + '%';
    layer2.style.left = scroll / 50 + '%';
    zoomText.style.bottom = scroll / 10 + '%';
})
