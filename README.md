# Directory of contact for CDN company

## Install Prerequisites
<details>
<summary>Tools Installation Before Start</summary>
  
### Installation of SQL server 2022 Developer
  
Available at: https://www.microsoft.com/en-us/sql-server/sql-server-downloads

### Installation of SQL Server Management Studio (SSMS)

(for environment)

Available at: https://learn.microsoft.com/en-us/sql/ssms/download-sql-server-management-studio-ssms?view=sql-server-ver16

### Installation of Visual Studio

(for setting up API)

Available at: https://visualstudio.microsoft.com/downloads/

Choose the 'Community' version

### Installation of Visual Studio Code

### Installation of Postman

(for testing API)

Available at: https://www.postman.com/downloads/

### Installation of Node.js

Available at: 

</details>

## Create Backend using .NET Core Web API

<details>
<summary>1. Create a New ASP.NET Core Web API Project</summary>

Project name: CDN-WebApplication1

-with .NET 6.0 Framework

</details>

<details>
<summary>2. Add a Model</summary>

To implement the data model class, under the *UserModel* folder,

- class name: *People.cs*
- The attributes for the model is added:
  - Id, Username, Email, PhoneNumber, Skillsets, Hobby
  - Note: The *Id* attribute is for the primary key in the database.

![image](https://github.com/BaoYiLeeby/assessment-CDN/assets/60701681/92ff96a4-752c-462b-95c5-2ea46b0e5711)

- Entity Framework Core (EF Core) is used here with the model to create the database.
  - The EF Core NuGet packages are installed. 

</details>

<details>
<summary>3. Add a Database Context for MSSQL</summary>

To coordinate the EF functionality for the data model, under the *UserModel* folder,

- class name: *PeopleContext.cs*

![image](https://github.com/BaoYiLeeby/assessment-CDN/assets/60701681/5c3044c8-027d-4cdb-b1af-e7a20b51d71a)

In EF terminology,
- For the database table, as represented by the entity set (*DbSet<User>* property)
- For the row in the table, as represented by the entity

To pass the name of the connection string, a method on *DbContextOptions* object is called.

For local development, the ASP.NET Core configuration system reads the connection string from the appsettings.json file.

To configure MSSQL connection string, in *appsettings.json* file, 

- Add the connection string
  - Here, the local SQL server in my machine is used.
 
![image](https://github.com/BaoYiLeeby/assessment-CDN/assets/60701681/e6d09cf0-5df8-4b8f-9e9e-02ed23f7220b)

</details>

<details>
<summary>4. Inject Dependency of the Database Context</summary>

To register the database context (*PeopleContext*)

In *Program.cs*,

![image](https://github.com/BaoYiLeeby/assessment-CDN/assets/60701681/78d3e250-37fd-4ea9-ba10-9ce2ba337ebb)

</details>

<details>
<summary>5. Create Database with EF Core Migrations Feature</summary>

To create the initial database schema based on the model in *PeopleContext* class,

- Run the *add-migration Initial* command
- The database is created, in the *{timestamp}_Initial.cs* file, under the *Migrations* folder

![image](https://github.com/BaoYiLeeby/assessment-CDN/assets/60701681/621f91d3-3778-434e-8094-d091aaa60c76)

To check the created database in SQL Server Object Explorer,

![VS-SUCCESS-Creating Database with Migrations_cropped](https://github.com/BaoYiLeeby/assessment-CDN/assets/60701681/517916ab-577d-4189-b495-a96e724f090d)

</details>

<details>
<summary>6. Create API Controller and RESTful API Methods</summary>

Based on the CRUD operations, 
- ## GET ()
  - Returns all users' contacts and users' contacts having the *Id* as input
![image](https://github.com/BaoYiLeeby/assessment-CDN/assets/60701681/52aee0c5-ea1a-4022-8671-8195adc01a37)

  - *[HttpGet]*: method responds to an HTTP GET request
  - To test the app, call the 2 endpoints from the browser:
    - https://localhost:{port}/api/people
    
    Successful response code: 200 (No unhandled exceptions)
    ![VS-SUCCESS-GET people_cropped](https://github.com/BaoYiLeeby/assessment-CDN/assets/60701681/c4dfae45-18b3-4269-b15d-9e889d04655b)
    
    - In the browser,
    ![VS-SUCCESS-GET people-after click into curl_cropped](https://github.com/BaoYiLeeby/assessment-CDN/assets/60701681/e35f5818-7230-468a-97d6-0d9226d855ba)

    - https://localhost:{port}/api/people/{id}

- ## POST
  - Creates a user's contact record in the database
![image](https://github.com/BaoYiLeeby/assessment-CDN/assets/60701681/4a7a1b10-317b-47d4-9e88-a3ff9d7f5b1f)

  - *[HttpPost]*: method responds to an HTTP POST request
  - To test the app,

    Successful response code: 201 (Created)
    ![VS-SUCCESS-POST people](https://github.com/BaoYiLeeby/assessment-CDN/assets/60701681/fc331326-c949-4c2d-b1a8-8fdc78fc9b26)

- ## PUT
  - Updates the user's contact record with the given *Id* in the database
![image](https://github.com/BaoYiLeeby/assessment-CDN/assets/60701681/d8727544-48cf-4ae1-9ea6-4c8c816984c8)

  - *[HttpPut]*: method responds to an HTTP POST request
  - To test the app, provide the *Id* in both request URL and body for matching
  - Note: The whole updated entity is required, instead only the changes
  
  Successful response code: 204 (No Content)
  ![image](https://github.com/BaoYiLeeby/assessment-CDN/assets/60701681/5a21b336-ed25-4816-bcd9-9b163fe96cde)

  - In the SQL Server Object Explorer database,
  ![image](https://github.com/BaoYiLeeby/assessment-CDN/assets/60701681/aa180e90-00fb-49b7-bc67-0679aaad9852)

- ## DELETE
  - Deletes the user's contact record with the given *Id* in the database
  
  - *[HttpDelete]*: method responds to an HTTP POST request
  - To test the app, 
  - Note: *Id* in the URL is required to identify the want-to-delete record.
  
  Successful response code: 204 (No Content)
  ![image](https://github.com/BaoYiLeeby/assessment-CDN/assets/60701681/513631ae-70d6-45f4-b634-adb16c83b065)

  - In the browser,
  ![image](https://github.com/BaoYiLeeby/assessment-CDN/assets/60701681/ad983e2b-fa86-4967-886c-7be2c83b0d3a)

  - In the SQL Server Object Explorer database,
  ![image](https://github.com/BaoYiLeeby/assessment-CDN/assets/60701681/4f2f22f1-1365-4cb2-a343-19357cf5aa85)

</details>

## Create Frontend using react.js
