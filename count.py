list1=[1, 2, 2, 5, 8, 4, 4, 8,8,9]
i=0
lis=[]
count=0
while i<len(list1):
    if list1[i] not in lis:
        lis.append(list1[i])
        count=count+1
    i=i+1
print(lis,"total unique elements are:",count)
