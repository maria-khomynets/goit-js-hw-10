import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
const datetimePicker = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('[data-start]');
startBtn.disabled = true;
let selectedTime = null;
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
    } else (
       startBtn.disabled = false; 
    )
  },
};

flatpickr(datetimePicker, options);
