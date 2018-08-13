import { Injectable } from '@angular/core';
import {Title} from '@angular/platform-browser';
import {BehaviorSubject} from 'rxjs';
import {QckPage} from '../qck-page';

@Injectable({
  providedIn: 'root'
})
export class TitleManagerService {
  defaultName: string;

  appTitle = new BehaviorSubject< QckPage >({ name: this.defaultName });
  constructor(
    private title: Title,
  ) { }

  setTitle(title: string | QckPage) {
    switch (typeof title) {
      case 'string':
        title = `${ title } | F4ERP`;
        this.appTitle.next({ name: title });
        this.title.setTitle(title);
        break;
      case 'object':
        this.appTitle.next( title as any );
        this.title.setTitle(`${ (title as QckPage).name } | ${ this.defaultName }`);
        break;
      default:
        throw new Error( ' TitleManagerService -> setTitle: Invalid Argument ' );
    }
  }
}
