let fs = require('fs');
let gaus = require('./gaus.js')

const ll = (data) => {
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
        return p
}

(function () {
	fs.writeFile('exit.txt', '', ()=>{});
	let input = fs.readFileSync('input.txt','utf-8');
        let ex
        let g = fs.readFileSync('golden.txt','utf-8');
	console.log(ll(g))
	ll(input).forEach((el)=>{
		//console.log(el)
                console.log(gaus(el.length,el))
                fs.appendFileSync('exit.txt',gaus(el.length,el).join(' ')+'\n',()=>{})
        })
})()



//let golden = g.split('\n');

//let length = golden.length;
//let result = '';
//for(let i = 0; i < length-1; i++){
//	if(exit[i] === golden[i])
//		result += `Test ${i+1}   passed Succesfully <3\n`;
//	else
//		result += `Test  ${i+1}  failed !!!\n`;
//}
//fs.writeFile('result.txt', result,()=> console.log('Testing'));
