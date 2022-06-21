const UserService = {
    addUser(user) {
      return fetch("https://fakes.herokuapp.com/users", {
        method: "post",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((response) => {
          return response.json();
      })
    },
  };
  
  window.videos.UserService = UserService;