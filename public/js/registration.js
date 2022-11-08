const registration = document.querySelector('#registration');
const error = document.querySelector('#error');
console.log(registration);
if (registration) {
  registration.addEventListener('submit', async (event) => {
    event.preventDefault();
    const {
      method, action, user, email, password, checkpassword,
    } = event.target;
    // console.log(method, action, user, email, password);
    const response = await fetch(action, {
      method,
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        name: user.value,
        email: email.value,
        password: password.value,
        checkPassword: checkpassword.value,
      }),
    });
    const data = await response.json();
    if (data.status === 'error') {
      alert(data.message);
      console.log(data.message);
    } else {
      return window.location.assign('/');
    }
  });
}
