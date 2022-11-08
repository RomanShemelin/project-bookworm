const login = document.querySelector('#login');
console.log(login);
const error = document.querySelector('#error');
if (login) {
  login.addEventListener('submit', async (event) => {
    event.preventDefault();
    const {
      email, password, method, action,
    } = event.target;
    console.log(email, password);
    const response = await fetch(action, {
      method,
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        email: email.value,
        password: password.value,
      }),
    });
    const data = await response.json();
    if (data.status === 'error') {
      error.innerHTML = data.message;
      console.log(data.message);
    } else {
      return window.location.assign('/');
    }
  });
}
