let status = false;
let parent = document.createElement("div");
let submitBtn = document.querySelector('.submit');

submitBtn.addEventListener('click', e => {
    if (!status) {
        let basicInfo = document.querySelector('.basic-info');
        basicInfo.prepend(parent);
        parent.innerHTML = `<p style="background: red; color: white; padding: 1rem; margin: 1rem;">Some failing text</p>`;

    }
    
});


