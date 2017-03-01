SET NAMES 'utf8';
DROP DATABASE IF EXISTS rent_project;
CREATE DATABASE rent_project CHARSET=UTF8;
USE rent_project;

CREATE TABLE rent_user(
    uid INT PRIMARY KEY AUTO_INCREMENT,
    uname VARCHAR(32),
    upwd VARCHAR(16),
    uphone VARCHAR(32),
    uemail VARCHAR(64),
    ucity VARCHAR(128)
);

INSERT INTO rent_user VALUES
(null,'麦耀强','123456','15602220814','654892367@qq.com','中山市'),
(null,'陈宝莹','123456','13169861130','654892367@qq.com','中山市');
