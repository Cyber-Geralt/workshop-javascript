function main() {
    // render(undefined);
    window.addEventListener("hashchange", renderApp);
    renderApp();
  }
  
  // main();
  window.addEventListener("DOMContentLoaded", main);