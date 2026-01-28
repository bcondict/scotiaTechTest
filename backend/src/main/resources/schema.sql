CREATE TABLE "products" (
    "product_id" VARCHAR(36),
    "product_code" VARCHAR(10) NOT NULL,
    "product_name" VARCHAR(100) NOT NULL,
    "product_description" VARCHAR(200),
    "reg_date" TIMESTAMP NOT NULL,
    "mod_date" TIMESTAMP,
    "state" BOOLEAN NOT NULL,
    PRIMARY KEY ("product_id")
);
