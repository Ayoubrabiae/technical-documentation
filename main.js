// Add clipboard icon
let pre = document.querySelectorAll("pre");
let inp = document.querySelector("textarea");

pre.forEach((e) => {
  let clipboard = document.createElement("img");
  clipboard.src = "images/order.png";
  clipboard.className = "clipboard";
  e.append(clipboard);
  clipboard.onclick = () => {
    clipboard.src = "images/notepad.png";
    let text = e.textContent;
    inp.value = text;
    inp.select();
    document.execCommand("copy");
  };
});
