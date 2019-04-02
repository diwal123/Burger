### Schema

CREATE DATABASE cat_db;
create database burger_db;
use burger_db;

create table burgers(
id int not null,
primary key(id),
burger varchar(100) not null,
devoured boolean default false
);