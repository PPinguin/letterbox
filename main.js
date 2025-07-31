const delay = ms => new Promise(res => setTimeout(res, ms));
let isOpenedMap = {};

async function openEnvelope(index) {
    if(isOpenedMap[index] == null) {
        isOpenedMap[index] = false;
    }
    const envelope = document.getElementById(`envelope${index}`);

    const flap = document.querySelector(`#envelope${index} .envelope-flap`);
    const letter = document.querySelector(`#envelope${index} .letter`);

    if (!isOpenedMap[index]) {
        envelope.classList.add('opened');
        await delay(500);
        flap.style.zIndex = 1;
        letter.classList.add('opened');

        isOpenedMap[index] = true;

    } else {
        letter.classList.remove('opened');
        await delay(500);
        flap.style.zIndex = 4;
        envelope.classList.remove('opened');

        isOpenedMap[index] = false;
    }
}
