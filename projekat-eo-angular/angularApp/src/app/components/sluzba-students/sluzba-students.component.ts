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

  search = '';
  sort = '';

  page = 0;
  count = 0;
  size = 3;
  pageSizes = [3, 6, 9];

  subscription: Subscription;

  constructor(private studentService: SluzbaStudentsServiceService, private router: Router, private authService: AuthenticationServiceService) {
    this.subscription = studentService.RegenerateData$.subscribe(() =>
      this.getStudents()
    );
  }

  ngOnInit(): void {
    this.getStudents();
  }

  getRequestParams(search: string, page: number, pageSize: number, sort: string): any {
    // tslint:disable-next-line:prefer-const
    let params: any = {};

    if (search) {
      params[`search`] = search;
    }

    if (page) {
      params[`page`] = page - 1;
    }

    if (pageSize) {
      params[`size`] = pageSize;
    }

    if (sort) {
      params[`sort`] = sort;
    }

    return params;
  }

  getStudents(): void {
    const params = this.getRequestParams(this.search, this.page, this.size,this.sort);

    this.studentService.getStudents(params)
    .subscribe(
      response => {
        const { students, totalItems, currentPage} = response;
        this.students = students;
        this.count = totalItems;
        this.page = currentPage +1;
        console.log(response);
      },
      error => {
        console.log(error);
      });
  }

  handlePageChange(event: number): void {
    this.page = event;
    this.getStudents();
  }

  handlePageSizeChange(event: any): void {
    this.size = event.target.value;
    this.page = 1;
    this.getStudents();
  }

  // getStudents() {
  //   this.studentService.getStudents().subscribe(res =>
  //     this.students = res.body);
  // }

  
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
