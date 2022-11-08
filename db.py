import psycopg2 
con = psycopg2.connect(
            host = "husseinmac",
            database="husseindb",
            user = "postgres",
            password = "postgres") 
cur = con.cursor()

cur.execute("insert into employees (id, name) values (%s, %s)", (1, "Hussein") )
cur.execute("select id, name from employees")
rows = cur.fetchall()
for r in rows:
    print (f"id {r[0]} name {r[1]}")
con.commit()
cur.close()
con.close()