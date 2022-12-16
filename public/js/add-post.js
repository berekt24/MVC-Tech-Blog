const newFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#project-name').value.trim();
  // const needed_funding = document.querySelector('#project-funding').value.trim();
  const description = document.querySelector('#project-desc').value.trim();

   
    const response = await fetch(`/api/blogpost`, {
      method: 'POST',
      body: JSON.stringify({ title, description }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
console.log(response);
    const data = await response.json()
    console.log(data);
      document.location.replace('/dashboard')
};

document
  .querySelector('.new-project-form')
  .addEventListener('submit', newFormHandler);
