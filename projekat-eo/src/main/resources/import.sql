INSERT INTO USER (user_id, username, password, firstname, lastname) VALUES (1, 'sjelena', '$2a$04$Vbug2lwwJGrvUXTj6z7ff.97IzVBkrJ1XfApfGNl.Z695zqcnPYra', 'Jelena', 'Stokanovic');
INSERT INTO USER (user_id, username, password, firstname, lastname) VALUES (2, 'petra', '$2a$04$Vbug2lwwJGrvUXTj6z7ff.97IzVBkrJ1XfApfGNl.Z695zqcnPYra', 'Petra', 'Petrovic');

INSERT INTO AUTHORITY (authority_id, name) VALUES (1, 'STUDENT');
INSERT INTO AUTHORITY (authority_id, name) VALUES (2, 'TEACHER');
INSERT INTO AUTHORITY (authority_id, name) VALUES (3, 'ADMIN');

INSERT INTO USER_AUTHORITY (id, authority_id, user_id) VALUES (1, 1, 1);
INSERT INTO USER_AUTHORITY (id, authority_id, user_id) VALUES (2, 2, 2);
INSERT INTO USER_AUTHORITY (id, authority_id, user_id) VALUES (3, 3, 2);

INSERT INTO COURSE (course_id, espb, code, name) VALUES (1, 6, 'EO', 'eObrazovanje');
INSERT INTO COURSE (course_id, espb, code, name) VALUES (2, 6, 'EU', 'eUprava');
INSERT INTO COURSE (course_id, espb, code, name) VALUES (3, 8, 'M1', 'Matematika 1');

