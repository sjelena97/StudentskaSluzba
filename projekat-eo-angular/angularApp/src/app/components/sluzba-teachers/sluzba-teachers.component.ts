import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

import { SluzbaTeachersServiceService } from './sluzba-teachers-service.service';
import { AuthenticationServiceService } from 'src/app/services/auth/authentication-service.service';
import { User } from 'src/app/model/user';

interface Teacher {
  id?: number;
  user: User;
}

@Component({
  selector: 'app-sluzba-teachers',
  templateUrl: './sluzba-teachers.component.html',
  styleUrls: ['./sluzba-teachers.component.css']
})
export class SluzbaTeachersComponent implements OnInit {

  teachers: Teacher[];

  search = '';
  sort = '';

  page = 0;
  count = 0;
  size = 1;
  pageSizes = [1, 3, 5, 10, 15, 25];

  subscription: Subscription;

  constructor(private teacherService: SluzbaTeachersServiceService, private router: Router, private authService: AuthenticationServiceService) {
    this.subscription = teacherService.RegenerateData$.subscribe(() =>
      this.getTeachers()
    );
  }

  ngOnInit(): void {
    this.getTeachers();
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

  getTeachers(): void {
    const params = this.getRequestParams(this.search, this.page, this.size,this.sort);

    this.teacherService.getTeachers(params)
    .subscribe(
      response => {
        const { teachers, totalItems, currentPage} = response;
        this.teachers = teachers;
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
    this.getTeachers();
  }

  handlePageSizeChange(event: any): void {
    this.size = event.target.value;
    this.page = 1;
    this.getTeachers();
  }

  // getTeachers() {
  //   this.teacherService.getTeachers().subscribe(res =>
  //     this.teachers = res.body);
  // }

  isLoggedIn():boolean{
    return this.authService.isLoggedIn();
  }

  isAdmin():boolean{
    return this.authService.isAdmin();
  }

  gotoAdd(): void {
    this.router.navigate(['/addTeacher']);
  }

  gotoEdit(teacher: Teacher): void {
    this.router.navigate(['/editTeacher', teacher.id]);
  }

  deleteTeacher(teacherId: number, teacherFirstName: string, teacherLastName: string): void {
    if(confirm("Are you sure to delete teacher " + teacherFirstName + " " + teacherLastName + "?")){
    this.teacherService.deleteTeacher(teacherId).subscribe(
      () => this.getTeachers()
    );
    }
  }

}
