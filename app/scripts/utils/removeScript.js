export function removeScript(scriptID) {
  var scripts = document.head.getElementsByTagName('script');
  document.head.removeChild(scripts[scriptID]);
}
