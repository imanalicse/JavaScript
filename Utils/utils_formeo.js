export const sessionStorage = Object.create(null, {
  get: {
    value: key => {
      const itemValue = window.sessionStorage && window.sessionStorage.getItem(key)
      try {
        return JSON.parse(itemValue)
      } catch (error) {
        console.error(error)
      }
    },
  },
  set: {
    value: (key, itemValue) => {
      try {
        return window.sessionStorage && window.sessionStorage.setItem(key, JSON.stringify(itemValue))
      } catch (error) {
        console.error(error)
      }
    },
  },
})

export const UUID_REGEXP = /(\b[0-9a-f]{8}\b-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-\b[0-9a-f]{12}\b)/gi

export const isInt = n => Number.isInteger(Number(n))

export const unique = array => Array.from(new Set(array))

export const merge = (obj1, obj2, opts = Object.create(null)) => {
  const customizer = (objValue, srcValue) => {
    if (Array.isArray(objValue)) {
      if (Array.isArray(srcValue)) {
        return unique(opts.mergeArray ? objValue.concat(srcValue) : srcValue)
      } else {
        return srcValue
      }
    }
  }
  return mergeWith({}, obj1, obj2, customizer)
}

export const clone = obj => {
  let copy

  // Handle the 4 simple types, and null or undefined
  if (obj === null || typeof obj !== 'object') {
    return obj
  }

  // Handle Date
  if (obj instanceof Date) {
    copy = new Date()
    copy.setTime(obj.getTime())
    return copy
  }

  // Handle Array
  if (obj instanceof Array) {
    copy = []
    for (let i = 0, len = obj.length; i < len; i++) {
      copy[i] = clone(obj[i])
    }
    return copy
  }

  // Handle Object
  if (obj instanceof Object) {
    copy = {}
    for (const attr in obj) {
      if (obj.hasOwnProperty(attr)) {
        copy[attr] = clone(obj[attr])
      }
    }
    return copy
  }

  throw new Error('Unable to copy Object, type not supported.')
}

export const orderObjectsBy = (elements, order, path) => {
  // OR operator for path
  const splitPath = path.split('||')
  const newOrder = unique(order)
    .map(key =>
      elements.find(elem => {
        const newPath = splitPath.find(p => !!get(elem, p))
        return newPath && get(elem, newPath) === key
      })
    )
    .filter(Boolean)
  const orderedElements = newOrder.concat(elements)

  return unique(orderedElements)
}

export const percent = (val, total) => (val / total) * 100

export const numToPercent = num => num.toString() + '%'

export const numberBetween = (num, min, max) => num > min && num < max

export const cleanObj = obj => {
  const fresh = Object.assign({}, obj)
  const typeMap = {
    string: () => '',
    boolean: () => false,
    object: val => cleanObj(val),
  }

  Object.keys(obj).forEach(key => {
    const valType = typeof obj[key]
    if (typeMap[valType]) {
      fresh[key] = typeMap[valType](obj[key])
    }
  })

  return fresh
}

export const closest = (el, cls) => {
  const className = cls.replace('.', '')
  while ((el = el.parentElement) && !el.classList.contains(className));
  return el
}

export const remove = (arr, val) => {
  const index = arr.indexOf(val)

  if (index !== -1) {
    arr.splice(index, 1)
  }
}



export const capitalize = str => str.replace(/\b\w/g, m => m.toUpperCase())

// Expensive recursive object copy
export const copyObj = obj => window.JSON.parse(window.JSON.stringify(obj))

// subtract the contents of 1 array from another
export const subtract = (arr, from) => from.filter(a => !~arr.indexOf(a))

export const isIE = () => window.navigator.userAgent.indexOf('MSIE ') !== -1

// Loaders
export const ajax = (file, callback, onError = noop) => {
  return new Promise((resolve, reject) => {
    return fetch(file)
      .then(data => resolve(callback ? callback(data) : data))
      .catch(err => reject(onError(err)))
  })
}