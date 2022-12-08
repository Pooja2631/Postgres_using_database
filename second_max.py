N=[12,3,4,56,67,8,9]
i=0
max=0
while i<len(N):
    if N[i]>max:
        max=N[i]
    i=i+1
    j=0
    sec=0
    while j<len(N):
        if max>N[j] and N[j]>sec :
            sec=N[j]
        j=j+1
print(max)
print(sec)  