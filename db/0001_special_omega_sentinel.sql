CREATE TABLE IF NOT EXISTS "inventory_items" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"quantity" integer NOT NULL,
	"vendor_link" varchar(255)
);
--> statement-breakpoint
DROP TABLE "user";