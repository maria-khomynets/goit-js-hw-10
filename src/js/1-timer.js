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
    console.log(currentTime);
    selectedTime = selectedDates[0].getTime();
    console.log(selectedTime);
    if (selectedTime <= currentTime) {
      iziToast.show({
        title: 'Warning',
        message: 'Please choose a date in the future',
        backgroundColor: 'pink',
        position: 'topLeft',
        timeout: 8000,
      });
      startBtn.disabled = true;
      return;
    } else {
      startBtn.disabled = false;
    }
  },
};

flatpickr(datetimePicker, options);

function handleClick() {
  startBtn.disabled = true;
  datetimePicker.disabled = true;
  intervalId = setInterval(() => {
    const currentTime = Date.now();
    const deltaTime = selectedTime - currentTime;
    if (deltaTime <= 0) {
      clearInterval(intervalId);

      datetimePicker.disabled = false;
      return;
    }
    const objTime = convertMs(deltaTime);

    dataDays.innerHTML = String(objTime.days).padStart(2, '0');
    dataHours.innerHTML = String(objTime.hours).padStart(2, '0');
    dataMinutes.innerHTML = String(objTime.minutes).padStart(2, '0');
    dataSeconds.innerHTML = String(objTime.seconds).padStart(2, '0');
  }, 1000);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
