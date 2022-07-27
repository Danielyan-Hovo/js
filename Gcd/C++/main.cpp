#include <fstream>
#include <iostream>
#include <string>
#include "gcd.h"


int main(){
        if(validate_input("input.txt")){
	        std::ifstream input;
                std::ofstream exit;
                exit.open("exit.txt");
                input.open("input.txt");
                int a,b;
                while(input>>a>>b){
                        exit<<gcd(a,b)<<std::endl;
                }
                exit.close();
                input.close();
        }
	return 0;
}
