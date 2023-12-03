
// 获取所有带有 class 为 script-tag 的脚本标签
var scriptTags = document.getElementsByClassName('script-tag');

// 获取第一个和第二个脚本标签
var firstScript = scriptTags[0];
var secondScript = scriptTags[1];

// 添加第一个脚本加载失败时的事件处理程序
firstScript.onerror = function() {
  console.log('第一个脚本加载失败，切换到第二个脚本');

  // 禁用第一个脚本
  firstScript.disabled = true;

  // 解除第二个脚本的禁用并加载
  secondScript.disabled = false;
};

