function  getStyle(elem, property = false) {
  let style
  if (window.getComputedStyle) {
    style = window.getComputedStyle(elem, null)
  } else if (elem.currentStyle) {
    style = elem.currentStyle
  }

  return property ? style[property] : style
}
let element = document.getElementById("container");
getStyle(element, 'width')


function  childType(content) {
  if (content === undefined) {
    return content
  }

  return [
    ['array', content => Array.isArray(content)],
    ['node', content => content instanceof window.Node || content instanceof window.HTMLElement],
    ['component', () => content && content.dom],
    [typeof content, () => true],
  ].find(typeCondition => typeCondition[1](content))[0]
}

function  removeClasses(nodeList, className) {
    const removeClass = {
      string: elem => elem.classList.remove(className),
      array: elem => className.forEach(name => elem.classList.remove(name)),
    }
    removeClass.object = removeClass.string // handles regex map
    h.forEach(nodeList, removeClass[this.childType(className)])
  }

function  removeClasses(nodeList, className) {
    const removeClass = {
      string: elem => elem.classList.remove(className),
      array: elem => className.forEach(name => elem.classList.remove(name)),
    }
    removeClass.object = removeClass.string // handles regex map
    h.forEach(nodeList, removeClass[this.childType(className)])
  }

// removeClasses(labels, 'active-tab')