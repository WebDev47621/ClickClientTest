const test = document.querySelector('.test');

function addItem(event) {
    const x = event.clientX;
    const y = event.clientY;
    console.log(x, y);

    const item = document.createElement('div');
    
    item.style.top = y + 'px';
    item.style.left = x + 'px';
    item.style.transform = 'translate(-50%, -50%)';
    item.classList.add('item');

    test.appendChild(item);
}

test.addEventListener('click', addItem);