//food类定义
//食物的操作
//1 坐标位置
//2 生成食物
//3 更新
class Food{
	constructor(select){
		this.map=document.querySelector(select);
		console.log(this.map);
		//创建标签
		this.food = document.createElement('div');
		//定义样式
		this.food.className='food';
		//放到地图当中
		this.map.appendChild(this.food);
		//定义坐标
		this.x = 80;
		this.y = 80;
		}
	foodPos(){
		//拿到地图范围
		const wNumber = this.map.clientWidth/20;
		const hNumber = this.map.clientHeight/20;
		//2 随机数生成
		let n1 = Math.floor(Math.random()*wNumber);
		let n2 = Math.floor(Math.random()*hNumber);
		console.log(n1,n2);
		//3 根据随机数运算出坐标
		this.x = n1*20;
		this.y = n2*20;
		console.log(this.x, this.y);
		//4 复制
		this.food.style.left = this.x + 'px';
		this.food.style.top = this.y + 'px';
	}
		
}