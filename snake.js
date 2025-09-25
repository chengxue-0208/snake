//蛇对象
class Snake{
	constructor(select) {
		this.map = document.querySelector(select);
		//蛇的移动方向
		this.direction = 'right';
		//蛇的数组（把蛇的头和身体都会存储在数组当中，头从数组的第零位开始）
		this.snakeList = [];
		//调用创建蛇头函数
		this.createSnake();
		console.log(this.snakeList[0]);
		
	    
	}
	createHead(){
		//获取数组的第零位拿到蛇头
		const head= this.snakeList[0];
		//定义坐标
		const pos={x:40,y:0};
		if(head){
			//如果有蛇头创建新的蛇头放在原先蛇头的坐标后面的位置上
			//新蛇头坐标一定发生改变，改变方向我们需要罗列一下
			switch(this.direction){
				case 'left':
					pos.x= head.offsetLeft -20;
					pos.y= head.offsetTop;
					break;
				case 'right':
					pos.x= head.offsetLeft +20;
					pos.y= head.offsetTop;
					break;
				case 'top':
					pos.x= head.offsetLeft ;
					pos.y= head.offsetTop -20;
					break;
				case 'bottom':
					pos.x= head.offsetLeft;
					pos.y= head.offsetTop +20;
					break;
				default:
				break;
				
			}
			head.className = 'body'
		}else{
			console.log("没有蛇头");
		};

		
		
		//创建蛇头
		const div = document.createElement('div');
		
		//定义样式
		div.className='head'
		//把蛇头存入数组
		this.snakeList.unshift(div);
		div.style.left = pos.x + 'px';
		div.style.top = pos.y + 'px';
		this.map.appendChild(div);
		
	}
	//创建小蛇
	createSnake(){
		for(let i=0; i < 4 ; i++){
			this.createHead();
		}
	}
	//蛇移动的方法
	move(){
		//思路是吧原先头部后面加一个位置
		const body = this.snakeList.pop();
		body.remove();
		this.createHead();
	}
	//判断设有没有吃到食物
	isEat(foodX, foodY){
		//判断头的坐标与食物的坐标是否重合
		const head = this.snakeList[0];
		const headX = head.offsetLeft;
		const headY = head.offsetTop;
		console.log('headX: ', head.offsetLeft, 'headY: ',head.offsetTop)
		console.log('foodX: ', foodX, 'foodY: ', foodY)
		if(foodX === headX && foodY === headY){
			return true;
			
		}
		return false;
		
	}
	//判断蛇死了没有
	isDie(){
		//判断蛇头有没有到边界
		const head = this.snakeList[0];
		const headX =head.offsetLeft;
		const headY =head.offsetTop;
		
		if(headX<0 || headY < 0 || headX>= this.map.clientWidth - 20 || headY >= this.map.clientHeight -20 ){
			return true;
		}
		return false;
		
	}
}



