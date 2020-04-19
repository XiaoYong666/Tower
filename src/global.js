
let isMathjaxConfig = false;//用于标识是否配置
const initMathjaxConfig = () => {
    if (!window.MathJax) {
        return;
    }
    window.MathJax.Hub.Config ({
        extensions: ["tex2jax.js"],
        jax: ["input/TeX", "output/HTML-CSS"],
        showMathMenu: false,
        tex2jax: {
            inlineMath: [['$', '$'], ["\\(", "\\)"]],
            displayMath: [['$$', '$$'], ["\\[", "\\]"]],
            processEscapes: true
        },
        "HTML-CSS": {availableFonts: ["TeX"]},
    });
    isMathjaxConfig = true; //配置完成，改为true
};
 
const MathQueue = function (elementId) {
    if (!window.MathJax) {
        return;
    }
    //window.MathJax.Hub.Queue (["Typeset", window.MathJax.Hub]); //整个dom下渲染
     window.MathJax.Hub.Queue(["Typeset", window.MathJax.Hub, document.getElementById(elementId)]); //固定id元素渲染，
};
 
export default {
    isMathjaxConfig,
    initMathjaxConfig,
    MathQueue

}