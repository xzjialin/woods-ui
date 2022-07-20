import {ensureDirSync, writeFileSync} from 'fs-extra'
import {resolve} from 'path'
import { lightBlue, lightGreen} from 'kolorist'
import genCoreTemplate from '../template/core'
import genTypesTemplate from '../template/type'
import genStyleTemplate from '../template/style'
import genTestTemplate from '../template/test'
import genIndexTemplate from '../template/index'

export interface ComponentMeta {
   name: string,
   title: string,
   category:string
}

const WRITE_FILE_OPTIONS = { encoding: 'utf-8' }

export default function createComponent(meta: ComponentMeta){
    const { name } = meta

    // 第一步先拼接 组件目录
  const componentDir =  resolve('../src/', name)

//   其他核心文件目录 ： 组件源文件 、类型、样式、测试
  const compSrcDir = resolve(componentDir, 'src') // 源文件目录
  const styleDir = resolve(componentDir, 'style') //样式目录
  const testDir = resolve(componentDir, 'test')   // 测试目录
//   生成文件目录
   ensureDirSync(compSrcDir)
   ensureDirSync(styleDir)
   ensureDirSync(testDir)

// 文件和内容创建
  // 核心文件：组件文件
  const coreFilePath = resolve(compSrcDir, name + '.tsx')
//   第一个参数为文件路径 第二个为要写入的内容
  writeFileSync(coreFilePath, genCoreTemplate(name))

    // 核心文件：组件属性类型
    const typesFilePath = resolve(compSrcDir, name + '-type.ts')
    writeFileSync(typesFilePath, genTypesTemplate(name))
  
    // 核心文件：组件样式文件
    const styleFilePath = styleDir+ `/${name}.scss`
    writeFileSync(styleFilePath, genStyleTemplate(name))
    // 核心文件：测试文件
    const testFilePath = testDir+ `/${name}.test.ts`
    writeFileSync(testFilePath, genTestTemplate(name))
    // 核心文件：索引文件
    
    const indexFilePath = componentDir+ `/index.ts`
    writeFileSync(indexFilePath, genIndexTemplate(name))

//    创建通知通知
   console.log(
    lightGreen(
        `√ ${name}组件目录创建成功`
    )
   )

   console.log(
    lightBlue(
        `√ 组件目录：${componentDir}`
    )
   )
}