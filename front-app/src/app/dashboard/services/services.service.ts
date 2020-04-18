import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  faculty: any[] = [];
  members: any[] = [];

  constructor() {
    this.faculty.push('Faculty of Science', 'Faculty of Engineering', 'Faculty of Medicine', 'Faculty of Allied Health Science',
      'Faculty of Dental', 'Faculty of Engineering', 'Faculty of Art', 'Faculty of Management', 'Faculty of Veterinary');

    this.members.push('Ishara Kiwihari', 'Buddhima Amarathunga', 'Malith Kalhara', 'nadeeka Bandara', 'Nilupul Thennakoon', 'Anuththara');
  }

  getFaculties() {
    return Array.from(this.faculty.values());
  }

  getMembers() {
    return Array.from(this.members.values());
  }

}
