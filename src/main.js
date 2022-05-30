let demo = document.querySelector('#demo');
let content = document.querySelector('#content');
let style = document.querySelector('#style');
let string = `
/* 
 * 你好，我叫AlierQ
 * 我将会向你展示一下太极图的画法
 */

/* 
 * 首先准备一个div
 */

#taiji{
    border:1px solid #fff;
    width:300px;
    height:300px;
}

/* 
 * 然后将div变成一个左黑右白的圆
 */

#taiji{
    border-radius:50%;
    border:none;
    border-left:150px solid #000;
    width:150px;
}

/* 
 * 然后在上面加个黑色的大圆，中间加个白色小圆
 * 下面加个白色的大圆，中间加个黑色小圆
 */

#taiji::before{
    content:'';
    width:50px;
    height:50px;
    border:50px solid #000;
    border-radius:50%;
    position:absolute;
    top:0;
    left:-50%;
    background:#fff;
}

/* 
 * 在下面加个白色的大圆，中间加个黑色小圆
 */

#taiji::after{
    content:'';
    width:50px;
    height:50px;
    border:50px solid #fff;
    border-radius:50%;
    position:absolute;
    bottom:0;
    left:-50%;
    background:#000;
}

/* 
 * 最后就是让他转动起来
 */

@keyframes rotateTaiji{
    from{
        top:20px;left:50%;
        transform:
          translateX(-50%) 
          rotate(0deg);
    }
    to{
        top:20px;
        left:50%;
        transform:
          translateX(-50%) 
          rotate(360deg);
    }
}

#taiji{
    animation: rotateTaiji 2s linear infinite;
}

/* 
 * 至此，绘制全部完成，感谢您的观看！
 */


`

let n = -1;
let tempString = ''

let step = ()=>{
    setTimeout(()=>{
        if(string[++n] === '\n'){
            // 换行
            tempString += '<br>'
        }else if(string[n] === ' '){
            tempString += '&nbsp;'
        }else{
            tempString += string[n]
        }
        // html显示
        demo.innerHTML = tempString;
        // style 显示
        style.innerHTML = string.substring(0,n);
        content.scrollTo(0,9999);
        // demo.style.marginTop = -n*1.60 + 'px';
        if(n < string.length-1){
            step();
        }
    },10)
}
step();
