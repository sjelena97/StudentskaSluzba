import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

import { SluzbaStudentsServiceService } from './sluzba-students-service.service';
import { AuthenticationServiceService } from 'src/app/services/auth/authentication-service.service';
import { User } from 'src/app/model/user';

interface Student {
  id?: number;
  cardName: string;
  user: User;
}

@Component({
  selector: 'app-sluzba-students',
  templateUrl: './sluzba-students.component.html',
  styleUrls: ['./sluzba-students.component.css']
})
export class SluzbaStudentsComponent implements OnInit {

  students: Student[];

  subscription: Subscription;

  constructor(private studentService: SluzbaStudentsServiceService, private router: Router, private authService: AuthenticationServiceService) {
    this.subscription = studentService.RegenerateData$.subscribe(() =>
      this.getStudents()
    );
  }

  ngOnInit(): void {
    this.getStudents();
  }

  getStudents() {
    this.studentService.getStudents().subscribe(res =>
      this.students = res.body);
  }

  
  gotoAdd(): void {
    this.router.navigate(['/addStudent']);
  }

  gotoEdit(student: Student): void {
    this.router.navigate(['/editStudent', student.id]);
  }

  deleteStudent(studentId: number, studentFirstName: string, studentLastName: string): void {
    if(confirm("Are you sure to delete student " + studentFirstName + " " + studentLastName + "?")){
    this.studentService.deleteStudent(studentId).subscribe(
      () => this.getStudents()
    );
    }
  }

  isLoggedIn():boolean{
    return this.authService.isLoggedIn();
  }

  isAdmin():boolean{
    return this.authService.isAdmin();
  }

}
