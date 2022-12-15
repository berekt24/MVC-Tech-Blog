async function newFormHandler(event) {
  event.preventDefault();     
  // afterBulkCreate;ldskfjads

  const comment_content = document.querySelector('#review-desc').value;
    console.log(comment_content)
    const response = await fetch(`/api/comment`, {        
      method: 'POST',
      body: JSON.stringify({ comment_content }),
      headers: {
        'Content-Type': 'application/json',
      },
    });  

    if (response.ok) {
      document.location.replace('/');
      console.log("created sccusesl")
    } else {
      alert('Failed to post review');
    }
  }


document
  .querySelector('.new-review-form')
  .addEventListener('submit', newFormHandler);

