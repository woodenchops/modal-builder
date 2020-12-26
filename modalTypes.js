export const modalOne = (context) => {
    
    return `<div class="modal-wrapper ${[...context._classes].join(' ')}">
                <h3 class="modal-title">${context._title}</h3>
                <p class="modal-desc">${context._desc}</p>
                <div class="modal-cta-wrapper">
                ${context._cta.map(cta => {
          
                    return `<a href="${cta.link}" id=${cta.id} class="modal-cta ${[...cta.classes].join(' ')}">${cta.text}</a>`;
                    
                }).join(' ')}
                </div>
            </div>`;


};