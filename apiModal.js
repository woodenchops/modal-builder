import Modal from './modal.js';

const fetchAPIData = async () => {
    const req = await fetch('./data/apiData.json');
    const data = await req.json();
    return data;
}

export const apiModal = fetchAPIData().then(res => {

    const apiModal = res[0].apiModalTwo;

    console.log(apiModal);


    return new Modal({
        modalType: apiModal.modalType,
        title: apiModal.title,
        bgImage: apiModal.bgImage,
        desc: apiModal.desc,
        cta: [...apiModal['cta']],
        classes: [...apiModal.classes],
        openOnPageLoad: apiModal.openOnPageLoad,
        triggerModalCTA: apiModal.triggerModalCTA,
        attachTo: apiModal.attachTo
    });

}).catch(e => console.log(e));
