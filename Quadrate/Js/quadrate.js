let fs = require('fs');

const disc = (a, b, c) => b*b-4*a*c;

const quadrate = (a, b, c) => {
	let d = disc(a, b, c)
	if (a === 0 && b === 0 && c === 0){
   		return Infinity;
  	}
  	else if (d < 0){
    		return NaN;
  	}else if (d == 0){
    		return Math.round(((- b - Math.sqrt(d)) / (2 * a))*100)/100;
  	}else if (d > 0){
  		let arr = [];
    		arr.push(Math.round(((- b + Math.sqrt(d)) / (2 * a))*100)/100)
     		arr.push(Math.round(((- b - Math.sqrt(d)) / (2 * a))*100)/100)
     		return arr;
  }
}
module.exports = quadrate


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
                        if (isNaN(+item)) {
                                err =`Error in line ${line_count} ${file}:  "`+item+'" is not a Number\n'
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
        let data = input.split('\n').map((i) => {return i.split(' ').map((j) => {return +j})})
        data.pop()
        let temp
        for(let i=0;i<data.length; i++){
                temp = quadrate(data[i][0],data[i][1],data[i][2])
                fs.appendFile('exit.txt',temp.toString()+'\n',()=>{})
        }
}

if(validate_input('input.txt')){
        run();
}

