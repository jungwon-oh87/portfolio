console.log("js called");
const layer1 = document.getElementById('layer1');
const layer2 = document.getElementById('layer2');
const zoomText = document.getElementById('zoom-text');
let scroll = window.pageYOffset;


document.addEventListener('scroll', () => {
    var offset = window.pageYOffset;
    scroll = offset;
    console.log("scroll check: ", scroll);
    layer1.style.width = (100 + scroll / 5) + '%';
    layer2.style.width = (100 + scroll / 5) + '%';
    layer2.style.left = scroll / 50 + '%';
    // zoomText.style.top = -scroll / 80 + '%';
    zoomText.style.bottom = scroll / 10 + '%';
    // if (scroll == 0) {
    //     console.log("called");
    //     zoomText.style.bottom = "5%";
    // }
})
