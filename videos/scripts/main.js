function copyTemplate(selector) {
    /**
     * @type {HTMLTemplateElement|null}
     */
    const template = document.querySelector(selector);
    return template?.content.cloneNode(true);
  }
  
  /**
   * @param {Node|undefined} page
   */
  function render(page) {
    if (!page) {
      throw new Error("page is not defined");
    }
    const outlet = document.querySelector("#outlet");
    if (!outlet) {
      throw new Error("outlet is not defined");
    }
    // 1. Approach to clean Element
    // outlet.innerHTML = "";
    // 2. Approach to clean Element
    while (outlet.firstElementChild) {
      outlet.firstElementChild.remove();
    }
    outlet.append(page);
  }
  
  function renderPage(selector) {
    render(copyTemplate(selector));
  }
  
  /**
   * @typedef Route
   * @property {string} url
   * @property {Function} handler
   */
  
  function renderApp() {
    /**
     * @typedef {Route[]}
     */
    const routes = [
      {
        url: "#/",
        handler: () => renderPage("#homepage"),
      },
      {
        url: "#/registration",
        handler: () => renderPage("#registration"),
      },
      {
        url: "#/login",
        handler: () => renderPage("#login"),
      },
    ];
  
    //   const routes = {
    //     "#/": () => renderPage("#homepage"),
    //     "#/registration": () => renderPage("#registration"),
    //     "#/login": () => renderPage("#login"),
    //   };
  
    //   const activatedRoute = routes[location.hash];
  
    if (location.hash === "") {
      renderPage("#homepage");
      return;
    }
  
    const activatedRoute = routes.find((route) => {
      return route.url === location.hash;
    });
  
    if (activatedRoute) {
      activatedRoute.handler();
    } else {
      renderPage("#not-found");
    }
  
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
  
  function main() {
    // render(undefined);
    window.addEventListener("hashchange", renderApp);
    renderApp();
  }
  
  // main();
  window.addEventListener("DOMContentLoaded", main);