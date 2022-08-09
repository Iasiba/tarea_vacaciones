https://dbdiagram.io/d/62eb27f5f31da965e877fba4

CREATE TABLE "users" (
  "id" serial PRIMARY KEY,
  "name" varchar NOT NULL,
  "email" varchar UNIQUE NOT NULL,
  "password" varchar NOT NULL,
  "phone" varchar UNIQUE NOT NULL
);

CREATE TABLE "permissions_user" (
  "id" serial PRIMARY KEY,
  "user_id" int NOT NULL
);

CREATE TABLE "products" (
  "id" serial PRIMARY KEY,
  "cost" int NOT NULL,
  "description" text NOT NULL
);

CREATE TABLE "cart" (
  "id" serial PRIMARY KEY,
  "user_id" int UNIQUE NOT NULL,
  "products_id" int UNIQUE NOT NULL
);

CREATE TABLE "orders" (
  "id" serial PRIMARY KEY,
  "user_id" int UNIQUE NOT NULL,
  "products_id" int UNIQUE NOT NULL,
  "price" int NOT NULL,
  "paid_out" boolean DEFAULT false,
  "created_at" timestamp DEFAULT 'now()',
  "updated_at" timestamp DEFAULT 'now()',
  "paid_date" timestamp
);

CREATE TABLE "debts" (
  "id" serial PRIMARY KEY,
  "order_id" int NOT NULL,
  "user_id" int NOT NULL,
  "cost" int NOT NULL
);

ALTER TABLE "permissions_user" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "products" ADD FOREIGN KEY ("id") REFERENCES "orders" ("products_id");

ALTER TABLE "debts" ADD FOREIGN KEY ("order_id") REFERENCES "orders" ("id");

ALTER TABLE "products" ADD FOREIGN KEY ("id") REFERENCES "cart" ("products_id");

ALTER TABLE "cart" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "orders" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");