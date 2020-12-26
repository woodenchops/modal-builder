import {modalOne} from './modalTypes.js';

class Modal {
    constructor(props) {
        this._modalType = props.modalType;
        this._title = props.title;
        this._desc = props.desc;
        this._cta = props.cta;
        this._classes = props.classes;
        this._ctaClasses = props.cta.classes;
        this._modalActiveState = this.ModalActiveState;
        this._openOnPageLoad = props.openOnPageLoad;
        this._triggerModalCTA = props.triggerModalCTA;
        this._backdrop = `<div class="modal-backdrop"></div>`;       
        this._container = document.getElementById(props.container);
        
        this.init();

    }

    get ModalActiveState() {
        return this._modalActiveState;
    }

    set ModalActiveState(val) {
        return this._modalActiveState = val;
    }

    RenderModal() {
        this._container.innerHTML = this._backdrop + this._modalType(this);
        this.ToggleModal();
    }

    DestroyModal() {
        this._container.remove();
    }

    ToggleModal() {
        this.ModalActiveState ? this._container.classList.add('active') : this._container.classList.remove('active');
    }

    CloseModal() {
        this.ModalActiveState = false;
        this.ToggleModal();
    }

    OpenModal() {
        this.ModalActiveState = true;
        this.ToggleModal();
    }

    BackDropCloseHandler() {
        if(this.ModalActiveState) {
            const backDrop = document.querySelector('.modal-backdrop');
            backDrop.addEventListener('click', () => this.CloseModal());
        }  
    }

    LearnMoreHandler() {
        if(this.ModalActiveState) {
            const learnMore = document.querySelector('.modal-cta');
            learnMore.addEventListener('click', () => alert('hghg'));
        }  
    }

    TriggerModalCTA() {
        const triggerModalCTA = document.querySelector(this._triggerModalCTA);
        triggerModalCTA.addEventListener('click', () => this.OpenModal());
    }

    init() {
        this.ModalActiveState = this._openOnPageLoad;
        this.RenderModal();
        this.BackDropCloseHandler();
        this.LearnMoreHandler();
        this.TriggerModalCTA();
    }
    
}

const muhModal = new Modal({
    modalType: modalOne,
    title: 'My Modal',
    classes: ['bob', 'jogn'],
    desc: 'big sale, blah, blah',
    cta: {text: 'LEARN MORE', link: '#', classes: ['huhu']},
    container: 'modal-app',
    openOnPageLoad: true,
    triggerModalCTA: '.openModal'
});
