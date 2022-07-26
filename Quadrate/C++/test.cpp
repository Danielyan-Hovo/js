#include <fstream>
#include <iostream>
#include "quadrate.h"

void test(){
	std::ifstream infile;
	std::ofstream exitfile;
	std::ifstream golden;
	std::ofstream result;
	result.open("result.txt");
	golden.open("golden.txt");
	exitfile.open("exit.txt");
	infile.open("input.txt");
	float a,b,c;
	if (!infile) {
		exitfile<<"ERROR from input.txt file"<<std::endl;
	}
	else {
		while (infile >> a >> b >> c) {
			auto x = qarakusayin(a,b,c);
			decltype(x) y = std::vector<float>({0, 0});
			decltype(x) z = std::vector<float>({0, 0, 0});
			if (x == z) {
				exitfile << "ERROR 007 (There is no solution) " << std::endl;
			}
			else if (x == y) {
				exitfile << "Solution are Real numbers" << std::endl;
			}
			else {
				for (auto&i: x) {
					exitfile << i << "  ";
				}
				exitfile << std::endl;
			}
		}
		exitfile.close();
		std::ifstream exitfile;
		exitfile.open("exit.txt");
		float c,d;
		int number = 0;
		int procent = 100;
		while(golden >> c && exitfile >> d) {
			number++;
			if(c == d)
				result << c << "\t" << d << "\t test " << number << " passed!" << std::endl;
			else {
				result << c << "\t" << d << "\ttest " << number << " failed!" << std::endl;
				procent -=10;
			}
		}
		if (procent>=50)
			result << std::endl << "Tests passed Succesfully:" << std::endl << "Tests Result:  " << procent << "%";
	}
	golden.close();
	result.close();
	exitfile.close();
	infile.close();
}

int main()
{
	test();
	return 0;
}
