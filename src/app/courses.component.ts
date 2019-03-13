import { Component } from '@angular/core';

@Component({
    selector: 'courses',
    templateUrl: 'app/courses.component.html',
})

export class CoursesComponent {
    courses: Course[] = [
        {number: "CS 189", name: "Introduction to Machine Learning", year: "Spring 2018"},
        {number: "Data 100", name: "Principles and Techniques of Data Science", year: "Spring 2018"},
        {number: "Physics 7B", name: "Heat, electricity, and magnetism", year: "Spring 2018"},
        {number: "CS 162", name: "Operating Systems and System Programming", year: "Fall 2017"},
        {number: "CS 161", name: "Computer Security", year: "Fall 2017"},
        {number: "CS 188", name: "Introduction to Artificial Intelligence", year: "Fall 2017"},
        {number: "CS 170", name: "Efficient Algorithms and Intractable Problems", year: "Spring 2017"},
        {number: "CS 61C", name: "Great Ideas in Computer Architecture (Machine Structures)", year: "Spring 2017"},
        {number: "CS 70", name: "Discrete Mathematics and Probability Theory", year: "Fall 2016"},
        {number: "CS 186", name: "Introduction to Databases", year: "Fall 2016"},
        {number: "Math 110", name: "Linear Algebra", year: "Fall 2016"},
        {number: "CS 61B", name: "Data Structures", year: "Spring 2016"},
        {number: "EE 16B", name: "Designing Information Devices and Systems II", year: "Spring 2016"},
        {number: "Math 53", name: "Multivariable Calculus", year: "Spring 2016"},
        {number: "CS 61A", name: "The Structure and Interpretation of Computer Programs", year: "Fall 2015"},
        {number: "EE 16A", name: "Designing Information Devices and Systems I", year: "Fall 2015"},
        {number: "Physics 7A", name: "Mechanics and wave motion", year: "Fall 2015"},
    ]
}

export class Course {
    number: string;
    name: string;
    year: string;
}