# list=[3,4,5,6,7,8]
# i=0
# a=[]
# while i<len(list):
#     c=list[i]+list[i+1]
#     a.append(c)
#     i=i+2
# print(a)

# lis=[3,4,5,6,7,8]
# i=0
# j=1
# sum=0
# while i<len(lis):
#     sum=lis[i]+lis[j]
#     print(sum)
#     j=j+2
#     i=i+2

# list1=[3,4,5,6,7,8]
# i=0
# while i<len(list1):
#     j=1
#     a=[]
#     while j<len(list1):
#         sum=list1[i]+list1[j]
#         a.append(sum)
#         j=j+2
#     i=i+2
# print(a)



list1=[3,4,5,6,7,8]
i=0
a=[]
while i<len(list1):
    j=1
    while j<len(list1):
        sum=list1[i]+list1[j]
        if sum not in a:
        	a.append(sum)
        j=j+2 
    i=i+2
print(a)


