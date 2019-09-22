import { Component, OnInit, Renderer } from '@angular/core';

@Component({
  selector: 'app-profile-setting',
  templateUrl: './profile-setting.component.html',
  styleUrls: ['./profile-setting.component.scss'],
})
export class ProfileSettingComponent implements OnInit {
public theme: boolean;
  constructor(private renderer: Renderer) {
    this.theme = false;
   }

  ngOnInit() {}
  public toggleTheme() {
    this.renderer.setElementClass(document.body, 'dark', this.theme?true:false);
  }
}
