import { Component, OnInit, Renderer, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-profile-setting',
  templateUrl: './profile-setting.component.html',
  styleUrls: ['./profile-setting.component.scss'],
})
export class ProfileSettingComponent implements OnInit {
public theme: boolean=false;
  constructor(private renderer: Renderer, private cdr: ChangeDetectorRef) {}

  ngOnInit() {}
  ngAfterViewInit() {
    this.theme = document.body.classList.contains("dark");
    this.cdr.detectChanges();
  }
  public toggleTheme() {
    this.theme=this.theme?true:false;
    this.renderer.setElementClass(document.body, 'dark', this.theme?true:false);
  }
}
