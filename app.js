import Modal from './modal.js';


const homepageModal = new Modal({
    modalType: 'ModalTwo',
    title: 'My Modal',
    bgImage: './assets/images/christmas-winter-composition-frame-made-600w-1224165394.jpg',
    desc: 'big sale, blah, blah',
    cta: [
        {id: 'learnMore', text: 'LEARN MORE', link: '#', classes: ['learn-more'], eventHandler: () => {alert('Learn more')}},
        {id: 'cancel', text: 'CANCEL', link: '#', classes: ['cancel'], eventHandler: () => {homepageModal.CloseModal();}}
    ],
    classes: ['modal-body', 'modalOne'],
    openOnPageLoad: true,
    triggerModalCTA: '.openModal',
    attachTo: '.page-787'
});


console.log('continued code')