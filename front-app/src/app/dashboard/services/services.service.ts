import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  faculty: any[] = [];

  constructor() {
    this.faculty.push('Faculty of Science', 'Faculty of Engineering', 'Faculty of Medicine', 'Faculty of Allied Health Science',
    'Faculty of Dental', 'Faculty of Engineering', 'Faculty of Art', 'Faculty of Management', 'Faculty of Veterinary');
   }

   getFaculties() {
    return Array.from(this.faculty.sort().values());
   }
}
