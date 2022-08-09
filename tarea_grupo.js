
CREATE TABLE "users" (
  "id" serial PRIMARY KEY,
  "name" varchar NOT NULL,
  "email" varchar UNIQUE NOT NULL,
  "password" varchar NOT NULL,
  "phone" varchar UNIQUE NOT NULL
);
CREATE TABLE "posts" (
  "id" serial PRIMARY KEY,
  "user_id" int NOT NULL,
  "content_tex" text NOT NULL,
  "category" text NOT NULL,
  "title" varchar(30) NOT NULL
);
CREATE TABLE "commentaries" (
  "id" serial PRIMARY KEY,
  "post_id" int NOT NULL,
  "user_id" int NOT NULL,
  "message" varchar(144) NOT NULL
);
ALTER TABLE "posts" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");
ALTER TABLE "commentaries" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");
ALTER TABLE "commentaries" ADD FOREIGN KEY ("post_id") REFERENCES "posts" ("id");
select * from users
insert into users (
    name,
    email,
    password,
    phone
) values (
    'Abisai',
    'abisai@gmail.com',
    '1234',
    '0000'
),(
    'Ferney',
    'ferney@gmail.com',
    '2345',
    '1111'
),(
    'Iván',
    'ivan@gmail.com',
    '3456',
    '2222'
);
select * from posts
insert into posts (
    user_id,
    content_tex,
    category,
    title
) values (
    1,
    'Prueba de texto 1',
    'Categoría 1',
    'Título 1'
),(
    2,
    'Prueba de texto 2',
    'Categoría 2',
    'Título 2'
),(
    3,
    'Prueba de texto 3',
    'Categoría 3',
    'Título 3'
);
select * from commentaries
insert into commentaries (
    post_id,
    user_id, 
    message
) values (
    2,
    1,  
    'Mensaje de prueba 1'
),(
    3,
    2,  
    'Mensaje de prueba 2'
),(
    4,
    3,  
    'Mensaje de prueba 3'
);
