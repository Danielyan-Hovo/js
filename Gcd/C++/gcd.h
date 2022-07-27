int gcd(int num1,int num2){
	if(num2==0) return num1;
	else return gcd(num2,num1%num2);
}

bool isNumber(std::string line){
	char* p;
	strtol(line.c_str(), &p, 10);
	return *p == 0;
}

bool validate_input(std::string file){
        std::ifstream input(file);
        std::ofstream exit("exit.txt");
        int a, b;
        if(!input.good()) {
                exit<<"Input file is absent!\n";
                input.close(); exit.close();
                return false;
        }
        if (input.peek() == std::ifstream::traits_type::eof()){
                exit<<"Input file is Empty!\n";
                input.close(); exit.close();
                return false;
        }
        while(input>>a) {
                if(!(a && b) && a != 0 && b != 0){
                        exit<<"Is not a Number in file!\n";
                        input.close(); exit.close();
                        return false;
                }
        }
        input.close(); exit.close();
        return true;
}
