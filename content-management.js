
document.addEventListener('selectstart', function(e) {
    e.preventDefault();
});


document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

        document.addEventListener("copy", function (e) {
            e.preventDefault();
            var selectedText = window.getSelection().toString();
            var copiedText = selectedText + "（NAU官网内容-侵权必究）";
            e.clipboardData.setData("text/plain", copiedText);

            alert("不允许复制内容，已添加来源信息。");
    
