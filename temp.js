const layer1 = document.getElementById('layer1');
const layer2 = document.getElementById('layer2');
const zoomText = document.getElementById('zoom-text');
let scroll = window.pageYOffset;


document.addEventListener('scroll', () => {
    console.log("scroll: ", scroll);
    var offset = window.pageYOffset;
    scroll = offset;
    layer1.style.width = (100 + scroll / 5) + '%';
    // console.log("layer1 width: ", layer1.style.width);
    layer2.style.width = (100 + scroll / 5) + '%';
    layer2.style.left = scroll / 50 + '%';
    zoomText.style.bottom = scroll / 10 + '%';
})

if (screen.width <= 1440) {
    layer1.style.width = 110 + '%';
    layer2.style.width = 110 + '%';
    // layer2.style.left = scroll / 100 + '%';
    zoomText.style.bottom = 0 + '%';
}