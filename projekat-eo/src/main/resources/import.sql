INSERT INTO AUTHORITY (authority_id, name) VALUES (1, 'STUDENT');
INSERT INTO AUTHORITY (authority_id, name) VALUES (2, 'TEACHER');
INSERT INTO AUTHORITY (authority_id, name) VALUES (3, 'ADMIN');

INSERT INTO USER (user_id, username, password, firstname, lastname, email, authority_id) VALUES (1, 'sjelena', '$2a$04$Vbug2lwwJGrvUXTj6z7ff.97IzVBkrJ1XfApfGNl.Z695zqcnPYra', 'Jelena', 'Stokanovic', 'lelaug97@hotmail.com', 1);
INSERT INTO USER (user_id, username, password, firstname, lastname, email, authority_id) VALUES (2, 'petra', '$2a$04$Vbug2lwwJGrvUXTj6z7ff.97IzVBkrJ1XfApfGNl.Z695zqcnPYra', 'Petra', 'Petrovic', 'petrap@gmail.com', 3);
INSERT INTO USER (user_id, username, password, firstname, lastname, email, authority_id) VALUES (3, 'danijel', '$2a$04$Vbug2lwwJGrvUXTj6z7ff.97IzVBkrJ1XfApfGNl.Z695zqcnPYra', 'Danijel', 'Vukovic', 'danijel_vuk@hotmail.com', 1);
INSERT INTO USER (user_id, username, password, firstname, lastname, email, authority_id) VALUES (4, 'sinisa', '$2a$04$Vbug2lwwJGrvUXTj6z7ff.97IzVBkrJ1XfApfGNl.Z695zqcnPYra', 'Sinisa', 'Nikolic', 'sima@hotmail.com', 2);
INSERT INTO USER (user_id, username, password, firstname, lastname, email, authority_id) VALUES (5, 'paroski', '$2a$04$Vbug2lwwJGrvUXTj6z7ff.97IzVBkrJ1XfApfGNl.Z695zqcnPYra', 'Milan', 'Paroski', 'milan.paroski@uns.ac.rs', 2);

INSERT INTO ACCOUNT (account_id, bank_account, model, personal_call_to_number) VALUES (1, '840-1710666-12', '97', '56-99011-1-4532-1836');
INSERT INTO ACCOUNT (account_id, bank_account, model, personal_call_to_number) VALUES (2, '840-1710666-12', '97', '93-99011-1-4532-1856');

INSERT INTO STUDENT (student_id, card_name, account_id, user_id, active) VALUES (1, 'SF36/2018', 1, 1, 1);
INSERT INTO STUDENT (student_id, card_name, account_id, user_id, active) VALUES (2, 'SF56/2018', 2, 3, 1);

INSERT INTO TEACHER (teacher_id, user_id, active) VALUES (1, 4, 1);
INSERT INTO TEACHER (teacher_id, user_id, active) VALUES (2, 5, 1);

INSERT INTO COURSE (course_id, espb, code, name, active) VALUES (1, 6, 'EO', 'eObrazovanje', 1);
INSERT INTO COURSE (course_id, espb, code, name, active) VALUES (2, 6, 'EU', 'eUprava', 1);
INSERT INTO COURSE (course_id, espb, code, name, active) VALUES (3, 8, 'M1', 'Matematika 1', 1);
INSERT INTO COURSE (course_id, espb, code, name, active) VALUES (4, 4, 'P', 'Projekat', 1);

INSERT INTO ENROLLMENT (enrollment_id, student_id, course_id, start_date, end_date, active) VALUES (1, 1, 1, '2021-03-01', '2021-10-01', 1);
INSERT INTO ENROLLMENT (enrollment_id, student_id, course_id, start_date, end_date, active) VALUES (2, 1, 2, '2021-03-01', '2021-10-01', 1);
INSERT INTO ENROLLMENT (enrollment_id, student_id, course_id, start_date, end_date, active) VALUES (3, 2, 1, '2021-03-01', '2021-10-01', 1);
INSERT INTO ENROLLMENT (enrollment_id, student_id, course_id, start_date, end_date, active) VALUES (4, 2, 2, '2021-03-01', '2021-10-01', 1);
INSERT INTO ENROLLMENT (enrollment_id, student_id, course_id, start_date, end_date, active) VALUES (5, 1, 4, '2021-03-01', '2021-10-01', 1);

INSERT INTO TEACHING_TYPE (teaching_type_id, code, name) VALUES (1, 'L', 'LECTURER');
INSERT INTO TEACHING_TYPE (teaching_type_id, code, name) VALUES (2, 'TA', 'TEACHING ASSISTANT');
INSERT INTO TEACHING_TYPE (teaching_type_id, code, name) VALUES (3, 'LA', 'LABORATORY ASSISTANT');
INSERT INTO TEACHING_TYPE (teaching_type_id, code, name) VALUES (4, 'D', 'DEMONSTRATOR');

INSERT INTO TEACHING (teaching_id, teacher_id, course_id, type_id, start_date, end_date, active) VALUES (1, 1, 4, 1, '2020-03-01', '2021-10-01', 1);
INSERT INTO TEACHING (teaching_id, teacher_id, course_id, type_id, start_date, end_date, active) VALUES (2, 2, 2, 1, '2020-03-01', '2021-10-01', 1);

