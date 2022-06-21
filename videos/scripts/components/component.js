class Component {
    copyTemplate(selector) {
      /**
       * @type {HTMLTemplateElement|null}
       */
      const template = document.querySelector(selector);
      return template?.content.cloneNode(true);
    }
  
    /**
     * @param {Node|undefined} page
     */
    render(page) {
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
  
    renderPage(selector) {
      this.render(this.copyTemplate(selector));
    }
  }
  
  window.videos.Component = Component;