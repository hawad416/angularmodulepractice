import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css'],
})
export class ViewsHomeComponent implements OnInit {
  stats = [
    { value: 22, label: ' # of Users' },
    { value: 900, label: 'revenue' },
    { value: 50, label: 'likes' },
  ];
  items = [
    {
      image:
        'https://media.istockphoto.com/photos/modern-living-room-with-orange-couch-picture-id637876746?b=1&k=20&m=637876746&s=170667a&w=0&h=EJax_avgktyLW9mEDgAcot5fULDJcOaD5mF3lsBLviE=',
      title: 'Couch',
      description: 'awesome couch',
    },
    {
      image:
        'https://media.istockphoto.com/photos/chest-of-drawers-with-books-in-empty-bedroom-picture-id115578680?b=1&k=20&m=115578680&s=170667a&w=0&h=MW7M7FMbwojHNPUYWEfJsaJyWdY7DYMCqJ3km0HgwHY=',
      title: 'Dresser',
      description: 'fluffy',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
