document.addEventListener("DOMContentLoaded", function () {
    const openFormBtn = document.getElementById("openFormBtn");
    const closeFormBtn = document.getElementById("closeFormBtn");
    const feedbackForm = document.getElementById("feedbackForm");
    const submitFormBtn = document.getElementById("submitForm");
    const responseMessage = document.getElementById("responseMessage");
  
    // Restore form values from LocalStorage
    const restoreFormValues = () => {
      const formFields = ["fullName", "email", "phone", "organization", "message"];
      formFields.forEach((field) => {
        const storedValue = localStorage.getItem(field);
        if (storedValue) {
          document.getElementById(field).value = storedValue;
        }
      });
      const consent = localStorage.getItem("consent");
      if (consent === "true") {
        document.getElementById("consent").checked = true;
      }
    };
  
    // Save form values to LocalStorage
    const saveFormValues = () => {
      const formFields = ["fullName", "email", "phone", "organization", "message"];
      formFields.forEach((field) => {
        localStorage.setItem(field, document.getElementById(field).value);
      });
      localStorage.setItem("consent", document.getElementById("consent").checked);
    };
  
    // Open form
    openFormBtn.addEventListener("click", function () {
      feedbackForm.style.display = "block";
      restoreFormValues();
      history.pushState({ formOpen: true }, "", "#form");
    });
  
    // Close form
    closeFormBtn.addEventListener("click", function () {
      feedbackForm.style.display = "none";
      history.back();
    });
  
    // Handle back button
    window.addEventListener("popstate", function (event) {
      if (event.state && event.state.formOpen) {
        feedbackForm.style.display = "block";
      } else {
        feedbackForm.style.display = "none";
      }
    });
  
    // Submit form
    submitFormBtn.addEventListener("click", function () {
      saveFormValues();
  
      // ... (previous fetch code)
  
      // Clear form data
      document.getElementById("feedbackForm").reset();
      localStorage.clear();
    });
  });
  