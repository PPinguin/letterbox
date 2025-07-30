const delay = ms => new Promise(res => setTimeout(res, ms));
let isOpened = false;

async function openEnvelope(index) {
    const envelope = document.getElementById(`envelope${index}`);

    const flap = document.querySelector(`#envelope${index} .envelope-flap`);
    const letter = document.querySelector(`#envelope${index} .letter`);

    if (!isOpened) {
        envelope.classList.add('opened');
        await delay(500);
        flap.style.zIndex = 1;
        letter.classList.add('opened');

        isOpened = true;

        // Add some sparkle effect
    } else {
        letter.classList.remove('opened');
        await delay(500);
        flap.style.zIndex = 4;
        envelope.classList.remove('opened');

        isOpened = false;
    }
}
