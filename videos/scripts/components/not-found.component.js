class NotFoundPage extends window.videos.Component {
    constructor() {
      super();
      console.log("not found page");
      this.renderPage("#not-found");
    }
  }
  
  window.videos.NotFoundPage = NotFoundPage;