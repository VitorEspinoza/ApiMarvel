import { LocalStorageUtils } from 'src/app/services/localSotrage';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  LocalStorage: LocalStorageUtils = new LocalStorageUtils;
  user: any = this.LocalStorage.getUser();
  ngOnInit(): void {
  }

}
