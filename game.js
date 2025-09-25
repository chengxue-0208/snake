//创建游戏类
class Game{
	constructor(select) {
		this.map = document.querySelector(select);
		//食物
		this.food = new Food(select);
		//蛇
		this.snake = new Snake(select);
		this.timer = 0 ;
		// this.start();
		
	    
	}
	start(){
		clearInterval(this.timer);
		this.timer = setInterval(() => {
			//让蛇动起来
			this.snake.move()
			//判断是否吃到食物
			if(this.snake.isEat(this.food.x, this.food.y)){
				//吃到食物之后需要增长，调用增加蛇头的方法
				this.snake.createHead();
				//食物位置更新
				this.food.foodPos();
			}
			//判断蛇有没有死亡
			if(this.snake.isDie()){
				clearInterval(this.timer)
			}
			
		},500);
	}
	pause(){
		clearInterval(this.timer);
	}
	restart(){
		window.location.reload()
	}
	change(type){
		this.snake.direction= type;
	}
	
}