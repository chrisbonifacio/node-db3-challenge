# Database Queries

### Display the ProductName and CategoryName for all products in the database. Shows 76 records.

SELECT ProductName, CategoryName
from Products as p
left join Categories as c on ProductID = c.CategoryID

### Display the OrderID and ShipperName for all orders placed before January 9, 1997. Shows 161 records.

SELECT OrderID, ShipperName
from Orders as p
join Shippers as s on p.ShipperID = s.ShipperID
where OrderDate BETWEEN '1996-07-04' AND '1997-01-09'

### Display all ProductNames and Quantities placed on order 10251. Sort by ProductName. Shows 3 records.

SELECT OrderID, ProductName, Quantity
from OrderDetails as o
join Products as p on o.ProductID = p.ProductID
where OrderID = '10251'
ORDER BY ProductName

### Display the OrderID, CustomerName and the employee's LastName for every order. All columns should be labeled clearly. Displays 196 records.

SELECT OrderID, CustomerName, LastName
from Orders as o
join Customers as c on o.CustomerID = c.CustomerID
join Employees as e on o.EmployeeID = e.EmployeeID

### (Stretch) Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 9 records.

SELECT CategoryName, COUNT(ProductID) as Count
from Categories as c
left join Products as p on c.categoryID = p.categoryID
GROUP BY CategoryName

### (Stretch) Display OrderID and a column called ItemCount that shows the total number of products placed on the order. Shows 196 records.

SELECT OrderID, SUM(o.Quantity) as ItemCount
from OrderDetails as o
join Products as p on p.productID = o.productID
GROUP BY OrderID
