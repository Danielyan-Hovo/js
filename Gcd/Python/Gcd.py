#Gcd python
import os
def bajanarar(a,b):
    if (b==0):
        return a
    else:
        return bajanarar(b,a%b)

def main():
    out = open('exitGcd.txt','w')
    if(os.path.getsize('inputGcd.txt')>2):
        inpt = open('inputGcd.txt', 'r')
        golden = open('goldenGcd.txt', 'r')
        result = open('result.txt', 'w')
        x = inpt.readlines()
        for i in x:
            k = eval(i.strip())
            v,b = k
            h = bajanarar(v,b)
            out.write(str(h))
            out.write('\n')
            g_elem = eval(golden.readline())  #gets one element from golden results
            if(h == g_elem):
                result.write(f"{str(h)} is equal to {str(g_elem)}, test passed")
                result.write('\n')
            else:
                result.write(f"{str(h)} is not equal to {str(g_elem)}, test failed!")
                result.write('\n')
        out.close(); inpt.close()
        golden.close(); result.close()
    else:
        out.write(str("Input file is empty"))

main()
