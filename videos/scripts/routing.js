/**
 * @typedef Route
 * @property {string} url
 * @property {Function} handler
 */
/**
 * @type {Route[]}
 */
 const routes = [
    {
      url: "#/",
      handler: window.videos.HomePage,
    },
    {
      url: "#/registration",
      handler: window.videos.RegistrationPage,
    },
    {
      url: "#/login",
      handler: window.videos.LoginPage,
    },
  ];
  
  function renderApp() {
    if (location.hash === "") {
      // renderPage("#homepage");
      return;
    }
  
    const activatedRoute = routes.find((route) => {
      return route.url === location.hash;
    });
  
    if (activatedRoute) {
      new activatedRoute.handler();
    } else {
      // renderPage("#not-found");
    }
  
    //   ----------------
  
    //   const routes = {
    //     "#/": () => renderPage("#homepage"),
    //     "#/registration": () => renderPage("#registration"),
    //     "#/login": () => renderPage("#login"),
    //   };
  
    //   const activatedRoute = routes[location.hash];
  
    //   ----------------
  
    //   switch (location.hash) {
    //     case "":
    //     case "#/":
    //       renderPage("#homepage");
    //       break;
  
    //     case "#/registration":
    //       renderPage("#registration");
    //       break;
  
    //     case "#/login":
    //       renderPage("#login");
    //       break;
  
    //     default:
    //       console.log("ups... 404");
    //       break;
    //   }
  }