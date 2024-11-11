import { boolean, integer, jsonb, pgTable, serial, text, timestamp, varchar } from "drizzle-orm/pg-core";

// Users Schema
export const usersTable = pgTable("users", {
    id: serial("id").primaryKey().primaryKey(),
    name: varchar("name", { length: 255 }).notNull(),
    email: varchar("email", { length: 255 }).notNull().unique(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
});


// Waste Reports Schema
export const reportsTable = pgTable("reports", {
    id: serial("id").primaryKey().primaryKey(),
    userId: integer("user_id").references(() => usersTable.id).notNull(),
    collectorId: integer("collector_id").references(() => usersTable.id).notNull(),
    location: varchar("location", { length: 255 }).notNull(),
    wasteType: varchar("waste_type", { length: 255 }).notNull(),
    amount: varchar("amount", { length: 255 }).notNull(),
    imageURL: varchar("image_url", { length: 255 }).notNull(),
    verificationResult: jsonb("verification_result").notNull(),
    status: varchar("status", { length: 255 }).notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
});


// Waste Rewards Schema
export const rewardsTable = pgTable("rewards", {
    id: serial("id").primaryKey().primaryKey(),
    userId: integer("user_id").references(() => usersTable.id).notNull(),
    points: integer("points").notNull().default(0),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAT: timestamp("updated_at").defaultNow().notNull(),
    isAvailable: boolean("is_available").notNull().default(true),
    description: text("description").notNull(),
    name: varchar("name", { length: 255 }).notNull(),
    collectionInfo: text("collection_info").notNull(),
});


// Collected Waste Schema
export const collectedWasteTable = pgTable("collectedWaste", {
    id: serial("id").primaryKey().primaryKey(),
    reportId: integer("report_id").references(() => reportsTable.id).notNull(),
    collectorId: integer("collector_id").references(() => usersTable.id).notNull(),
    collectionDate: timestamp("collection_date").notNull(),
    status: varchar("status", { length: 255 }).notNull().default("collected"),
});


// Notifications Schema
export const notificationsTable = pgTable("notifications", {
    id: serial("id").primaryKey().primaryKey(),
    userId: integer("user_id").references(() => usersTable.id).notNull(),
    message: varchar("message", { length: 255 }).notNull(),
    type: varchar("type", { length: 50 }).notNull(),
    isRead: boolean("is_read").notNull().default(false),
    createdAt: timestamp("created_at").defaultNow().notNull(),
})


// Transactions Schema
export const transactionsTable = pgTable("transactions", {
    id: serial("id").primaryKey().primaryKey(),
    userId: integer("user_id").references(() => usersTable.id).notNull(),
    amount: integer("amount").notNull(),
    type: varchar("type", { length: 50 }).notNull(),
    description: text("description").notNull(),
    date: timestamp("date").notNull(),
});