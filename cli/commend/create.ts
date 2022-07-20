
import createComponent from '../shared/create-component'
import * as inquirer from 'inquirer'
import { red } from 'kolorist'
const CREATYPE = ['component', 'lib-entry']  // 创建类型
const DOCS_CATEGORIES = ['通用', '导航', '反馈', '数据录入', '数据显示']
export async function onCreate(args = { type: '' }) {
    // 容错一下 判断用户输入的命令
    let { type } = args
    // 未输入，提示用户选择 给一个列表选择
    if (!type) {

        const result = await inquirer.prompt([
            {
                // 获取输入后的属性名
                name: 'type',
                type: 'list',
                // 提示信息
                message: '(必填，请选择创建类型)',
                // 列表选项
                choices: CREATYPE,
                // 默认选项 数组中的第一个选项
                default: 0

            }
        ])
        type = result.type
    }
    // 用户输入错误的情况
    if (!CREATYPE.includes(type)) {

        console.log(
            red(`当前类型仅支持${CREATYPE.join(', ')} , 您输入的是: ${type}` + ' ,请重新选择!')
        )
        return onCreate()
    }


    // 输入则创建对应命令
    try {
        switch (type) {
            case 'component':
                // 如果是组件 我们还需要收集组件信息
                const info = await inquirer.prompt([
                    {
                        name:'name',
                        type:'input',
                        message: '(必填) 请输入组件name 将用作文件夹和文件名称 ',
                        validate(value: string){
                            if(value.trim() === ''){
                                return '组件name不能为空'
                            }
                            return true
                        }
                    },
                    {
                        name:'title',
                        type:'input',
                        message: '(必填) 请输入组件中文名称 将用作文档列表显示',
                        validate(value: string){
                            if(value.trim() === ''){
                                return '组件名称不能为空'
                            }
                            return true
                        }
                    },
                    {
                        name:'category',
                        type:'list',
                        message: '(必填) 请选择组件分类，将用作文档列表分类中',
                        choices:DOCS_CATEGORIES,
                        default:0
                    },
                ])
            // 收集到组件创建信息 进行创建组件模板文件
            createComponent(info)
                break;
            case 'component':
                break;
        }
    } catch (error) {}

    

}


