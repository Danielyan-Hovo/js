let fs = require('fs');


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
	//for (let i = 0; i<n; i++)
	//	answer += `X${i+1} = ${Math.round(x[i]*1000)/1000}\t\t`;
	//answer += '\n';
	//fs.appendFile('exit.txt',x, ()=>{})
}
module.exports = gaus

