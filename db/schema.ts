// schema.ts
import { pgTable, serial, text, integer, varchar, timestamp, numeric } from 'drizzle-orm/pg-core';

export const inventoryItems = pgTable('inventory_items', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  quantity: integer('quantity').notNull(),
  vendorLink: varchar('vendor_link',{ length: 255 }), // Optional vendor link
});

// import { relations } from 'drizzle-orm';

// export const restocks = pgTable('restocks', {
//   id: serial('id').primaryKey(),
//   itemId: integer('item_id').notNull().references(() => inventoryItems.id),
//   restockDate: timestamp('restock_date').defaultNow().notNull(),
//   quantityOrdered: integer('quantity_ordered').notNull(),
//   price: numeric('price', { precision: 10, scale: 2}), // Optional price with two decimal places
// });

// // Define relationships
// export const inventoryItemsRelations = relations(inventoryItems, ({ many }) => ({
//   restocks: many(restocks),
// }));

// export const restocksRelations = relations(restocks, ({ one }) => ({
//   item: one(inventoryItems, { fields: [restocks.itemId], references: [inventoryItems.id] }),
// }));