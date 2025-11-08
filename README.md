🚀 LinkedIn Auto Like & Comment Extension

A simple Chrome Extension that automates liking and commenting on posts in your LinkedIn feed — made for learning and experimenting with browser automation using JavaScript and Chrome APIs.

---
Features

👍 Automatically likes a specified number of posts.

💬 Automatically comments (“CFBR” by default) on a specified number of posts.

🔄 Smooth auto-scroll to load more posts.

🕒 Simple popup to input how many posts to like/comment.

🧠 Uses chrome.runtime, chrome.scripting, and DOM manipulation.

---
Project Structure

```
linkedin-like-comment/
│
├── manifest.json        # Chrome extension configuration
├── popup.html           # Extension popup UI
├── popup.js             # Handles user input & triggers automation
├── background.js        # Manages communication and tab creation
└── content.js           # Runs the automation on LinkedIn feed
```
---

How It Works

1) Click the extension icon in Chrome.

2) Enter how many posts you want to like and comment.

3) The extension opens your LinkedIn feed automatically.

4) It waits a few seconds for the page to load, then:

5) Finds all Like buttons using their class names.

6) Clicks on them up to your limit.

7) Finds all comment boxes, types “CFBR,” and posts them.

8) Scrolls automatically to load more posts if needed.

---

🧠 File Explanations

💬 background.js

Listens for the popup command (runAutomation).

Opens a new LinkedIn feed tab.

Injects content.js into the feed page.

Sends user inputs (like/comment counts) to the content script.

💬 content.js

Handles all automation logic.

Selects buttons and input fields using DOM queries.

Clicks, types, and scrolls in a controlled sequence.

Logs progress in the console for debugging.

💬 popup.js

Takes user inputs (how many likes/comments).

Sends them to background.js when the Run button is clicked.


Sends them to background.js when the Run button is clicked.
