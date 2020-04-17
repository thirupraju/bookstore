import { Component } from '@angular/core';
import { Book } from './common/book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
books: Book[] = [
  {
    sku: 'text-100',
    name: 'test book',
    description: 'book descr',
    unitPrice: 600,
    imageUrl: 'xxx',
    active: true,
    unitsInStock: 100,
    createdOn: new Date(),
    updatedOn: null,
  },
  {
    sku: '2text-100',
    name: '2test book',
    description: '2book descr',
    unitPrice: 300,
    imageUrl: 'xxx2',
    active: true,
    unitsInStock: 200,
    createdOn: new Date(),
    updatedOn: null,
  }
];
}
