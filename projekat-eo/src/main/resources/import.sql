INSERT INTO AUTHORITY (authority_id, name) VALUES (1, 'STUDENT');
INSERT INTO AUTHORITY (authority_id, name) VALUES (2, 'TEACHER');
INSERT INTO AUTHORITY (authority_id, name) VALUES (3, 'ADMIN');

INSERT INTO USER (user_id, username, password, firstname, lastname, authority_id) VALUES (1, 'sjelena', '$2a$04$Vbug2lwwJGrvUXTj6z7ff.97IzVBkrJ1XfApfGNl.Z695zqcnPYra', 'Jelena', 'Stokanovic', 1);
INSERT INTO USER (user_id, username, password, firstname, lastname, authority_id) VALUES (2, 'petra', '$2a$04$Vbug2lwwJGrvUXTj6z7ff.97IzVBkrJ1XfApfGNl.Z695zqcnPYra', 'Petra', 'Petrovic', 3);

INSERT INTO ACCOUNT (account_id, balance) VALUES (1, 500);

INSERT INTO STUDENT (student_id, card_name, account_id, user_id) VALUES (1, 'SF36/2018', 1, 1);

INSERT INTO TEACHER (teacher_id, user_id) VALUES (1, 2);

INSERT INTO COURSE (course_id, espb, code, name, active) VALUES (1, 6, 'EO', 'eObrazovanje', 1);
INSERT INTO COURSE (course_id, espb, code, name, active) VALUES (2, 6, 'EU', 'eUprava', 1);
INSERT INTO COURSE (course_id, espb, code, name, active) VALUES (3, 8, 'M1', 'Matematika 1', 1);

INSERT INTO ENROLLMENT (enrollment_id, student_id, course_id, start_date, end_date) VALUES (1, 1, 1, '2020-10-01', '2021-06-01');
INSERT INTO ENROLLMENT (enrollment_id, student_id, course_id, start_date, end_date) VALUES (2, 1, 2, '2020-10-01', '2021-06-01');

INSERT INTO TEACHING_TYPE (teaching_type_id, code, name) VALUES (1, 'L', 'LECTURER');
INSERT INTO TEACHING_TYPE (teaching_type_id, code, name) VALUES (2, 'TA', 'TEACHING ASSISTANT');
INSERT INTO TEACHING_TYPE (teaching_type_id, code, name) VALUES (3, 'LA', 'LABORATORY ASSISTANT');
INSERT INTO TEACHING_TYPE (teaching_type_id, code, name) VALUES (4, 'D', 'DEMONSTRATOR');

INSERT INTO TEACHING (teaching_id, teacher_id, course_id, type_id, start_date, end_date) VALUES (1, 1, 3, 1, '2020-10-01', '2021-06-01');

INSERT INTO PAYMENT (payment_id, amount, date, purpose, account_id) VALUES (1, 2500, '2020-12-15', 'uplata: overa semestra', 1);
INSERT INTO PAYMENT (payment_id, amount, date, purpose, account_id) VALUES (2, -2000, '2020-12-20', 'overa semestra', 1);

INSERT INTO DOCUMENT_TYPE (document_type_id, code, name) VALUES (1, 'F', 'FORM');
INSERT INTO DOCUMENT_TYPE (document_type_id, code, name) VALUES (2, 'D', 'DIPLOMA');

INSERT INTO DOCUMENT (document_id, title, url, student_id, type_id) VALUES (1, 'Diploma', 'C:/Users/Jelena', 1, 2);