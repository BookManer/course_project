// Modules
import './module.js';

// Styles
import './style.sass';

(async () => {
    console.log('start');
    await waitForMilliseconds(5000);
    console.log('in 5 seconds - worked!!');
})();

async function waitForMilliseconds(milliseconds) {
    return new Promise((res, rej) => {
        setTimeout(res, milliseconds);
    })
}