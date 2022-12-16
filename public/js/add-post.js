const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#project-name').value.trim();
  // const needed_funding = document.querySelector('#project-funding').value.trim();
  const description = document.querySelector('#project-desc').value.trim();

   
    await fetch(`/api/blogpost`, {
      method: 'POST',
      body: JSON.stringify({ name, description }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    
      document.location.replace('/dashboard')
};

document
  .querySelector('.new-project-form')
  .addEventListener('submit', newFormHandler);
