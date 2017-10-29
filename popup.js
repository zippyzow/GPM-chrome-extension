var popupStyle = document.createElement('link');
popupStyle.rel = 'stylesheet';
popupStyle.type = 'text/css';
popupStyle.href = chrome.extension.getURL('popup.css');
(document.head||document.documentElement).appendChild(popupStyle);

var mdlStyle = document.createElement('link');
mdlStyle.rel = 'stylesheet';
mdlStyle.type = 'text/css';
mdlStyle.href = chrome.extension.getURL('material.min.css');
(document.head||document.documentElement).appendChild(mdlStyle);

var mdlScript = document.createElement('script');
mdlScript.src = chrome.extension.getURL('material.min.js');
(document.head||document.documentElement).appendChild(mdlScript);


document.addEventListener('DOMContentLoaded', function() {
  var checkbox = document.getElementById("switch");
  
  chrome.tabs.executeScript(null, { file: "main.js" });

  chrome.tabs.executeScript(null, { code: "isOn();" }, function(result) {
    console.log(result);
    checkbox.checked = result[0];
  });

  checkbox.addEventListener("click", function() {
    if (checkbox.checked) {
      chrome.tabs.executeScript(null, { code: "start();"});
    } else {
      chrome.tabs.executeScript(null, { code: "stop();" });
    }
  });
});

  