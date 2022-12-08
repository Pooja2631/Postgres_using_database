n=int(input("enter the number:-"))
i=1
for a in range(n):
    if i%2==0:
        for j in range(4,-1,-1):
            print(j+i,end=" ")
        print()
        i+=5
    else:
        for j in range(5):
            print(i,end=" ")
            i+=1
        print()
