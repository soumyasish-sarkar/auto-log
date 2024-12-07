// popup.js

document.addEventListener('DOMContentLoaded', function() {
    chrome.runtime.sendMessage({ action: 'checkLoginStatus' }, function(response) {
      document.getElementById('status').innerText = response.status;
    });
  });
  