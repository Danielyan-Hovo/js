TARGET = gcd
CC = g++

SRC = $(wildcard *.cpp)
OBJ = $(patsubst %.cpp, %.o, $(SRC))

all: $(TARGET) main

$(TARGET): $(OBJ)
	@g++ test.o -o gcd

main: main.o
	@g++ main.o -o main

%.o : %.cpp
	@$(CC) -c $< -o $@

run:
	@./main
	@echo "See your running result in exit.txt"

test:
	@./$(TARGET)
	@echo "Testing..."

clean:
	@rm $(TARGET) main *.o exit.txt result.txt
	@echo "Cleaning..."
