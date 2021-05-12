INSERT INTO USER (user_id, username, password, firstname, lastname) VALUES (1, 'sjelena', '$2a$04$Vbug2lwwJGrvUXTj6z7ff.97IzVBkrJ1XfApfGNl.Z695zqcnPYra', 'Jelena', 'Stokanovic');
INSERT INTO USER (user_id, username, password, firstname, lastname) VALUES (2, 'petra', '$2a$04$Vbug2lwwJGrvUXTj6z7ff.97IzVBkrJ1XfApfGNl.Z695zqcnPYra', 'Petra', 'Petrovic');

INSERT INTO AUTHORITY (authority_id, name) VALUES (1, 'STUDENT');
INSERT INTO AUTHORITY (authority_id, name) VALUES (2, 'TEACHER');
INSERT INTO AUTHORITY (authority_id, name) VALUES (3, 'ADMIN');

INSERT INTO USER_AUTHORITY (id, authority_id, user_id) VALUES (1, 1, 1);
INSERT INTO USER_AUTHORITY (id, authority_id, user_id) VALUES (2, 1, 2);
INSERT INTO USER_AUTHORITY (id, authority_id, user_id) VALUES (3, 3, 2);

INSERT INTO ACCOUNT (account_id, balance) VALUES (1, 0);
INSERT INTO ACCOUNT (account_id, balance) VALUES (2, 0);

INSERT INTO STUDENT (student_id, card_name, account_id, user_id) VALUES (1, 'SF36/2018', 1, 1);
INSERT INTO STUDENT (student_id, card_name, account_id, user_id) VALUES (2, 'SF15/2018', 2, 2);

INSERT INTO COURSE (course_id, espb, code, name) VALUES (1, 6, 'EO', 'eObrazovanje');
INSERT INTO COURSE (course_id, espb, code, name) VALUES (2, 6, 'EU', 'eUprava');
INSERT INTO COURSE (course_id, espb, code, name) VALUES (3, 8, 'M1', 'Matematika 1');

INSERT INTO ENROLLMENT (enrollment_id, student_id, course_id, start_date, end_date) VALUES (1, 1, 1, '2020-10-01', '2021-06-01');
INSERT INTO ENROLLMENT (enrollment_id, student_id, course_id, start_date, end_date) VALUES (2, 1, 2, '2020-10-01', '2021-06-01');
INSERT INTO ENROLLMENT (enrollment_id, student_id, course_id, start_date, end_date) VALUES (4, 2, 1, '2020-10-01', '2021-06-01');
INSERT INTO ENROLLMENT (enrollment_id, student_id, course_id, start_date, end_date) VALUES (5, 2, 2, '2020-10-01', '2021-06-01');
INSERT INTO ENROLLMENT (enrollment_id, student_id, course_id, start_date, end_date) VALUES (6, 2, 3, '2020-10-01', '2021-06-01');

