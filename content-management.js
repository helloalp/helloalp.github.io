
document.addEventListener('selectstart', function(e) {
    e.preventDefault();
});


document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});


        window.addEventListener("contextmenu", function(e) {
            e.preventDefault();
            alert("NAU组织提醒您，此图片受版权保护，未经授权禁止保存或使用。");
        });
   

        window.addEventListener('keydown', function(event) {
            if (event.keyCode === 123) { 
                alert("你这个只知道复制粘贴的低能");
            }
        });
        
       
        console.log("%c警告：你这个偷看代码的杂种！", "color: red; font-size: 20px;");
