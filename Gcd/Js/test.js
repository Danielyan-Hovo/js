let fs = require('fs')
let gcd = require('./gcd.js')

const validate_input = (file) => {
        fs.writeFile('exit.txt','',() => {})
        if(!fs.existsSync(file)){
                fs.appendFile('exit.txt',`${file} file doesent exists!`,()=>{})
                return false
        }
        let data = fs.readFileSync(file,'utf-8')
        if(data.length === 0){
                fs.appendFile('exit.txt',`${file} file is empty!`,()=>{})
                return false
        }
        let err = ''
        let bool = true
        let line_count = 0
	data.split(/\r?\n/).forEach(line =>  {
                line_count++
                line.split(' ').forEach((item) => {
                        if ((+item) % 1 !== 0) {
                                err =`Error in line ${line_count} ${file}:  `+item+' is not correctly Number\n'
                                fs.appendFile('exit.txt',err,() => {})
                                bool = false
                        }
                })
	});
        return bool;
}


const test = () => {
        fs.truncate('exit.txt',() => {})
        fs.truncate('result.txt', () => {})
        let input = fs.readFileSync('test_input.txt','utf-8');
        let data = input.split('\r\n').map((i) => {return i.split(' ').map((j) => {return +j})})
	let golden = fs.readFileSync('golden.txt','utf-8').split('\n').map((i) => {return +i})
	golden.pop()
	let procent = 100;
        let temp
        for(let i=0;i<data.length; i++){
                temp = gcd(data[i][0],data[i][1])
                fs.appendFile('exit.txt',temp.toString()+'\n',()=>{})
                if(temp === golden[i]){
                        fs.appendFile('result.txt',`Test${i+1}:  ${temp} = ${golden[i]}  result: passed\n`,()=>{})
                } else {
                        fs.appendFile('result.txt',`Test${i+1}:  ${temp} != ${golden[i]}  result: failed\n`,()=>{})
                        procent -= 100/golden.length
                }
        }
	fs.appendFile('result.txt', `\n\nTests result: ${procent}%  ${procent>50?'Succesfully':'Failed'}\n` , ()=>{});
}

if(validate_input('test_input.txt')){
        test();
}
