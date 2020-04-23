import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardDataService {

  faculty: any[] = [];
  members: any[] = [];
  private prefix = 'http://localhost:3000/';

  constructor(public http: HttpClient) {
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

  addMember(member: any) {
    return this.http.post(this.prefix + 'api/members/add', member);
  }

  getAllMembers() {
    return this.http.get(this.prefix + 'api/members');
  }

  addTeam(team: any) {
    return this.http.post(this.prefix + 'api/teams/add', team);
  }

  getMemberByName() {
    return this.http.get(this.prefix + 'api/members/allNames');
  }
  
  search(q){
    return this.http.get(this.prefix+'api/members/search?q='+q);
  }
}
