import { pgTable, serial, text } from "drizzle-orm/pg-core";

export const vendorsTable = pgTable("vendors", {
    id: serial().primaryKey(),
    first_name: text().notNull(),
    last_name: text().notNull(),
    vendor_name: text().notNull(),
    location: text().notNull(),
});

export type SelectVendor = typeof vendorsTable.$inferSelect;
