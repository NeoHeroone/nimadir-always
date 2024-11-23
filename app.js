fetch('https://jsonplaceholder.typicode.com/comments')
.then(response => response.json())
.then(comments => {
  console.log('Fetched Comments:', comments);

  const container = document.getElementById('comments-container');

  comments.forEach(comment => {
    console.log(`Name: ${comment.name}, Email: ${comment.email}, Comment: ${comment.body}`);

    const commentDiv = document.createElement('div');
    commentDiv.classList.add('comment');

    const commentTitle = document.createElement('h3');
    commentTitle.textContent = `Name: ${comment.name}`;

    const commentBody = document.createElement('p');
    commentBody.textContent = `Comment: ${comment.body}`;

    const commentEmail = document.createElement('p');
    commentEmail.textContent = `Email: ${comment.email}`;

    commentDiv.appendChild(commentTitle);
    commentDiv.appendChild(commentBody);
    commentDiv.appendChild(commentEmail);

    container.appendChild(commentDiv);
  });
})
.catch(error => console.error('Error:', error));
