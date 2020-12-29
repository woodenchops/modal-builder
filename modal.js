import {setModalType} from './modalTypes.js';

class Modal {
    constructor(props) {

        this._props = props;
        this._title = props.title;
        this._desc = props.desc;
        this._cta = props.cta;
        this._bgImage = props.bgImage || '';
        this._classes = props.classes;
        this._activeClass = 'active-modal';
        this._ctaClasses = props.cta.classes;
        this._modalActiveState = this.ModalActiveState;
        this._openOnPageLoad = props.openOnPageLoad;
        this._triggerModalCTA = props.triggerModalCTA;
        this._backdrop = `<div class="modal-backdrop"></div>`;       
        this._container = document.createElement('div');
        this._container.classList.add('modal-app');

        try {
            this._body = document.querySelector(props.attachTo) || document.querySelector('body');

            if(this._body === null || this._body === undefined) {
                throw new Error();
            }

        } catch (error) {
            console.error(error);
        }
        
        this._loadIn = props.loadIn;
        
        this.init();

    }

    get ModalActiveState() {
        return this._modalActiveState;
    }

    set ModalActiveState(val) {
        return this._modalActiveState = val;
    }

    RenderModal() {
        setModalType(this, this._props);

        if(this._modalType) {
            this._container.innerHTML = this._backdrop + this._modalType(this);
            this._body.appendChild(this._container);
            this.BackDropCloseHandler();
            this.ToggleModal();
            this.HandleCTA();
        }
    }

    DestroyModal() {
        this._container.remove();
    }

    ToggleModal() {
        this.ModalActiveState ? setTimeout(() => {this._body.classList.add(this._activeClass)}, 100)  : this._body.classList.remove(this._activeClass);
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
            try {
                const backDrop = document.querySelector('.modal-backdrop');
                backDrop.addEventListener('click', () => this.CloseModal());

                if(backDrop === null || backDrop === undefined) {
                    throw new Error();
                }

            } catch (error) {
                console.error(error);
            }
            
        }  
    }

    TriggerModalCTA() {
        if(this._triggerModalCTA) {
            try {

                const triggerModalCTA = document.querySelector(this._triggerModalCTA);
                triggerModalCTA.addEventListener('click', () => this.OpenModal());

                if(triggerModalCTA === null || triggerModalCTA === undefined) {
                    throw new Error();
                }
                
            } catch (error) {
                console.error(error);
            }
        } 
    }

    HandleCTA(){
        this._cta && this._cta.length > 0 && this._cta.map(cta => {
            if(!cta.id) {
                return;
            }
            let button = document.getElementById(cta.id);
            return button.addEventListener('click', () => {
               return cta.eventHandler && cta.eventHandler();
            });
        });
    }

    init() {
        this.ModalActiveState = this._openOnPageLoad;
        (this._loadIn && this._openOnPageLoad) ? setTimeout(() => {this.RenderModal()}, this._loadIn) : this.RenderModal()
        this.TriggerModalCTA();
    }
    
}

export default Modal;
