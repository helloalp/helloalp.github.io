// 检查是否存在名为antiCopy的标签在local storage中
if (localStorage.getItem('antiCopy')) {
    // 允许复制
    document.addEventListener('copy', function(e) {
        // 弹出提示框
        alert("请珍惜你的复制许可，不要随意传播");
    });
} else {
    // 防复制代码
    document.addEventListener('selectstart', function(e) {
        e.preventDefault();
    });

    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });

    window.addEventListener("contextmenu", function(e) {
        e.preventDefault();
        alert("本站内容未经授权禁止保存或使用。");
    });

    window.addEventListener('keydown', function(event) {
        if (event.keyCode === 123) {
            alert("不是哥们，你生来只会复制粘贴吗？");
        }
    });

    console.log("%c警告：你这个偷看代码的狗杂种！", "color: red; font-size: 20px;");
}
