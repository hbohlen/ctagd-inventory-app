CREATE TABLE IF NOT EXISTS "inventory_items" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"quantity" integer NOT NULL,
	"vendor_link" varchar(255)
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "restocks" (
	"id" serial PRIMARY KEY NOT NULL,
	"item_id" integer NOT NULL,
	"restock_date" timestamp DEFAULT now() NOT NULL,
	"quantity_ordered" integer NOT NULL,
	"price" numeric(10, 2)
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "restocks" ADD CONSTRAINT "restocks_item_id_inventory_items_id_fk" FOREIGN KEY ("item_id") REFERENCES "public"."inventory_items"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
