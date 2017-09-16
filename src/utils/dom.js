export function addClass(el, className) {
  if (hasClass(el, className)) {
    return
  } else {
    let newClass = el.className.split(' ');
    newClass.push(className)
    el.className = newClass.join(' ')
  }
}
export function hasClass(el, className) {
  let reg = new RegExp('(^|\\s)' + className + '(\\s|$)');
  return reg.test(el.className)
}

export function eleAttribute(el, name, val) {
  let _prefix = 'data-';
  let _name = _prefix + name;
  if (val) {
    return el.setAttribute(_name, val)
  } else {
    return el.getAttribute(_name)
  }
}
