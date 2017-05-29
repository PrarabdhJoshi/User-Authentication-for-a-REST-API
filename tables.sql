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


insert into places(NAME, PHONE_NUMBER, RATING, LATITUDE, LONGITUDE, PLACE_ID) values ('India Bazaar','(352) 271-7571' ,'4.3' , '-82.37363450000000000000','29.62133030000000000000' ,'ChIJ-62ogVuj6IgRNRBMoMZrmt8' ),
('Crane Ramen', '(352) 727-7422','4.4' ,'-82.32564699999999000000' ,'29.65122900000000000000' , 'ChIJz6KuDHOk6IgRJefR6b9MKt0');

  