INSERT INTO PAYMENT (payment_id, amount, date, purpose, account_id) VALUES (1, 2500, '2020-12-15', 'uplata: overa semestra', 1);
INSERT INTO PAYMENT (payment_id, amount, date, purpose, account_id) VALUES (2, -2000, '2020-12-20', 'overa semestra', 1);
INSERT INTO PAYMENT (payment_id, amount, date, purpose, account_id) VALUES (3, 1000, '2020-05-15', 'uplata: overa semestra', 2);

INSERT INTO DOCUMENT_TYPE (document_type_id, code, name) VALUES (1, 'F', 'FORM');
INSERT INTO DOCUMENT_TYPE (document_type_id, code, name) VALUES (2, 'D', 'DIPLOMA');

INSERT INTO DOCUMENT (document_id, title, url, student_id, type_id, active) VALUES (1, 'Diploma', 'C:/Users/Jelena', 1, 2, 1);
INSERT INTO DOCUMENT (document_id, title, url, student_id, type_id, active) VALUES (2, 'Diploma', 'C:/Users/Jelena', 2, 2, 1);

INSERT INTO EXAM_PERIOD(exam_period_id, name, start_date, end_date, active) VALUES (1, 'julski', '2020-07-01', '2021-07-20', 0);
INSERT INTO EXAM_PERIOD(exam_period_id, name, start_date, end_date, active) VALUES (2, 'junski', '2021-06-14', '2021-06-25', 0);
INSERT INTO EXAM_PERIOD(exam_period_id, name, start_date, end_date, active) VALUES (3, 'julski', '2021-07-01', '2021-07-20', 1);

INSERT INTO EXAM_PART_TYPE (exam_part_type_id, code, name) VALUES (1, 'KLKV', 'KOLOKVIJUM');
INSERT INTO EXAM_PART_TYPE (exam_part_type_id, code, name) VALUES (2, 'TE', 'TEST');
INSERT INTO EXAM_PART_TYPE (exam_part_type_id, code, name) VALUES (3, 'PR', 'PROJEKAT');
INSERT INTO EXAM_PART_TYPE (exam_part_type_id, code, name) VALUES (4, 'TR', 'TEORIJA');

INSERT INTO EXAM_PART(exam_part_id, points, date, location, type_id, exam_period_id, course_id, active) VALUES (1, 100, '2020-07-10', 'NTP205', 3, 1, 1, 1);
INSERT INTO EXAM_PART(exam_part_id, points, date, location, type_id, exam_period_id, course_id, active) VALUES (2, 30, '2021-06-15', 'NTP211', 2, 2, 2, 1);
INSERT INTO EXAM_PART(exam_part_id, points, date, location, type_id, exam_period_id, course_id, active) VALUES (3, 70, '2021-06-18', '204', 4, 2, 2, 1);
INSERT INTO EXAM_PART(exam_part_id, points, date, location, type_id, exam_period_id, course_id, active) VALUES (4, 30, '2021-07-05', 'NTP103', 2, 3, 2, 1);
INSERT INTO EXAM_PART(exam_part_id, points, date, location, type_id, exam_period_id, course_id, active) VALUES (5, 70, '2021-07-09', '308', 4, 3, 2, 1);
INSERT INTO EXAM_PART(exam_part_id, points, date, location, type_id, exam_period_id, course_id, active) VALUES (6, 100, '2021-07-16', 'NTP305', 3, 3, 1, 1);

INSERT INTO EXAM_PART_STATUS (exam_part_status_id, code, name) VALUES (1, 'RG', 'REGISTRED');
INSERT INTO EXAM_PART_STATUS (exam_part_status_id, code, name) VALUES (2, 'PSD', 'PASSED');
INSERT INTO EXAM_PART_STATUS (exam_part_status_id, code, name) VALUES (3, 'FLD', 'FAILED');
INSERT INTO EXAM_PART_STATUS (exam_part_status_id, code, name) VALUES (4, 'CLD', 'CANCELED');
INSERT INTO EXAM_PART_STATUS (exam_part_status_id, code, name) VALUES (5, 'NA', 'NA');
INSERT INTO EXAM_PART_STATUS (exam_part_status_id, code, name) VALUES (6, 'NS', 'NS');

INSERT INTO EXAM_PART_TAKING(exam_part_taking_id, score, status_id, exam_part_id, enrollment_id) VALUES (1, 0, 4, 3, 4);
INSERT INTO EXAM_PART_TAKING(exam_part_taking_id, score, status_id, exam_part_id, enrollment_id) VALUES (2, 69, 2, 5, 2);
INSERT INTO EXAM_PART_TAKING(exam_part_taking_id, score, status_id, exam_part_id, enrollment_id) VALUES (3, 57, 2, 5, 4);
INSERT INTO EXAM_PART_TAKING(exam_part_taking_id, score, status_id, exam_part_id, enrollment_id) VALUES (4, 0, 1, 6, 1);
INSERT INTO EXAM_PART_TAKING(exam_part_taking_id, score, status_id, exam_part_id, enrollment_id) VALUES (5, 0, 1, 6, 3);
