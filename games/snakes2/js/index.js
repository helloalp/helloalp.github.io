

/*-----------------tools.js----------------- */
//注意自调用函数的问题，*****应该在自调用函数前面加一个分号********，表明上一个语句的结束，防止自调用函数被上一条语句结合而报错
//自调用函数传入window的目的，是为了让变量名可以被压缩
//在老版本的浏览器中，undefined可以被重新赋值
;(function (window, undefined) {
    var Tools = {
        getRandom: function (min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
    }
    //暴露Tools给window
    window.Tools = Tools;
})(window, undefined)

/*-----------------food.js----------------- */
//所有的js文件中书写代码，都是全局作用域
//可以用自调用函数，开启一个新的作用域，避免全局作用域带来的命名冲突问题
;(function (window, undefined) {
    var position = 'absolute';
    //记录上次创建的食物，为删除做准备
    var elements = [];
    function Food(options) {
        options = options || {};
        this.x = options.x || 0;
        this.y = options.y || 0;
        this.width = options.width || 20;
        this.height = options.height || 20;
        //this.color = options.color || "yellow";
    }
    //渲染
    Food.prototype.render = function (map) {
        //删除之前创建的食物
        remove();
        //随机设置x和y的值
        this.x = Tools.getRandom(0, map.offsetWidth / this.width - 1) * this.width;
        this.y = Tools.getRandom(0, map.offsetHeight / this.height - 1) * this.height;

        //动态创建，页面上显示的食物
        var img = document.createElement('img');
        img.src = './images/food4.png';
       // var div = document.createElement('div');
        map.appendChild(img);
        elements.push(img);
        //设置食物的样式
        img.style.position = position;
        img.style.left = this.x + 'px';
        img.style.top = this.y + 'px';
        img.style.width = this.width + 'px';
        img.style.height = this.height + 'px';
        //img.style.backgroundColor = this.color;

    }
    function remove() {
        for (var i = elements.length - 1; i >= 0; i--) {
            //删除div
            elements[i].parentNode.removeChild(elements[i]);
            //删除数组中的元素
            //删除数组元素
            //第一个参数，从哪个位置开始删除
            //第二个参数，删除几个元素
            elements.splice(i, 1);
        }
    }
    //把Food构造函数，让外部可以访问
    window.Food = Food;
})(window, undefined)

/*-----------------snake.js----------------- */
//自调用函数，开启一个新的局部作用域，防止命名冲突
;(function (window, undefined){
    var position = 'absolute';
    //记录之前创建的蛇
    var elements = [];
    function Snake (options){
        options = options || {};
        //蛇节的大小
        this.width = options.width || 20;
        this.height = options.height || 20;
        this.score = 0; // 游戏得分
        //蛇的移动方向
        this.direction = options.direction || 'right';
        //蛇头旋转角度
        this.angle = {
            left: {
                rotate: 180 // 蛇头旋转角度
            },
            right: {
                rotate: 0
            },
            top: {
                rotate: -90
            },
            bottom: {
                rotate: 90
            }
        }
        //蛇的身体（第一个元素是蛇头）
        this.body = [
            {x: 3, y: 2, color: 'red'},
            {x: 2, y: 2, color: '#9CCC65'},
            {x: 1, y: 2, color: '#9CCC65'}
        ];
        
    }
    Snake.prototype.render = function (map) {
        //删除之前创建的蛇
        remove();
        //把每一个蛇节渲染到地图上
        for (var i = 0, len = this.body.length; i < len; i++) {
            if (i == 0) {
                //把蛇头渲染到地图
                var objecthead = this.body[0];
                var snakeHead = document.createElement('img');
                snakeHead.src = './images/head.jpg';
                map.appendChild(snakeHead);
                //记录当前蛇头
                elements.push(snakeHead);
                //设置样式
                snakeHead.style.position = position;
                snakeHead.style.width = this.width + 'px';
                snakeHead.style.height = this.height + 'px';
                snakeHead.style.left = objecthead.x * this.width + 'px';
                snakeHead.style.top = objecthead.y * this.height + 'px';
                snakeHead.style.transform = 'rotate(' + this.angle.rotate + 'deg)';
                continue;
            }
            //蛇节
            var object = this.body [i];
            //
            var div = document.createElement('div');
            map.appendChild(div);
            //记录当前蛇
            elements.push(div);
            //设置样式
            div.style.position = position;
            div.style.width = this.width + 'px';
            div.style.height = this.height + 'px';
            div.style.left = object.x * this.width + 'px';
            div.style.top = object.y * this.height + 'px';
            div.style.backgroundColor = object.color;
            div.style.borderRadius = '10px';
        }
    }
    //私有的成员
    function remove (){
        for (var i = elements.length - 1; i >= 0; i--){
            //删除div
            elements[i].parentNode.removeChild(elements[i]);
            //删除数组中的元素
            elements.splice(i, 1);
        }
    }
    //控制蛇移动的方法
    Snake.prototype.move = function (food, map){
        //控制蛇的身体移动，当前蛇节到上一个蛇节的位置
        for (var i = this.body.length - 1; i > 0; i--){
            this.body[i].x = this.body[i-1].x;
            this.body[i].y = this.body[i-1].y;
        }
        //控制蛇头的移动
        //判断蛇头的方向
        var head = this.body[0];
        switch (this.direction){
            case 'right':
                head.x += 1;               
                break;
            case 'left':
                head.x -= 1;                
                break;
            case 'top':
                head.y -= 1;               
                break;
            case 'bottom':
                head.y += 1;          
                break;
        }
        //2.4判断蛇头是否和食物的坐标重合
        var headX = head.x * this.width;
        var headY = head.y * this.height;
        if (headX === food.x && headY === food.y){
            //让蛇增加一节
            //获取蛇的最后一节
            var last = this.body[this.body.length - 1];
            this.body.push({
                x: last.x,
                y: last.y,
                color: last.color
            });
            //在地图上随机重新生成食物
            food.render(map);
            //分数加1
            this.score += 1;
            document.getElementById('score_value').innerHTML = this.score;
        }
    }
    //暴露构造函数给外部
    window.Snake = Snake;
})(window, undefined)

/*-----------------game.js----------------- */
//可以用自调用函数，开启一个新的作用域，避免全局作用域带来的命名冲突问题
;(function (window, undefined) {
    var that; //记录游戏对象
    function Game(map) {
        this.food = new Food();
        this.snake = new Snake();
        this.map = map;
        that = this;
    }
    Game.prototype.start = function () {
        //把蛇和食物对象渲染到地图上
        this.food.render(this.map);
        this.snake.render(this.map);
        //测试蛇移动
        // this.snake.move();
        // this.snake.render(this.map);
        // this.snake.move();
        // this.snake.render(this.map);
        // this.snake.move();
        // this.snake.render(this.map);
        //开始游戏的逻辑
        //2.1让蛇移动起来
        runSnake();
        //2.2当蛇遇到边界，游戏结束
        //2.2通过键盘控制蛇移动的方向
        bindKey();
        //2.4当蛇遇到食物，做相应的处理
    }
    //通过键盘控制蛇的移动
    function bindKey() {
        // document.onkeydown = function () {}
        document.addEventListener('keydown', function (e) {
            // console.log(e.keyCode);
            //37 - left
            //39 - up
            //39 - right
            //40 - down
            switch (e.keyCode) {
                case 37:
                    if (this.snake.direction != 'right'){   // 不允许返回，向右的时候不能向左
                        this.snake.direction = 'left';
                        this.snake.angle.rotate = 180;
                    }
                    break;
                case 38:
                    if (this.snake.direction != 'bottom'){
                        this.snake.direction = 'top';
                        this.snake.angle.rotate = -90;
                    }
                    break;
                case 39:
                    if (this.snake.direction != 'left'){
                        this.snake.direction = 'right';
                        this.snake.angle.rotate = 0;
                    }  
                    break;
                case 40:
                    if (this.snake.direction != 'top'){
                        this.snake.direction = 'bottom';
                        this.snake.angle.rotate = 90;
                    }
                    break;
            }
        }.bind(that), false);
    }
    //私有的函数,让蛇移动
    function runSnake() {
        var timerId = setInterval(function () {
            //让蛇走一格
            //在定时器的function中，this是指向window对象
            //要获取游戏对象中的蛇属性
            this.snake.move(this.food, this.map);
            this.snake.render(this.map);
            //2.2当蛇遇到边界，游戏结束
            //获取蛇头的坐标
            var maxX = this.map.offsetWidth / this.snake.width;
            var maxY = this.map.offsetHeight / this.snake.height;
            var headX = this.snake.body[0].x;
            var headY = this.snake.body[0].y;
            if (headX < 0 || headX >= maxX || headY < 0 || headY >= maxY) {
                alert('撞到边界了！Game Over');
                clearInterval(timerId);
            }
            // 吃到自己死亡，从第五个开始与头判断，因为前四个永远撞不到
            for (var i = 4; i < this.snake.body.length; i++) {
                if (this.snake.body[0].x === this.snake.body[i].x && this.snake.body[0].y === this.snake.body[i].y) {
                    alert("咬到自己啦！Game Over");
                    clearInterval(timerId);   // 清除定时器
                }
            }
        }.bind (that), 150);
    }
    //暴露构造函数给外部
    window.Game = Game;
})(window, undefined);

/*-----------------main.js----------------- */
;(function (window, undefined) {
    var map = document.getElementById('map');
    var game = new Game(map);
    game.start();
})(window, undefined)
