# 1.sum answer

# a=int(input("enter the number:-"))
# b=int(input("enter the number:-"))
# def sum(a,b):
#     c=a+b
#     return c
# print(sum(a,b))

# 2. answer

# list=[1,3,7,9,6,8,8,9,0]
# def a(list):
#     i=0
#     c=[]
#     while i<len(list):
#         if list[i] not in c:
#             c.append(list[i])
#         i=i+1  
#     return c
# print(a(list))

# 3.answer

# a=[3,9,8,7,15]
# i=0
# while i<len(a):
#     print(a[i])
#     i=i+1

# 4.answer

# i=0
# while i<len(a):
#     s=a[i]*a[i]
#     i=i+1
#     print(s)


# a=int(input("enter the number:-"))
# b=int(input("enter the number:-"))
# def mul(a,b):
#     c=a*b
#     return c
# print(mul(a,b))


# i=0
# sum=0
# while i<100:
#     sum=sum+1
#     i=i+1
#     print(i)


# list=[8,-5,22,23,-3]
# def number():
#   i=0
#   max=0
#   while i<len(list):
#     if list[i]>max:
#         max=list[i]
#     i=i+1
#   print(max) 
# number()   


def palidrom(s):
    if (s==s[::-1]):
       return ("its is palidrom")
    else:
       return ("its is not palidrom")
s=input("enter a string....")
d=palidrom(s)
print(d)