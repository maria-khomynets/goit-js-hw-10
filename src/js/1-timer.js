function checkPassword(password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (password === 'admin123') {
        resolve('ok');
      } else {
        reject('ooops');
      }
    }, 1000);
  });

  //   data
  //     .then(res => {
  //       console.log(res);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
}
checkPassword('admin123')
  .then(res => console.log(res))
  .catch(err => console.log(err));
