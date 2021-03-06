import Modal from './modal.js';


export const homePageModal = () => {
    return new Modal({
            modalType: 'ModalThree',
            title: 'My Modal',
            bgImage: './assets/images/christmas-winter-composition-frame-made-600w-1224165394.jpg',
            desc: 'big sale, blah, blah',
            cta: [
                {id: 'learnMore', text: 'LEARN MORE', link: '#', classes: ['learn-more'], eventHandler: () => {alert('Learn more')}},
                {id: 'bookNow', text: 'BOOK NOW', link: '#', classes: ['learn-more'], eventHandler: () => {alert('Book Now')}},
                {id: 'cancel', text: 'CANCEL', link: '#', classes: ['cancel'], eventHandler: () => {homePageModal.CloseModal();}}
            ],
            classes: ['modal-body', 'modalTwo'],
            openOnPageLoad: true,
            triggerModalCTA: '.openModal',
            attachTo: '.page-787'
        });
}

export const homePageHalfAndHalfModal = () => {
    return new Modal({
        modalType: 'ModalThree',
        title: 'My Modal',
        bgImage: './assets/images/christmas-winter-composition-frame-made-600w-1224165394.jpg',
        desc: 'big sale, blah, blah',
        cta: [
            {id: 'bookNow', text: 'BOOK NOW', link: '#', classes: ['learn-more'], eventHandler: () => {alert('Book Now')}},
        ],
        classes: ['modal-body', 'modalTwo'],
        openOnPageLoad: true,
        triggerModalCTA: '.openModal',
        attachTo: '.page-787'
    });
}
