chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: simulateClick,
  });
});

function simulateClick() {
  const buttons = document.querySelectorAll(".js-panel-toggler");
  buttons.forEach((button) => {
    button.click();
  });

  const sidebar = document.getElementById("ct-sidebar-scroll-container");
  if (sidebar) {
    sidebar.scrollTop = 0;
  }
}
