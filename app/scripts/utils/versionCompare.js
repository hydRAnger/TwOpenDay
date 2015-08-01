// FIXME refactor and add flow type
export function versionCompare(currVersion, latestVersion) {
  var result = false;
  var currVersions = currVersion ? currVersion.split('.').map(v => parseInt(v)) : [0, 0, 0];
  var latestVersions = latestVersion ? latestVersion.split('.').map(v => parseInt(v)) : [0, 0, 0];
  for (var i = 0; i < latestVersions.length; i++) {
    if (latestVersions[i] > currVersions[i]) {
      result = true;
      break;
    } else if (latestVersions[i] < currVersions[i]) {
      break;
    }
  }

  return result;
}
