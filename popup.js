const likeInput = document.getElementById("likeCount");
const commentInput = document.getElementById("commentCount");
const startBtn = document.getElementById("startBtn");

function toggleButton() {
  startBtn.disabled = !(likeInput.value && commentInput.value);
}

likeInput.addEventListener("input", toggleButton);
commentInput.addEventListener("input", toggleButton);

startBtn.addEventListener("click", () => {
  const likeCount = parseInt(likeInput.value);
  const commentCount = parseInt(commentInput.value);

  chrome.runtime.sendMessage({ 
    action: "runAutomation", 
    likeCount, 
    commentCount 
  });
});
