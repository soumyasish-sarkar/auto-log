// content.js

function automateLogin() {
    const loginPageUrl = 'http://122.252.242.93/userportal/pages/usermedia/tezpur/app/campus/ui/index.html';
    const campusLoginUrl = 'http://122.252.242.93/userportal/pages/usermedia/tezpur/app/campus/ui/campus-flow.html';
    const existingUserLoginUrl = 'http://122.252.242.93/userportal/pages/usermedia/tezpur/app/campus/ui/login.html';
  
    if (window.location.href === loginPageUrl) {
      // Go to campus login page
      const campusLoginLink = document.querySelector("a[href='campus-flow.html']");
      if (campusLoginLink) {
        campusLoginLink.click();
      }
    }
  
    if (window.location.href === campusLoginUrl) {
      // Go to existing user login
      const existingUserLoginLink = document.querySelector("a[href='login.html']");
      if (existingUserLoginLink) {
        existingUserLoginLink.click();
      }
    }
  
    if (window.location.href === existingUserLoginUrl) {
      // Fill out the form and submit
      const usernameField = document.querySelector("input[name='username']");
      const passwordField = document.querySelector("input[name='password']");
      const submitButton = document.querySelector("input[type='submit']");
  
      if (usernameField && passwordField && submitButton) {
        usernameField.value = '8509626893';
        passwordField.value = 'soumyawf22';
        submitButton.click();
      }
    }
  }
  
  // Run the automation process
  automateLogin();
  