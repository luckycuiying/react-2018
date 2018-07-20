import React from "react";
import ReactDom ,{render} from 'react-dom';

 //1， 把 jsx元素转换成一个对象
 console.log(<h1 className="red"> hello world <span id="son" title="fddf">我是儿子级别的</span></h1>)
console.log(<p>fgfdgg</p>)
// 2, createElement 简单实现

function ReactElment(type,props){
    this.type=type;
    this.props =props;
}
// 接受是哪个参数 分别是 标签类型， 标签属性， 子元素(可以是字符串或是对象)
// 返回的是一个虚拟dom 然后通过render 方法渲染成真实dom
function createElement(type,props,...children){
    if(children.length===1){
       children = children[0];
    }
    return new ReactElment(type,{...props, children:children})

 }
 // 3, 渲染成真正的dom 
myRender(createElement(
  "h1",
  { className: "red" },
  " hello world ",
  createElement(
    "span",
    { id: "son", title: "fddf" },
    "\u6211\u662F\u513F\u5B50\u7EA7\u522B\u7684"
  )
),document.getElementById('root'))
//
//返回的是真实dom
//<div id="root">
//  <h1 class="red"> hello world 
//      <span id="son" title="fddf">我是儿子级别的
//      </span>
//   </h1>
// </div>
//
// 原理：
 function myRender(obj,container){
    let { type , props } =obj;
    let ele = document.createElement(type);
    for(let key in props){
        if(key==='children'){
            if(typeof props[key] ==='object'){ //判断 第一层标签是否包含子标签元素
                props[key].forEach((item)=>{
                    if(typeof item==='object'){ // 第二 子标签里面是否还包含子标签元素
                        myRender(item,ele);
                    }else{
                        ele.appendChild(document.createTextNode(item))
                    }
                })
            }else{
                ele.appendChild(document.createTextNode(props[key]))
            }
        }else if(key==="className"){
            ele.setAttribute('class',props[key]);
        }else{
            ele.setAttribute(key,props[key]);
        }
    }
    container.appendChild(ele);
 }