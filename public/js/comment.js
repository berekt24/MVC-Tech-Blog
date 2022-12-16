async function newFormHandler(event) {
  event.preventDefault();     
  // afterBulkCreate;ldskfjads
  const blogPost = document.querySelector('#comment');
  const blogPost_id = blogPost.dataset.post;
  console.log(blogPost_id);
  const  blogComment_text = document.querySelector('#comment').value;
    console.log(blogComment_text)
    const response = await fetch(`/api/comments`, {        
      method: 'POST',
      body: JSON.stringify({  blogComment_text, blogPost_id }),
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
  .querySelector('.new-comment-form')
  .addEventListener('submit', newFormHandler);

