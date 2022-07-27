let fs = require('fs');
const gcd = (num1, num2) => {
	if(num2 === 0) return num1;
	return gcd(num2, num1 % num2);
}
module.exports = gcd


const validate_input = (file) => {
        fs.truncate('exit.txt',() => {})
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


const run = () => {
        fs.truncate('exit.txt',() => {})
        let input = fs.readFileSync('input.txt','utf-8');
        let data = input.split('\r\n').map((i) => {return i.split(' ').map((j) => {return +j})})
        let temp
        for(let i=0;i<data.length; i++){
                temp = gcd(data[i][0],data[i][1])
                fs.appendFile('exit.txt',temp.toString()+'\n',()=>{})
        }
}

if(validate_input('input.txt')){
        run();
}
