import { Component } from '@angular/core';

@Component({
    selector: 'courses',
    templateUrl: 'app/courses.component.html',
})

export class CoursesComponent {
    courses: Course[] = [
        {number: "CS 61A", name: "The Structure and Interpretation of Computer Programs", year: "Fall 2015"},
        {number: "EE 16A", name: "Designing Information Devices and Systems I", year: "Fall 2015"},
        {number: "Physics 7A", name: "Physics for Scientists and Engineers", year: "Fall 2015"},
        {number: "CS 61B", name: "Data Structures", year: "Spring 2016"},
        {number: "EE 16B", name: "Designing Information Devices and Systems II", year: "Spring 2016"},
        {number: "Math 53", name: "Multivariable Calculus", year: "Spring 2016"},
        {number: "CS 70", name: "Discrete Mathematics and Probability Theory", year: "Fall 2016"},
        {number: "CS 186", name: "Introduction to Databases", year: "Fall 2016"},
        {number: "Math 110", name: "Linear Algebra", year: "Fall 2016"},
    ]
}

export class Course {
    number: string;
    name: string;
    year: string;
}