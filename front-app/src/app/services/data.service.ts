import { Injectable } from '@angular/core';
import { BoardMember } from '../interfaces/board-member';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  boardMembers: Map <string, BoardMember[]> = new Map<string, BoardMember[]>();
  constructor() {
    this.boardMembers.set('2020', [
      { fileName: 'erunika.jpg', post: 'Senior Treasurer', name: 'Dr. Erunika Dayarathne' },
      { fileName: 'buddhima.jpg', post: 'President', name: 'Buddhima Amarathunga' },
      { fileName: 'kiwihari.jpg', post: 'Secretary', name: 'Ishara Kiwihari' },
      { fileName: 'shaveen.jpg', post: 'Vice President', name: 'Shaveen Britto' },
      { fileName: 'nilupul.jpg', post: 'Assistant Secretary', name: 'Nilupul Kodikara' }
    ]);

    this.boardMembers.set('2019', [{ fileName: 'niluka.jpg', post: 'Web Master', name: 'Niluka Dilhan' },
    { fileName: 'vishmi.jpg', post: 'User Group Admin (AI)', name: 'Vishmi Vithanachchi' },
    { fileName: 'charith.jpg', post: 'User Group Admin (Mobile Development)', name: 'Charith Abeygunawardhena' },
    { fileName: 'malith.jpg', post: 'Junior Treasurer', name: 'Malith Kalhara' },
    { fileName: 'viraj.jpg', post: 'User Group Admin (Programming)', name: 'Viraj Edirisinghe' },
    { fileName: 'parakrama.jpg', post: 'User Group Admin (Database and Networking)', name: 'Parakrama Dissanayake' }
    ]);

    this.boardMembers.set('2018', [
      { fileName: 'kavinda.jpg', post: 'User Group Admin (Media)', name: 'Kavinda Nimalaka' },
      { fileName: 'hasitha.jpg', post: 'Graphic Designer', name: 'Hasitha Ranaweera' },
      { fileName: 'kusal.jpg', post: 'Batch Coordinator', name: 'Kusal Sirimanna' },
      { fileName: 'rupika.jpg', post: 'Batch Coordinator', name: 'Rupika Ekanayake' },
      { fileName: 'hara.jpg', post: 'Editor', name: 'Pramuka Weerasinghe' },
    ]);

    this.boardMembers.set('2017', [
    { fileName: 'kavinda.jpg', post: 'User Group Admin (Media)', name: 'Kavinda Nimalaka' },
    { fileName: 'hasitha.jpg', post: 'Graphic Designer', name: 'Hasitha Ranaweera' },
    { fileName: 'kusal.jpg', post: 'Batch Coordinator', name: 'Kusal Sirimanna' },
    { fileName: 'rupika.jpg', post: 'Batch Coordinator', name: 'Rupika Ekanayake' },
    { fileName: 'hara.jpg', post: 'Editor', name: 'Pramuka Weerasinghe' },
  ]);
}

  getBoard(year: string) {
    return this.boardMembers.get(year);
  }

  getAllYears(): string[] {
    return Array.from(this.boardMembers.keys()).slice(2);
  }

}
