export const modalOne = (context) => {
    
    return `<div class="modal-wrapper ${[...context._classes].join(' ')}">
                <h3 class="modal-title">${context._title}</h3>
                <p class="modal-desc">${context._desc}</p>
                <div class="modal-cta-wrapper">
                ${context._cta.map(cta => {
                    return cta.id && `<a href="${cta.link}" id=${cta.id} class="modal-cta ${[...cta.classes].join(' ')}">${cta.text}</a>`;
                }).join(' ')}
                </div>
            </div>`;
};

export const modalTwo = (context) => {
    
    return `<div class="modal-wrapper ${[...context._classes].join(' ')}" style="background-image: url(${context._bgImage})">
                <h1 class="modal-title">${context._title}</h1>
                <p class="modal-desc">${context._desc}</p>
                <div class="modal-cta-wrapper">
                ${context._cta.map(cta => {
                    return cta.id && `<a href="${cta.link}" id=${cta.id} class="modal-cta ${[...cta.classes].join(' ')}">${cta.text}</a>`;
                }).join(' ')}
                </div>
            </div>`;
};


export const modalThree = (context) => {


    return `<div class="modal-wrapper half-modal">

            <div class="half-n-half-container">

            <div class="bg-image col" style="background-image: url(${context._bgImage})"></div>
            <div class="content col">
                <h3>${context._title}</h3>
                <p>${context._desc}</p>
                ${context._cta.map(cta => {
                    return cta.id && `<a href="${cta.link}" id=${cta.id} class="modal-cta ${[...cta.classes].join(' ')}">${cta.text}</a>`;
                }).join(' ')}
            </div>

            </div>

        </div>`;

}



export const setModalType = (context, props) => {
    context._modalType;

    switch(props.modalType) {
        case 'ModalOne':
            context._modalType = modalOne;
            break;
        case 'ModalTwo':
        context._modalType = modalTwo;
        break;
        case 'ModalThree':
        context._modalType = modalThree;
        break;
        default:
            context._modalType = modalOne;
            break;
    }

    return context._modalType;
}