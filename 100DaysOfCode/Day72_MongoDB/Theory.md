# Day 72: Introduction to Databases and MongoDB

## 1. Data Storage: Why Databases?
While it is technically possible to store data in simple text files, this approach lacks scalability, security, and efficiency. File systems struggle to efficiently manage relationships between data, handle high concurrency, or perform complex queries quickly. Furthermore, traditional text files are not optimal for organizing diverse data types. Thus, we use dedicated **Databases (DB)** to manage, retrieve, and store data robustly.

## 2. Types of Databases
Databases are broadly classified into two main categories:

* **SQL (Relational Databases):** 
  * Data is strictly structured and stored in **Tables** containing **Rows** and **Columns**.
  * Ideal for applications with complex data relationships and strict schemas.
  * *Examples:* PostgreSQL, MySQL, Oracle.
* **NoSQL (Non-Relational Databases):** 
  * Data is stored flexibly, often as JSON-like documents containing **Key-Value pairs**. 
  * Highly scalable and flexible, making it ideal for unstructured or rapidly changing data.
  * *Examples:* MongoDB, CouchDB, Redis, Cassandra.

---

## 3. Backend Architecture Basics
A standard modern backend environment typically consists of two distinct servers working together:

### A. Application Server (e.g., Node.js / Express)
* **Role:** Acts as the brain of the backend. It contains all the routing logic and handles incoming HTTP requests from the client (e.g., a user visiting a website).
* **Functionality:** It processes business logic, authenticates users, and manages everything *except* direct persistent data storage. Whenever the application needs to read or save data, it sends a request to the Database Server.

### B. Database Server (e.g., MongoDB)
* **Role:** Dedicated entirely to securely storing, managing, sorting, and retrieving data. 
* **Organization:** Data is segregated into different logical categories. For example, a single database might contain separate sections for `customers`, `sales`, and `inventory`.

---

## 4. MongoDB Terminologies
MongoDB uses specific terminology to define its data hierarchy. Understanding how data is nested is crucial:

* **Database:** The highest level of data organization. It acts as a container that holds multiple collections.
  * *In Mongoose (Node.js):* When you run `mongoose.connect(...)`, you establish a connection to a specific Database.

* **Collection:** A grouping of related data. It is the NoSQL equivalent of a SQL "Table".
  * *Example:* A `customers` collection holds data for all individual customers.
  * *In Mongoose:* Defining a `Model` (e.g., `mongoose.model('User', userSchema)`) creates or connects to a specific collection in the database.

* **Document:** A single record or entry within a collection. It is the NoSQL equivalent of a SQL "Row". A document represents one specific entity, containing fields (key-value pairs) like `{ name: "Alice", age: 25, gender: "female" }`.
  * *In Mongoose:* Using commands like `User.create(...)` generates a brand new Document and inserts it into your collection.

---

### Mongoose Workflow Summary:
1. **Connect:** Set up a connection to the Database (`mongoose.connect`).
2. **Structure:** Define the shape of your data and create a Collection via a Schema & Model (`mongoose.model`).
3. **Insert:** Add individual entries to the Collection by creating Documents (`Model.create`).
