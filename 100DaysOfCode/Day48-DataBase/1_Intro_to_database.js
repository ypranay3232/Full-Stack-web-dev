// 1. Files vs. Databases
// storing data in simple .txt or .csv files is fine for a grocery list, but terrible for a business.

// The Inefficiency: In a file-based system, if you want to update one user’s phone number in a list of a million, the computer often has to load the entire file into memory, find the line, change it, and save it back.

// The DBMS Solution: A Database Management System (DBMS) is like a highly efficient librarian. You don't walk into the library and read every book to find a fact; you ask the librarian, and they pull exactly what you need.

// 2. The Hierarchy: Server vs. Database vs. Table : 
// Level	                Analogy	                Description

// Database Server	        The Building	        The actual software/hardware running (e.g., MySQL, PostgreSQL). It can hold many databases.

// Database	                The Room	             A container for a specific project (e.g., "Ecommerce_App_DB").

// Table	                The File Cabinet	     A specific category of data (e.g., "Users", "Products", "Orders").

// Row (Record)	            The Folder	             A single entry (e.g., User ID #101: John Doe).

// Column (Field)	        The Form Line	         A specific attribute (e.g., "Email Address").


// 3. SQL (Relational) vs. NoSQL (Non-Relational)

// SQL (Relational)
// Structure: Strict tables (Rows and Columns).

// Relationships: This is what you meant by "linking IDs." We call these Primary Keys (unique ID in the home table) and Foreign Keys (that same ID used in a different table to create a link).

// Scaling: Usually vertical (getting a beefier computer).

// NoSQL (Non-Relational)
// Structure: Flexible. Data is often stored as "Documents" (look like JSON objects) or "Key-Value pairs."

// Use Case: Great for massive amounts of unstructured data (like social media feeds or real-time sensor data) where the "shape" of the data might change often.

// Scaling: Horizontal (adding more cheap computers to a cluster).


// 4. The "CRUD" Operations

// Create → INSERT (Add new data)

// Read → SELECT (Fetch data)

// Update → UPDATE (Change existing data)

// Delete → DELETE (Remove data)


// now install mysql. 