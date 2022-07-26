const opt = Object.prototype.toString

export function isArray(obj: any): obj is any[] {
  return opt.call(obj) === '[object Array]'
}

export function isNumber(obj: any): obj is number {
  return opt.call(obj) === '[object Number]' && obj === obj // eslint-disable-line
}

export function isFunction(obj: any): obj is (...args: any[]) => any {
  return opt.call(obj) === '[object Function]'
}
export const isUndefined = (val: any): val is undefined => val === undefined 

export function isString(obj: any): obj is string {
  return typeof obj === 'string'
}
export function addUnit(value: string | number, defaultUnit = 'px') {
  if (!value) return ''
  if (isString(value)) {
    return value
  } else if (isNumber(value)) {
    return `${value}${defaultUnit}`
  }
  console.warn('绑定值必须是字符串或数字')
}

export function filterText (value:string, textLen:number) {
  if (textLen !== -1 && textLen < value.length) {
    return value.substring(0, textLen) + '...'
  }
  return value
}
