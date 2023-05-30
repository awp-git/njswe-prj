// ctc
export function copyToClipboard(text) {
  navigator.clipboard.writeText(text);
}

// redirect
export function redirectTo(url, newTab) {
  if (newTab) {
    window.open(url, "_blank");
  } else {
    window.location.href = url;
  }
}
