import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  api: HttpClient;
  studentList: any;
  courseList: any;
  teacherList: any;

  constructor(private http: HttpClient){
    this.api = http;
  }

  getStudents() {
    this.api.get('http://localhost:51803/api/student').toPromise().then((data:any) =>{
      console.log(data.payload);
      this.studentList = data.payload;
    })
  }

  createStudent(name, lastname, email, username, password){
     this.api.post('http://localhost:51803/api/student', {name, lastname, email, username, password}).toPromise().then((data:any) =>{
       console.log(data.payload);
       this.studentList.push(data.payload);
     })
  }

  getTeachers(){
    this.api.get('http://localhost:51803/api/teacher').toPromise().then((data:any) =>{
      console.log(data.payload);
      this.teacherList = data.payload;
    })
  }

  createTeacher(name, lastName){
    this.api.post('http://localhost:51803/api/teacher', { name, lastName }).toPromise().then((data:any) =>{
      console.log(data.payload);
      this.teacherList.push(data.payload);
    })
  }

  getCourses() {
    this.api.get('http://localhost:51803/api/course').toPromise().then((data:any) =>{
      console.log(data.payload);
      this.courseList = data.payload;
    })
  }

  createCourse(course){
    this.api.post('http://localhost:51803/api/course', {name: course}).toPromise().then((data:any) =>{
      console.log(data.payload);
      this.courseList.push(data.payload);
    })
  }

  ngOnInit(): void {
    this.getStudents();
    this.getCourses();
    this.getTeachers();
  }


}
