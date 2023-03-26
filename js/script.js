const collapsibleEls = document.querySelectorAll(`.collapsible`);

for(const el of collapsibleEls) {
    el.addEventListener(`click`, (evt) => {
        evt.currentTarget.classList.toggle(`collapsible--expanded`);
    });
}