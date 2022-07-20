// 创建组件属性类型声明文件
import { upperFirst } from './utils'
export default function genTypesTemplate(name: string) {

    const propsTypeName = upperFirst(name)+'Props'
    const propsName = name+'Props'

    return `
import { ExtractPropTypes, PropType } from 'vue'
export const ${propsName} = {

}
export type ${propsTypeName} = ExtractPropTypes<typeof ${propsName}>
`
}