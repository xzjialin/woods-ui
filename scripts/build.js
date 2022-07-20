//  引入vite 导出的buil方法，用它来创建
const path = require('path')
const fs = require('fs')
const { defineConfig, build } = require('vite')
const vue = require('@vitejs/plugin-vue')
const VueJsx = require('@vitejs/plugin-vue-jsx')
// 操作文件系统
const fxExtra = require('fs-extra')

// 基础配置
const baseConfig = defineConfig({
    configFile: false,
    publicDir: false,
    plugins: [vue(), VueJsx()]
})
// 入口文件
const entryFile = path.resolve(__dirname, './entry.ts')

// 按需导出组件目录
const componentsDir = path.resolve(__dirname, '../src/')

// 输出目录
const outputDir = path.resolve(__dirname, '../build')

//  rollup 配置
const rollupOptions = {
    // 外置
    external: ['vue', 'VueJsx'],
    output: {
        global: {
            vue: 'Vue'
        }
    }
}
// 生成package.json 配置
const createPackageJson = name => {
    // 预设
    const fileStr = `{
        "name": "${name ? name : 'woods-ui'}",
        "version": "0.0.0",
        "main": "${name ? 'index.umd.js' : 'woods-ui.umd.js'}",
        "module": "${name ? 'index.es.js' : 'woods-ui.es.js'}",
        "author": "老胖子",
        "description": "Vue3 PC端组件库",
        "repository": {
          "type": "git",
          "url": ""
        },
        "keywords": ["vue3", "组件库", "tsx", "UI"],
        "license": "ISC",
        "bugs": {
          "url": ""
        }
    }`
    if (name) {
        // 单个组件 输出对应的package.json
        fxExtra.outputFile(
            path.resolve(outputDir, `${name}/package.json`),
            fileStr,
            'utf-8'
        )
    } else {
        // 全量输出
        fxExtra.outputFile(
            path.resolve(outputDir, 'package.json'),
            fileStr,
            'utf-8'
        )
    }

}



// 但组件构建
const buildSingle = async (name) => {
    await build(
        defineConfig({
            ...baseConfig,
            build: {
                rollupOptions,
                lib: {
                    entry: path.resolve(componentsDir, name),
                    name: 'index',
                    fileName: 'index',
                    formats: ['es', 'umd']
                },
                outDir: path.resolve(outputDir, name)
            }
        })
    )

    // 生成 package.json
    createPackageJson(name)
}
// 全量构建
const buildAll = async () => {
    await build(
        defineConfig({
            ...baseConfig,
            build: {
                rollupOptions,
                lib: {
                    entry: entryFile,
                    name: 'woods-ui',
                    fileName: 'woods-ui',
                    formats: ['es', 'umd']
                },
                outDir: outputDir
            }
        })
    )
    // 生成 package.json
    createPackageJson()
}

// 执行创建
const buildLib = async () => {
    // 全量打包
    await buildAll()
    //   按需打包   readFileSync 同步读取
    // 读取规则： 首先是目录
    fs.readdirSync(componentsDir)
        .filter(name => {
            // 只要目录不要文件 且含有 index.ts文件  
            // 读取componentsDir这个目录下的所有文件 包含文件名
            const componentDir = path.resolve(componentsDir, name)
            // 判断读取的路径 isDirectory方法判断 是不是一个路径
            const isDir = fs.lstatSync(componentDir).isDirectory()
            // 返回必须是一个路径  同时 读取出目录中 是否包含一个 index.ts的文件  includes判断是否包含某个文件
            return isDir && fs.readdirSync(componentDir).includes('index.ts')
        }).forEach(async name => {
            // 将过滤出来的目录进行按需打包
            await buildSingle(name)
        })

}
buildLib()