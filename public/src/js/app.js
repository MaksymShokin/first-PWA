if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/sw.js')
    .then(() => console.log('sw registered'));
}

let deferredPrompt;

window.addEventListener('beforeinstallprompt', event => {
  console.log('beforeinstallpropmt');
  event.preventDefault();
  deferredPrompt = event;
  return false;
});
