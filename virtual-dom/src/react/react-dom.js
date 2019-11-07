function render(element,parentNode){
    if(typeof element =='string'){
        return parentNode.appendChild(document.createTextNode(element))
    }
    let type = element.type
    let props = element.props
    let domEelement = document.createElement(type);
    for(let propsName in props  ){
        if(propsName == 'className'){
            domEelement.className = props[propsName]
        }else if(propsName=='style'){
            let styleObj = props[propsName]
            let cssText = Object.keys(styleObj).map(attr=>{
                return `${attr.replace(/[A-Z]/g,function(){
                    return "-"+arguments[0].toLowerCase()
                })}:${styleObj[attr]}`
            }).join(';')
            domEelement.style.cssText =cssText
        }else if(propsName == 'children'){
            let childrens = Array.isArray(props.children)?props.children:[props.children]
            childrens.forEach((item)=>{
                render(item,domEelement)
            }
                )
        }else{
            domEelement.setAttribute(propsName,props[propsName])
        }
    }
    parentNode.appendChild(domEelement)
}
export default{
    render
}