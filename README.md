📘 Expense Tracker – Spring Boot Backend

A simple and clean REST API built using Spring Boot, Spring Data JPA, and MySQL to manage expenses.
Supports CRUD operations and is fully ready for integration with a React frontend.

🚀 Features

Add new expenses

Retrieve all expenses

Fetch expense by ID

Update existing expenses

Delete expenses

MySQL database integration

CORS enabled for frontend use

Production-ready REST API structure

🛠 Tech Stack

Java 21

Spring Boot 3.5.7

Spring Data JPA

MySQL

Hibernate

Lombok

📂 Project Structure
src/
 └── main/
     ├── java/com/dcl/expense_tracker/
     │   ├── controller/      → REST API endpoints
     │   ├── model/           → Expense entity
     │   ├── repository/      → JPA repository
     │   └── service/         → Business logic layer
     └── resources/
         ├── application.properties

⚙️ Setup Instructions
1️⃣ Clone the Repository
git clone https://github.com/Varun-13-sys/Expense-Tracker.git
cd Expense-Tracker

2️⃣ Configure MySQL

Create a database:

CREATE DATABASE expense_tracker;

3️⃣ Update application.properties
spring.datasource.url=jdbc:mysql://localhost:3306/expense_tracker
spring.datasource.username=root
spring.datasource.password=YOUR_PASSWORD

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.format_sql=true

4️⃣ Run the Application
mvn spring-boot:run


The backend will start at:
👉 http://localhost:8080

🧪 API Endpoints (Test in Postman)
✅ 1. Get All Expenses

GET

http://localhost:8080/api/expenses

✅ 2. Get Expense by ID

GET

http://localhost:8080/api/expenses/{id}


Replace {id} with a valid expense ID.

✅ 3. Add a New Expense

POST

http://localhost:8080/api/expenses

Request Body
{
  "title": "Groceries",
  "amount": 500,
  "category": "Food",
  "date": "2025-02-14"
}

✅ 4. Update an Expense

PUT

http://localhost:8080/api/expenses/{id}

Request Body
{
  "title": "Updated Groceries",
  "amount": 750,
  "category": "Supermarket",
  "date": "2025-02-16"
}

✅ 5. Delete an Expense

DELETE

http://localhost:8080/api/expenses/{id}

🗄 Expense Model (Entity)
@Entity
public class Expense {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private double amount;
    private String category;
    private LocalDate date;

    // getters and setters
}

🤝 Contributing

Contributions are welcome!
Feel free to open issues or submit pull requests.
