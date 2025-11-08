chrome.runtime.onMessage.addListener(async (msg) => {
  const { likeCount, commentCount } = msg;

  console.log("Starting automation:", msg);

  // Helper function to delay
  const delay = (ms) => new Promise(r => setTimeout(r, ms));

  // Auto-scroll to load more posts
  async function autoScroll(scrollCount = 3) {
    for (let i = 0; i < scrollCount; i++) {
      window.scrollBy(0, window.innerHeight);
      await delay(2000);
    }
  }

  // Step 1: Like posts
  const likeButtons = Array.from(
    document.querySelectorAll("button.artdeco-button.react-button__trigger")
  );

  console.log(`Found ${likeButtons.length} like buttons`);
  for (let i = 0; i < likeCount && i < likeButtons.length; i++) {
    likeButtons[i].scrollIntoView({ behavior: "smooth", block: "center" });
    await delay(1000);
    likeButtons[i].click();
    console.log(`✅ Liked post ${i + 1}`);
    await delay(1500);

    // Scroll every 3 likes
    if ((i + 1) % 3 === 0) await autoScroll(1);
  }

  // Step 2: Comment on posts
  const commentBoxes = Array.from(document.querySelectorAll(".ql-editor"));
  console.log(`Found ${commentBoxes.length} comment boxes`);

  for (let i = 0; i < commentCount && i < commentBoxes.length; i++) {
    const box = commentBoxes[i];
    box.scrollIntoView({ behavior: "smooth", block: "center" });
    await delay(1000);

    box.innerText = "CFBR";
    box.dispatchEvent(new Event("input", { bubbles: true }));
    console.log(`✏️ Typed comment on post ${i + 1}`);

    // Find the Post Comment button
    const postBtn = box.closest("form")?.querySelector("button.comments-comment-box__submit-button--cr");
    if (postBtn) {
      await delay(1000);
      postBtn.click();
      console.log(`💬 Commented on post ${i + 1}`);
    } else {
      console.warn("⚠️ Post button not found for comment box", i + 1);
    }

    await delay(2500);

    // Scroll every 2 comments
    if ((i + 1) % 2 === 0) await autoScroll(1);
  }

  alert(`🎉 Finished! Liked ${likeCount} posts and commented on ${commentCount} posts.`);
});
