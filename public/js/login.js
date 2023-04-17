const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const name = document.querySelector('#name-login').value.trim();
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (name && email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace('/');

    } else {
      alert(response.statusText);
    }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#name-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();
<<<<<<< HEAD
=======
  const favoriteEvent = document.querySelector('#favorite').value.trim();
>>>>>>> d007e0448b9e73a9bd89002c9ec20364a8d3813d
  // const tshirt = document.querySelector('#tshirt-signup').value.trim();
  // const swim = document.querySelector('#swim-signup').value.trim();
  // const bike = document.querySelector('#bike-signup').value.trim();
  // const run = document.querySelector('#run-signup').value.trim();
  // const volunteer = document.querySelector('#volunteer-signup').value.trim();

  if (name && email && password && favoriteEvent) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ name, email, password, event_id: favoriteEvent }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
<<<<<<< HEAD
      document.location.replace('/registration');
=======
      document.location.replace('/');

>>>>>>> d007e0448b9e73a9bd89002c9ec20364a8d3813d
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);

document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);
