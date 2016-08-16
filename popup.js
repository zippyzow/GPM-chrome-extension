document.addEventListener('DOMContentLoaded', function() {
  chrome.tabs.executeScript(null, { file: "main.js" });

  document.getElementById("on").addEventListener("click", function() {
    console.log('turned on!');

    chrome.tabs.executeScript(null, { code: "start();"});
  });

  document.getElementById("off").addEventListener("click", function() {
    console.log('turned off!');

    chrome.tabs.executeScript(null, { code: "stop();" });
  });
});
  