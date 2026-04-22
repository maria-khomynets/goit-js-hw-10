// const form = document.querySelector('.feedback-form');
// const localStorageKey = 'feedback-form-state';

// let formData = {
//   email: '',
//   message: '',
// };

// // ВІДНОВЛЕННЯ (ОДРАЗУ ПРИ ЗАПУСКУ)
// dataStorage();

// function dataStorage() {
//   const savedData = localStorage.getItem(localStorageKey);

//   if (!savedData) return;

//   const parsedData = JSON.parse(savedData);

//   formData = parsedData;

//   form.elements.email.value = formData.email;
//   form.elements.message.value = formData.message;
// }

// // INPUT — збереження
// form.addEventListener('input', handleInput);

// function handleInput(event) {
//   formData[event.target.name] = event.target.value;

//   localStorage.setItem(localStorageKey, JSON.stringify(formData));
// }

// // SUBMIT
// form.addEventListener('submit', handleSubmit);

// function handleSubmit(event) {
//   event.preventDefault();

//   if (formData.email === '' || formData.message === '') {
//     alert('Fill please all fields');
//     return;
//   }

//   console.log(formData);

//   localStorage.removeItem(localStorageKey);

//   formData = {
//     email: '',
//     message: '',
//   };

//   form.reset();
// }

// const form = document.querySelector('.feedback-form');

// form.addEventListener('submit', handleSubmit);
// form.addEventListener('input', handleInput);
// const localStorageKey = 'goit-example-message';
// function handleInput(event) {
//   const email = form.elements.email.value;

//   const message = form.elements.message.value;
//   const data = {
//     email: email,
//     message: message,
//   };
//   localStorage.setItem(localStorageKey, JSON.stringify(data));
// }
// function handleSubmit(event) {
//   event.preventDefault();

//   localStorage.removeItem(localStorageKey);
//   form.reset();
// }
// function savedData() {
//   const data = JSON.parse(localStorage.getItem(localStorageKey));
//   console.log('data', data);
//   form.elements.email.value = data.email;
//   form.elements.message.value = data.message;
// }
// savedData();
