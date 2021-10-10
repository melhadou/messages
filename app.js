const { hash } = window.location;

const msgForm = document.querySelector("#message-form");
const linkFrom = document.querySelector("#link-form");
const form = msgForm.querySelector("form");
const msgInput = msgForm.querySelector("#message-input");
const linkInput = linkFrom.querySelector("#link-input");
const msgShow = document.querySelector("#message-show");
const msg = msgShow.querySelector("h1");

if (hash) {
  const decodeHash = atob(hash.replace("#", ""));
  msgForm.classList.toggle("hide");
  msgShow.classList.toggle("hide");
  msg.innerText = decodeHash;
} else {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const encryptedMsg = btoa(msgInput.value);
    linkInput.value = `${window.location}#${encryptedMsg}`;
    msgForm.classList.add("hide");
    linkFrom.classList.remove("hide");
    linkInput.select();
  });
}
