const elements = document.querySelectorAll('.playable');
elements.forEach(
    ele => {
        let src = ele.attributes.getNamedItem('datasrc').value;
        ele.addEventListener('click', () => {
            new Audio(src).play();
        })
    }
);