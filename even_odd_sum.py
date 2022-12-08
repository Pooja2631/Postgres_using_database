# a=[80,60,40,5,3,55,76]
# i=0
# b=[]
# c=[]
# sum=0
# sum1=0
# while i<len(a):
#     if a[i]%2==0:
#         sum=sum+a[i]
#         b.append(sum)
#     else:
#         sum1=sum1+a[i]
#         c.append(sum1)
#     i=i+1
# print(b)
# print(c)

lis = [80,60,40,5,3,55,76]
even=0
odd=0
i=0
while i<len(lis):
    if lis[i]%2==0:
        even=even+lis[i]
    else:
        odd=odd+lis[i]
    i=i+1
print(even,"even sum")
print(odd,"odd sum")   