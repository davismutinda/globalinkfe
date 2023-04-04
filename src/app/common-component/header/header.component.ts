import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { SettingsService } from 'src/app/shared/settings/settings.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  activePath = '';
  showSearch: boolean = true;
  public changeLayout: string = '1';
  public darkTheme: boolean = false;
  public logoPath: string = '';

  constructor(private Router: Router, private settings: SettingsService) {
    this.activePath = this.Router.url.split('/')[2];
    this.Router.events.subscribe((data: any) => {
      if (data instanceof NavigationStart) {
        this.activePath = data.url.split('/')[2];
      }
    });
    this.settings.changeLayout.subscribe((res: any) => {
      this.changeLayout = res;
    });
    this.settings.changeTheme.subscribe((res: any) => {
      if (res == 'Dark') {
        this.darkTheme = true;
        this.logoPath='assets/img/logo.svg'
      } else {
        this.darkTheme = false;
        this.logoPath='assets/img/logo.svg'

      }
    });
  }

  ngOnInit(): void {
    this.LoadScript('assets/js/header.js');
  }

  LoadScript(js: string) {
    var script = document.createElement('script');
    script.src = js;
    script.async = false;
    document.body.appendChild(script);
  }
}
