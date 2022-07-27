#include <fstream>
#include <iostream>
#include <string>
#include "gcd.h"

void test_gcd(){
	std::ifstream input;
        std::ofstream exit;
        std::ifstream golden;
        std::ofstream result;
        result.open("result.txt");
        golden.open("golden.txt");
        exit.open("exit.txt");
        input.open("test_input.txt");
        int a,b;
        while(input>>a>>b){
                exit<<gcd(a,b)<<std::endl;
        }
        exit.close();
        std::ifstream exit;
        exit.open("exit.txt");
        int c,d;
        int number = 0;
        int procent = 100;
        while(golden>>c && exit>>d){
                number++;
                if(c == d)
                        result<<c<<"\t"<<d<<"\t test "<<number<<" passed!"<<std::endl;
                else{
                         result<<c<<"\t"<<d<<"\ttest "<<number<<" failed!"<<std::endl;
                         procent -=10;
                }
         }
        if(procent>=50) result<<std::endl<<"Tests passed Succesfully:"<<std::endl<<"Tests Result:  "<<procent<<"%";
        golden.close();
        result.close();
        exit.close();
        input.close();
}

int main(){
        if(validate_input("test_input.txt")) {
	        test_gcd();
        }
	return 0;
}

