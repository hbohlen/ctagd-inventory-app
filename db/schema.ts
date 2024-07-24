// schema.ts
import {
  pgTable,
  serial,
  text,
  integer,
  varchar,
  timestamp,
  numeric
} from 'drizzle-orm/pg-core';

export const inventoryItems = pgTable('inventory_items', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  quantity: integer('quantity').notNull(),
  vendorLink: varchar('vendor_link', { length: 255 }) // Optional vendor link
});

export const beverages = pgTable('beverages', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  quantity: integer('quantity').notNull()
});

// Define the restocks table
export const restocks = pgTable('restocks', {
  id: serial('id').primaryKey(),
  beverageId: integer('beverage_id')
    .notNull()
    .references(() => beverages.id),
  dateTime: timestamp('date_time').notNull(),
  amount: integer('amount').notNull()
});

// Define the counts table
export const counts = pgTable('counts', {
  id: serial('id').primaryKey(),
  beverageId: integer('beverage_id')
    .notNull()
    .references(() => beverages.id),
  dateTime: timestamp('date_time').notNull(),
  amount: integer('amount').notNull()
});
