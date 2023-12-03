    $(document).ready(function () {
    $('.category').click(function (event) {
        event.preventDefault(); // 阻止默认事件
        event.stopPropagation(); // 停止事件冒泡
        $(this).next('ul').slideToggle();
    });
    
        function toggleNav() {
            const navList = $('.nav-list');
            const content = $('.content');
            const isOpen = navList.css('right') === '0px';

            navList.css('right', isOpen ? '-200px' : '0');
            content.css('margin-left', isOpen ? '20px' : '220px');
            content.toggleClass('content-blur', !content.hasClass('content-blur'));
        }

$(document).ready(function () {
    $('.category').click(function (event) {
        event.preventDefault(); // 阻止默认事件
        event.stopPropagation(); // 停止事件冒泡
        $(this).next('ul').slideToggle();
    });

    // 点击侧边栏时不关闭
    $('.nav-list').click(function (event) {
        event.stopPropagation();
    });

    // 在文档其他地方点击时关闭侧边栏
    $(document).click(function (e) {
        if (!$(e.target).closest('.nav-toggle, .nav-list').length) {
            $('.nav-list').css('right', '-200px');
            $('.content').css('margin-left', '20px');
            $('.content').removeClass('content-blur');
        }
    });
});
    
    	
        // 初始化页数和总页数
        let currentPageNumber = 1;
        const totalPages = document.getElementsByClassName("page").length;

        // 更新显示当前页数和总页数的内容
        function updatePageNumbers() {
            document.getElementById("currentPage").textContent = currentPageNumber;
            document.getElementById("totalPages").textContent = totalPages;
        }

        // 上一页
        function prevPage() {
            if (currentPageNumber > 1) {
                currentPageNumber--;
                updatePageNumbers();
                updatePageVisibility();
            }
        }

        // 下一页
        function nextPage() {
            if (currentPageNumber < totalPages) {
                currentPageNumber++;
                updatePageNumbers();
                updatePageVisibility();
            }
        }

        // 跳转到指定页
        function jumpToPage() {
            const pageNumberInput = document.getElementById("pageNumberInput").value;
            const newPageNumber = parseInt(pageNumberInput);

            if (newPageNumber >= 1 && newPageNumber <= totalPages) {
                currentPageNumber = newPageNumber;
                updatePageNumbers();
                document.getElementById("pageNumberInput").value = "";
                document.getElementById("errorText").textContent = "";
                updatePageVisibility();
            } else {
                document.getElementById("errorText").textContent = "无效的页数";
            }
        }

        // 更新页面可见性
        function updatePageVisibility() {
            for (let i = 1; i <= totalPages; i++) {
                const pageElement = document.getElementById(`page${i}`);
                if (i === currentPageNumber) {
                    pageElement.style.display = "block";
                } else {
                    pageElement.style.display = "none";
                }
            }
        }

        updatePageNumbers(); // 初始化显示当前页数和总页数
        updatePageVisibility(); // 初始化页面可见性
    <!-- 页面切换脚本，这是原创禁止复制，这么废物吗连这个都写不出来的无能 --!>