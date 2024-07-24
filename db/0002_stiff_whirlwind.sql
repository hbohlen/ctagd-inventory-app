CREATE TABLE IF NOT EXISTS "beverages" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"quantity" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "counts" (
	"id" serial PRIMARY KEY NOT NULL,
	"beverage_id" integer NOT NULL,
	"date_time" timestamp NOT NULL,
	"amount" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "restocks" (
	"id" serial PRIMARY KEY NOT NULL,
	"beverage_id" integer NOT NULL,
	"date_time" timestamp NOT NULL,
	"amount" integer NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "counts" ADD CONSTRAINT "counts_beverage_id_beverages_id_fk" FOREIGN KEY ("beverage_id") REFERENCES "public"."beverages"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "restocks" ADD CONSTRAINT "restocks_beverage_id_beverages_id_fk" FOREIGN KEY ("beverage_id") REFERENCES "public"."beverages"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
