#python Linear equation
import os
def gcayin1(a, b):
    x = 0
    if(a != 0):
        x = b / a
        return round(x, 2)
    elif(a == 0 and b == 0):
        string = "solutions are ininite"
        return string
    else:
        string = "there is no solution"
        return string


with open('exitLinear.txt','w') as out:
    if(os.path.getsize('inputLinear.txt') > 2):
        with open('inputLinear.txt', 'r') as inpt:
            golden = open('goldenLinear.txt', 'r')
            result = open('resultsLinear.txt', 'w')
            x = inpt.readlines()
            for i in x:
                k = eval(i.strip())
                v,b = k
                h = str(gcayin1(v, b))
                out.write(h)
                out.write('\n')
                l_elem = golden.readline().strip()  #gets element from golden results
                if(h == l_elem):
                    result.write(f"{str(h)} is equal to {str(l_elem)}, test passed")
                    result.write('\n')
                else:
                    result.write(f"{str(h)} is not equal to {str(l_elem)}, test failed!")
                    result.write('\n')
            golden.close(); result.close()
    else:
        out.write(str("Input file is empty!"))

