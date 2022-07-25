let fs = require('fs');
let o=0;

class Matrix {
	constructor(...size) {
		if(size.length === 2){
			this.row = size[0];
			this.col = size[1];
			this.matrix = Array.from(Array(this.row), () => new Array(this.col).fill(2));
			//console.log(Array.from(Array(this.row), () => new Array(this.col).fill(2)));
		} else if (size.length === 1) {
			this.row = size[0];
			this.col = size[0];
			this.matrix = Array.from(Array(this.row), () => new Array(this.col).fill(4));
			//console.log(Array.from(Array(this.row), () => new Array(this.col).fill(4)));
		}
	}
	diagonal(){
		let a = this.matrix;
		let n = a.length;
		for(let i=0; i<n; i++)
			for(let k =i+1; k<n; k++)
				if(Math.abs(a[i][i]) < Math.abs(a[k][i]))
					for(let j=0;j<=n;j++){
						let temp = a[i][j];
						a[i][j] = a[k][j];
						a[k][j] = temp;
					}
		for(let i = 0; i<n-1; i++)
			for(let k=i+1;k<n;k++){
				let t = a[k][i]/a[i][i];
				for(let j=0; j<=n;j++)
					a[k][j] = a[k][j] - t*a[i][j];
			}
		this.matrix =a;
	}
	
	init(file){
		let data = fs.readFileSync(file,'utf-8');
        	let arr = []
        	data.split('\r\n\r\n').map((el)=>{arr.push(el.split('\r\n').map((it)=>{
        	return it.split(' ')}))})
        	let p = [];
        	for(let i=0; i<arr.length;i++){
                	p.push([])
                	for(let j=0;j<arr[i].length;j++){
                        	p[i].push([])
                        	for(let k=0; k<arr[i][j].length;k++){
                                	p[i][j].push(Number(arr[i][j][k]))
                        	}
                	}
        	}
       		this.matrix = p[o]
		o++
	}
	//init_file(
	
}
module.exports = Matrix;
/*
let mat = new Matrix(3,4);
let arr1 = new Matrix(5);
let arr2 = new Matrix(3)
let arr3 = new Matrix(2)
let arr4 = new Matrix(1)
arr1.init('input.txt')
arr2.init('input.txt')
arr3.init('input.txt')
arr4.init('input.txt')
arr1.diagonal()
arr2.diagonal()
arr3.diagonal()
//arr4.diagonal()
console.log(arr1.matrix)
console.log(arr2.matrix)
console.log(arr3.matrix)
console.log(arr4.matrix)*/
