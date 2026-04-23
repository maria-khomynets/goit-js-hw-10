import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const delay = Number(event.target.elements.delay.value);
  const stateRs = event.target.elements.state.value;

  let state;

  if (delay === 0) {
    return;
  }

  if (stateRs === 'fulfilled') {
    state = true;
  } else if (stateRs === 'rejected') {
    state = false;
  }

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === true) {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });

  promise
    .then(value => {
      iziToast.show({
        title: 'OK',
        message: `✅ Fulfilled promise in ${value}ms`,
        titleColor: '#ffffff',
        messageColor: '#ffffff',
        backgroundColor: '#59a10d',
        timeout: 8000,
      });
    })
    .catch(error => {
      iziToast.show({
        title: 'Error',
        message: `❌ Rejected promise in ${error}ms`,
        titleColor: '#ffffff',
        messageColor: '#ffffff',
        backgroundColor: '#ef4040',
        timeout: 8000,
      });
    });
}
