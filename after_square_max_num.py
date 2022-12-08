a=[1,3,4,2,6]
i=0
b=[]
max=0
while i<len(a):
    c=a[i]*a[i]
    b.append(c)
    if b[i]>max:
        max=b[i]
    i=i+1
print(max)

