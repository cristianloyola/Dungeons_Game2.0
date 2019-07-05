import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Inicio',
      url: '/tab1',
      icon: 'home'
    },
    {
      title: 'Noticias',
      url: '/tab2',
      icon: 'calculator'
    },
    {
      title: 'PC',
      url: '/tab3',
      icon: 'laptop'
    },
    {
      title: 'XBox',
      url: '/tabs4',
      icon: 'logo-xbox'
    },
    {
      title: 'PS4',
      url: '/tabs5',
      icon: 'logo-playstation'
    },
    {
      title: 'PS Vita',
      url: '/tabs6',
      icon:'git-branch'
    },
    {
      title: 'Acerca De...',
      url: '/tabs7',
      icon: 'nuclear'
    },
    /* {
      title: 'List',
      url: '/list',
      icon: 'list'
    } */
  ];
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
    
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
