// 页面内容数组
const contentData = [
    ["微语标题 1", "微语内容 1..."],
    ["微语标题 2", "微语内容 2..."],
    ["微语标题 3", "微语内容 3..."],
    ["微语标题 4", "微语内容 4..."],
    ["微语标题 5", "微语内容 5..."],
    // 可以添加更多页面内容
];

// 当前页码、每页显示的数量、总页数
let currentPage = 1;
let itemsPerPage = 2;
let totalPages = Math.ceil(contentData.length / itemsPerPage);

// 获取页面元素
const contentContainer = document.querySelector('.content');
const currentPageElement = document.querySelector('.current-page');
const totalPageElement = document.querySelector('.total-pages');
const prevPageButton = document.getElementById('prev-page');
const nextPageButton = document.getElementById('next-page');
const pageInput = document.getElementById('page-number');
const goToPageButton = document.getElementById('go-to-page');
const displayCountSelect = document.getElementById('display-count');

// 更新页面内容
function updateContent(page) {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    contentContainer.innerHTML = '';

    for (let i = startIndex; i < endIndex && i < contentData.length; i++) {
        const [title, text] = contentData[i];
        const messageBox = document.createElement('div');
        messageBox.classList.add('message-box');
        messageBox.innerHTML = `
            <h3>${title}</h3>
            <p>${text}</p>
            <img src="关闭按钮图像路径" alt="关闭" class="close-button">
        `;
        contentContainer.appendChild(messageBox);
    }

    currentPageElement.textContent = page;
}

// 更新总页数
function updateTotalPages() {
    totalPages = Math.ceil(contentData.length / itemsPerPage);
    totalPageElement.textContent = `/ ${totalPages}`;
}

// 初始化页面
updateContent(currentPage);
updateTotalPages();

// 下一页按钮点击事件
nextPageButton.addEventListener('click', () => {
    if (currentPage < totalPages) {
        currentPage++;
        updateContent(currentPage);
    }
});

// 上一页按钮点击事件
prevPageButton.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        updateContent(currentPage);
    }
});

// 跳转到指定页按钮点击事件
goToPageButton.addEventListener('click', () => {
    const pageNumber = parseInt(pageInput.value);
    if (pageNumber >= 1 && pageNumber <= totalPages) {
        currentPage = pageNumber;
        updateContent(currentPage);
        pageInput.value = currentPage;
    }
});

// 每页显示数量变化事件
displayCountSelect.addEventListener('change', () => {
    itemsPerPage = parseInt(displayCountSelect.value);
    currentPage = 1;
    updateContent(currentPage);
    updateTotalPages();
});
