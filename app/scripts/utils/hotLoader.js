export function enable(Class, name) {
  if (module.makeHot) {
    return module.makeHot(Class, name);
  }
  return Class;
}
