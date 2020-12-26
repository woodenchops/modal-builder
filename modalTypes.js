export const modalOne = (context) => {
    return `<div class="modal-wrapper ${[...context._classes].join(' ')}">
                <h3 class="modal-title">${context._title}</h3>
                <p class="modal-desc">${context._desc}</p>
                <a href="${context._cta.link}" class="modal-cta ${[...context._ctaClasses].join(' ')}">${context._cta.text}</a>
            </div>`;
}