List = [6,1,3,5,6,3,1]
lis=[]
i=0
pro=1
while i<len(List):
    if List[i] not in lis:
        lis.append(List[i])
        pro=pro*lis[i]
    i=i+1
print(lis)
print(pro,"product of unique elements")
