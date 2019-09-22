import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-school-list',
  templateUrl: './my-school-list.page.html',
  styleUrls: ['./my-school-list.page.scss'],
})
export class MySchoolListPage implements OnInit {
  schoolList: any[];

  constructor(private _router: Router) { }

  ngOnInit() {
    
   
    this.schoolList =[
      {
      name: 'Bhalipada School'
     },
      {
      name: 'BHATAPADA School'
     },
      {
      name: 'BHETESWAR School'
     },
      {
      name: 'BINJHALA School'
     },
      {
      name: 'BISNUDIHA School'
     },
      {
      name: 'DINABANDHUPUR School'
     },
      {
      name: 'NACHUNI School'
     },
      {
      name: 'NARENDRAPUR School'
     },
      {
      name: 'GAMBHARIMUNDA School'
     },
      {
      name: 'KUMARANGA School'
     },
      {
      name: 'PADANPUR School'
     },
      {
      name: 'PRATAP School'
     },
      {
      name: 'RAMPUR School'
     },
      {
      name: 'RAGHUNATHPUR School'
     },
     {
      name: 'AUROBINDO PURNANGA S. KENDRA School'
     },
      {
      name: 'HARIJAN SAHI P School'
     },
      {
      name:  'DR. RADHA CHARAN P  School'
     },
      {
      name: 'J.C. GIRLS High School'
     },
      {
      name: 'BALUGAON GIRLS M E School'
     },
      {
      name: 'CHILIKA RANI ENG. MED. School'
     },
      {
      name:  'DR. RADHA CHARAN P School'
     },
      {
      name: 'GOPABANDHU COLONY PP School'
     },
      {
      name:  'SANTARAPUR  P School'
     },
      {
      name:  'LITTLE WORLD ENG. MED. SCH. School'
     },
      {
      name: 'KANHEITARAI PROJECT P School'
     },
      {
      name: 'PRAJNATEERTHA PUBLIC  School'
     },
      {
      name: 'SARALAPADAR  P  School'
     },
      {
      name: 'SANTINAGAR PROJECT  PS  School'
     },
      {
      name: 'SRI SATYA SAI VIDYA MANDIR  School'
     },
      {
      name:' SU-DISHA VIDYA VIHAR  PS  School'
     },
      {
      name: 'UMA MAHESWAR PUR   PS  School'
     },
      {
      name: 'VENKATESWAR School'
     },
      {
      name: 'VIVEKANANDA VIDYAMANDIR  School'
     }     
  ]
  }
public schoolDetails(name){
  this._router.navigate(['master/my-school/details']);
}
}
