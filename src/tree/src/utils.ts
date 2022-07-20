import { IInnerTreeNode, ITreeNode } from './tree-type'

// level 表示层级
// path 表示递归调用的路径  用来表示 parintId 
export function generateInnerTree(
  tree: ITreeNode[], 
  level = 0 , 
  parentNode = {} as IInnerTreeNode
  ): IInnerTreeNode[] {
    level++
    return tree.reduce((prev,cur) => {
    const o = { ...cur } as IInnerTreeNode
    o.level = level
  
    if(o.level>1 && parentNode){
      o.parentId = parentNode.id
    }
//  判断 当前节点 cur 是否存在childern,如果存在 则递归调用
 
if(cur.children){
  // 先将children 先遍历出来
  const children = generateInnerTree(cur.children,level,o)
  delete o.children
    // 进行递归调用后 用上次的值进行拼接数组
    return prev.concat(o,children)
}else {
  // 这是叶子节点
  o.isLeaf = true
    return prev.concat(o)
}
}, [] as IInnerTreeNode[])

}



