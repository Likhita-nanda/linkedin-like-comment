chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "runAutomation") {
    const { likeCount, commentCount } = request;
    chrome.tabs.create({ url: "https://www.linkedin.com/feed/" }, (tab) => {
      setTimeout(() => {
        chrome.scripting.executeScript({
          target: { tabId: tab.id },
          files: ["content.js"]
        }, () => {
          chrome.tabs.sendMessage(tab.id, { likeCount, commentCount });
        });
      }, 7000);
    });
  }
});
