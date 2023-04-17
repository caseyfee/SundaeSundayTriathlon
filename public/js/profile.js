const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#name-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  // const password = document.querySelector('#password-signup').value.trim();
  const tshirt = document.querySelector('#tshirt-signup').value.trim();
  const swim = document.querySelector('#swim-signup').value.trim();
  const bike = document.querySelector('#bike-signup').value.trim();
  const run = document.querySelector('#run-signup').value.trim();
  const volunteer = document.querySelector('#volunteer-signup').value.trim();

  if (name && email && tshirt && swim && bike && run && volunteer) {
    const response = await fetch(`/api/users`, {
      method: 'POST',
      body: JSON.stringify({ name, email, tshirt, swim, bike, run, volunteer }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
<<<<<<< HEAD
      document.location.replace('/profile');
=======
      document.location.replace('/');
>>>>>>> d007e0448b9e73a9bd89002c9ec20364a8d3813d
    } else {
      alert('Failed to update profile');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/events/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
<<<<<<< HEAD
      document.location.replace('/profile');
=======
      document.location.replace('/');
>>>>>>> d007e0448b9e73a9bd89002c9ec20364a8d3813d
    } else {
      alert('Failed to delete event');
    }
  }
};

document
  .querySelector('.register-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.event-list')
  .addEventListener('click', delButtonHandler);
