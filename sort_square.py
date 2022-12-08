n=[1,3,4,6,8,2,7]
i=0
a=[]
while i<len(n):
    n.sort()
    s=n[i]*n[i]
    a.append(s)
    i=i+1
print(a)