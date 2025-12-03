import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {
  showSidebar = false;
  hideClass = false;
  hideStudent = true;
  hideTeacher = true;
  hideAnnouncement = true;

  cards = [
    { label: 'Classes', view: 'classes', icon:'people' },
    { label: 'Students', view: 'students' ,icon:'person'},
    { label: 'Teachers', view: 'teachers', icon:'person-rolodex' },
    { label: 'Announcements', view: 'announcements', icon:'bell' },
  ];

   classes = [
    { name: 'Grade 1', teacher: 'Mr. Jammeh' },
    { name: 'Grade 2', teacher: 'Ms. Ceesay' },
    { name: 'Grade 3', teacher: 'Mrs. Jobe' },
    { name: 'Grade 4', teacher: 'Ms. Sowe' },
    { name: 'Grade 5', teacher: 'Mr. Touray' },
    { name: 'Grade 1', teacher: 'Mr. Jammeh' },
    { name: 'Grade 2', teacher: 'Ms. Ceesay' },
    { name: 'Grade 3', teacher: 'Mrs. Jobe' },
    { name: 'Grade 4', teacher: 'Ms. Sowe' },
    { name: 'Grade 5', teacher: 'Mr. Touray' }
  ];


  students = [
    { name: 'Awa', age: 12 },
    { name: 'Lamin', age: 11 },
    { name: 'Ebrima', age: 13 }
  ];

  teachers = [
    { name: 'Mr. Jammeh', subject: 'Math' },
    { name: 'Ms. Ceesay', subject: 'English'},
    { name:'Mr. Jaiteh',  subject:'Science' }
  ];

  announcements = [
    { title: 'Holiday Notice', content: 'School closes on Friday.' },
    { title: 'PTA Meeting', content: 'Scheduled for Monday 10 AM.' }
  ];



  toggleSidebar() {
    this.showSidebar = !this.showSidebar;
  }
  //  Dashboard
  showDashboard() {
    this.hideStudent = false;
    this.hideTeacher = false;
    this.hideAnnouncement = false;
    this.hideStudent = false;
  }
  // show student method
  showStudent() {
       this.hideStudent = false;
       this.hideClass = true;
       this.hideTeacher = true;
       this.hideAnnouncement = true;

  }
//   show classes method
  showClass() {
      this.hideClass = false;
      this.hideStudent = true;
      this.hideTeacher = true;
      this.hideAnnouncement = true;
  }
//   show teacher method
  showTeacher() {
      this.hideTeacher = false;
      this.hideStudent = true;
      this.hideClass = true;
      this.hideAnnouncement = true;

  }

//   show announcement method
  showAnnouncement() {
      this.hideAnnouncement = false;
      this.hideClass = true;
      this.hideStudent = true;
      this.hideTeacher = true;

  }
}
