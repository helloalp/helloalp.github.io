
document.addEventListener('selectstart', function(e) {
    e.preventDefault();
});


document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});


        window.addEventListener("contextmenu", function(e) {
            e.preventDefault();
            alert("NAU组织提醒您，本站内容受版权保护，未经授权禁止保存或使用。");
        });
   

        window.addEventListener('keydown', function(event) {
            if (event.keyCode === 123) { 
                alert("不是哥们，你生来只会复制粘贴吗？");
            }
        });
        
       
        console.log("%c警告：你这个偷看代码的杂种！", "color: red; font-size: 20px;");
