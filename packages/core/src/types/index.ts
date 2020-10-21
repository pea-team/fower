export * from './Modifiers'

export interface MarginMaps {
  [key: string]: string[]
}

export interface SizeMaps {
  [key: string]: string[]
}

export interface PaddingMaps {
  [key: string]: string[]
}

export interface PlainObject {
  [key: string]: any
}

export type Plugin = (
  finalProps: PlainObject,
  styliStyle: PlainObject,
  props: PlainObject,
) => PlainObject

/**
 * 可接受数组，已满足响应式需求
 */
export interface StyliStyle {
  [key: string]: number | string | number[] | string[]
}
