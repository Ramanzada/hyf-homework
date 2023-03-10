let lastClickTime = 0;
document.addEventListener("click", function() {
  const currentTime = new Date().getTime();
  if (currentTime - lastClickTime < 500) {
    console.log("double click!");
  }
  lastClickTime = currentTime;
});
