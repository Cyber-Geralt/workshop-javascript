class RegistrationPage extends window.videos.Component {
    constructor() {
      super();
      console.log("registration page");
      this.renderPage("#registration");
      this.setupForm();
    }
  
    setupForm() {
      /**
       * @type {HTMLFormElement|null}
       */
      const $form = document.querySelector("#registrationForm");
      $form?.addEventListener("submit", (evt) => {
        evt.preventDefault();
        const formData = new FormData($form);
        //   formData.forEach((item) => {
        //     console.debug("piecioshka", { item });
        //   });
        const fields = new Map(formData);
        console.debug("piecioshka", fields);
  
        window.videos.UserService.addUser({
          id: String(Date.now()),
          name: `${fields.get("name")} ${fields.get("surname")}`,
          avatarUrl: "",
          login: fields.get("email"),
          password: "",
          __DO_NOT_USE__password: fields.get("password"),
        }).then((status) => {
          $form.append(this.createSuccessRegistrationMessage());
        });
      });
    }
  
    createSuccessRegistrationMessage() {
      const $message = document.createElement("p");
      $message.textContent = "Rejestracja zakończyła się sukcesem";
      return $message;
    }
  }
  
  window.videos.RegistrationPage = RegistrationPage;