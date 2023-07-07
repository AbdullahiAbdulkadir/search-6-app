fetch("https://api.github.com/users/octocat")
  .then((response) => response.json())
  .then((data) => {
    // Process the retrieved data here
    console.log(data);
  })
  .catch((error) => {
    // Handle any errors that occur during the request
    console.log(error);
  });
