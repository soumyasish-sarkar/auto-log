// background.js

chrome.runtime.onInstalled.addListener(() => {
    console.log("Extension installed.");
  });
  
  // Listen for messages from content script
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'checkLoginStatus') {
      // Check if login was successful
      const isLoggedIn = checkLoginStatus(sender.tab.url);
      sendResponse({ status: isLoggedIn ? 'Success' : 'Failed' });
    }
  });
  
  function checkLoginStatus(url) {
    // You can check the URL to determine if the login was successful.
    if (url.includes('user-dashboard')) { // Adjust URL to reflect successful login page
      return true;
    }
    return false;
  }
  