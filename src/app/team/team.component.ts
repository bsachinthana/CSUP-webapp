import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  baseUrl = '../../assets/team/';
  board = [
    { fileName: 'erunika.jpg', post: 'Senior Treasurer', name: 'Dr. Erunika Dayarathne' },
    { fileName: 'buddhima.jpg', post: 'President', name: 'Buddhima Amarathunga' },
    { fileName: 'kiwihari.jpg', post: 'Secretary', name: 'Ishara Kiwihari' },
    { fileName: 'shaveen.jpg', post: 'Vice President', name: 'Shaveen Britto' },
    { fileName: 'nilupul.jpg', post: 'Assistant Secretary', name: 'Nilupul Kodikara' },
    { fileName: 'niluka.jpg', post: 'Web Master', name: 'Niluka Dilhan' },
    { fileName: 'vishmi.jpg', post: 'User Group Admin (AI)', name: 'Vishmi Vithanachchi' },
    { fileName: 'charith.jpg', post: 'User Group Admin (Mobile Development)', name: 'Charith Abeygunawardhena' },
    { fileName: 'malith.jpg', post: 'Junior Treasurer', name: 'Malith Kalhara' },
    { fileName: 'viraj.jpg', post: 'User Group Admin (Programming)', name: 'Viraj Edirisinghe' },
    { fileName: 'parakrama.jpg', post: 'User Group Admin (Database and Networking)', name: 'Parakrama Dissanayake' },
    { fileName: 'kavinda.jpg', post: 'User Group Admin (Media)', name: 'Kavinda Nimalaka' },
    { fileName: 'hasitha.jpg', post: 'Graphic Designer', name: 'Hasitha Ranaweera' },
    { fileName: 'kusal.jpg', post: 'Batch Coordinator', name: 'Kusal Sirimanna' },
    { fileName: 'rupika.jpg', post: 'Batch Coordinator', name: 'Rupika Ekanayake' },
    { fileName: 'hara.jpg', post: 'Batch Coordinator', name: 'Pramuka Weerasinghe' },
 ];

  constructor() { }

  ngOnInit() {
  }

}
