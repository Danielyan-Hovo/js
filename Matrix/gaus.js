let fs = require('fs');
let Matrix = require('./matrix.js')

const diagonal = (n, a) => {
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
	return a;
}


const gaus = (n, a) => {
	a = diagonal(n,a);
	let x = new Array();
	let sum = 0;
	for(let i = n-1; i>=0; i--){
		x[i] = a[i][n];
		for(let j=i+1; j<n;j++)
			if(j!==i)
				x[i] = x[i] -a[i][j] * x[j];
		x[i] = Math.round(x[i] / a[i][i]*1000)/1000;
	}
        return x;
}
module.exports = gaus

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
console.log(arr1.matrix)
console.log(arr2.matrix)
console.log(arr3.matrix)
console.log(arr4.matrix)

