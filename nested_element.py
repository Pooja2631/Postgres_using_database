# list1 = [['g', 'f', 'g'],['i', 's','b'], ['e', 's', 't'] ]
# str=""
# i=0
# while i<len(list1):
#     j=0
#     while j<len(list1[i]):
#         str=str+list1[i][j]
#         j=j+1
#     i=i+1
# print(str)

list1 = [ ['g', 'f', 'g'], ['i', 's'], ['b', 'e', 's', 't'] ]
# output= gfgisbest
string=""
i=0
while i<len(list1):
    j=0
    while j<len(list1[i]):
        string= string+list1[i][j]
        j=j+1
    i=i+1
print(string)