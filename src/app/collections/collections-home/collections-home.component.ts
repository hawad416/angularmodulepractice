import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css'],
})
export class CollectionsHomeComponent implements OnInit {
  data = [
    { name: 'James', age: 24, job: 'designer', employed: 'true' },
    { name: 'jill', age: 25, job: 'engineer', employed: 'false' },
    { name: 'hawa', age: 20, job: 'engineer', employed: 'true' },
    { name: 'adam', age: '19', job: 'reader', employed: 'false' },
  ];

  headers = [
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
    { key: 'job', label: 'Job' },
    { key: 'employed', label: 'Has a job?' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
