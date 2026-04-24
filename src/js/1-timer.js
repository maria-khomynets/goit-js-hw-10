import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const datetimePicker = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('[data-start]');
const dataDays = document.querySelector('[data-days]');
const dataHours = document.querySelector('[data-hours]');
const dataMinutes = document.querySelector('[data-minutes]');
const dataSeconds = document.querySelector('[data-seconds]');

startBtn.addEventListener('click', handleClick);
startBtn.disabled = true;

let selectedTime = null;
let intervalId = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const currentTime = Date.now();
    selectedTime = selectedDates[0].getTime();

    if (selectedTime <= currentTime) {
      iziToast.show({
        title: 'Warning',
        message: 'Please choose a date in the future',
        backgroundColor: 'pink',
        position: 'topLeft',
        timeout: 8000,
      });
      startBtn.disabled = true;
    } else {
      startBtn.disabled = false;
    }
  },
};

flatpickr(datetimePicker, options);

function handleClick() {
  startBtn.disabled = true;
  datetimePicker.disabled = true;

  if (intervalId) {
    clearInterval(intervalId);
  }

  intervalId = setInterval(() => {
    const currentTime = Date.now();
    const deltaTime = selectedTime - currentTime;

    if (deltaTime <= 0) {
      clearInterval(intervalId);

      dataDays.textContent = '00';
      dataHours.textContent = '00';
      dataMinutes.textContent = '00';
      dataSeconds.textContent = '00';

      datetimePicker.disabled = false;
      startBtn.disabled = true;

      return;
    }

    const objTime = convertMs(deltaTime);

    dataDays.textContent = addLeadingZero(objTime.days);
    dataHours.textContent = addLeadingZero(objTime.hours);
    dataMinutes.textContent = addLeadingZero(objTime.minutes);
    dataSeconds.textContent = addLeadingZero(objTime.seconds);
  }, 1000);
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
