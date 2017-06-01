DROP DATABASE IF EXISTS postgres;
CREATE DATABASE postgres;

\c postgres;

CREATE TABLE Places 
(Place_ID varchar(30) CONSTRAINT PlacesKey PRIMARY KEY,  
Name varchar(80) NOT NULL, 
Phone_Number varchar(16), 
Rating decimal(2,1), 
Latitude decimal(25,20), 
Longitude decimal(25,20));

CREATE TABLE Photo 
(Place_ID varchar(30),
Photo_ID varchar(400),
CONSTRAINT PhotoKey PRIMARY KEY(Place_ID, Photo_ID));

CREATE TABLE Timings 
(Place_ID varchar(30), 
Day_no integer, 
Opening_Hours integer, 
Closing_Hours integer,
CONSTRAINT TimingsKey PRIMARY KEY(Place_ID, Day_no, Opening_Hours));

Create table Address
(Place_ID varchar(30) PRIMARY KEY,
st_no varchar(20),
Street varchar(30),
City varchar(20),
county varchar(20),
state varchar(20),
Country varchar(20),
zip varchar(20));

CREATE TABLE Reviews
(Email varchar (30),
Place_ID varchar(30),
Title varchar(30),
Content varchar(1400),
Rating decimal(2,1) NOT NULL CHECK ((Rating >= 1) AND (Rating <= 5)),
stamp integer UNIQUE,
CONSTRAINT ReviewsKey PRIMARY KEY(Email, Place_ID));

CREATE TABLE Type 
(Place_ID varchar(30), 
typeName varchar(25), 
CONSTRAINT TypeKey PRIMARY KEY(Place_ID, typeName));

CREATE TABLE USERS
(Email varchar(30) CONSTRAINT UserKey PRIMARY KEY,
 First_Name varchar(30),
 Last_Name varchar(30),
 Password varchar(15),
 Date_of_Birth date,
 Age integer,
 Gender varchar(1) CONSTRAINT UserGender CHECK (Gender in ('M', 'F', 'f', 'm')),
 Phone_num integer);






