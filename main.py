import psycopg2
from queries import \
    read_all_query, create_row_query, update_rows_query, delete_rows_query

con = psycopg2.connect(
    userName='charfield',
    firstName='charfield',
    lastNmae='charfield',
    age= 'charfield',
    database='charfield'
)
cur = con.cursor()
cur.execute(
)
con.commit()
cur.close()
con.close()


import psycopg2
conn = psycopg2.connect(
   database="postgres",
    user='postgres',
    password='password',
    host='localhost',
    port= '5432'
)
  
conn.autocommit = True
cursor = conn.cursor() 
sql = ''' CREATE database products ''';
cursor.execute(sql)
print("Database has been created successfully !!");
conn.close()

