import { Component, OnInit, Renderer } from '@angular/core';

@Component({
  selector: 'app-profile-setting',
  templateUrl: './profile-setting.component.html',
  styleUrls: ['./profile-setting.component.scss'],
})
export class ProfileSettingComponent implements OnInit {
public theme: boolean=false;
  constructor(private renderer: Renderer) {}

  ngOnInit() {}
  public toggleTheme() {
    this.theme=this.theme?true:false;
    this.renderer.setElementClass(document.body, 'dark', this.theme?true:false);
  }
}
