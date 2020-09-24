--CREATE DATABASE `flystone`;

CREATE TABLE `t_user`
(
  `user_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar
(30) NOT NULL,
  `sex` tinyint
(1) DEFAULT NULL,
  `branch` varchar
(20) DEFAULT NULL,
  `age` int DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `created_id` varchar
(20) DEFAULT NULL,
  `updated_date` datetime DEFAULT NULL,
  `updated_id` varchar
(20) DEFAULT NULL,
  PRIMARY KEY
(`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=cp932;

insert into flystone.t_user
values
  (1, '佐藤　太一', '0', 'Tokyo', 29, '2020/03/01', '1', '2020/03/01', '2');
insert into flystone.t_user
values
  (2, '山田　一郎', '1', 'Yokohama', 31, '2020/03/01', '1', '2020/03/01', '2');
insert into flystone.t_user
values
  (3, '杉浦　大学', '0', 'Chiba', 34, '2020/03/01', '1', '2020/03/01', '2');
insert into flystone.t_user
values
  (4, '山内', '1', 'Osaka', 25, '2020/03/01', '1', '2020/03/01', '2');
insert into flystone.t_user
values
  (5, '海浪　五郎', '1', '中国', 38, '2020/03/28 18:44:16', '123456', '2020/03/28 18:44:16', '123456');
insert into flystone.t_user
values
  (6, '鈴木　絵里奈', '0', 'Tokyo', 24, '2020/03/01', '1', '2020/03/01', '2');
insert into flystone.t_user
values
  (7, 'hailang', '1', 'tokyo', 60, '2020/03/28 18:44:30', '123456', '2020/03/28 18:44:30', '123456');
insert into flystone.t_user
values
  (8, 'テスト泰朗', '1', 'シンガポール', 20, '2020/03/29 15:03:01', '123456', '2020/03/29 15:03:01', '123456');

CREATE TABLE `employees`
(
  `id` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar
(20) DEFAULT NULL,
  `last_name` varchar
(25) NOT NULL,
  `email_id` varchar
(25) NOT NULL,
  PRIMARY KEY
(`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=cp932

insert into flystone.employees
values
  (1, '韓', '暁明', 'hailang@hotmail.co.jp');
insert into flystone.employees
values
  (2, '山田', '一郎', 'yamada@yahoo.co.jp');