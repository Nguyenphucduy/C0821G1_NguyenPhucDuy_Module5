import { Component, OnInit } from '@angular/core';
import {DictionaryServiceService} from '../dictionary-service.service';
import {IWord} from '../iword';

@Component({
  selector: 'app-dictionary-page',
  templateUrl: './dictionary-page.component.html',
  styleUrls: ['./dictionary-page.component.css']
})
export class DictionaryPageComponent implements OnInit {

  words: IWord[] = [];

  constructor(private dictionaryServiceService: DictionaryServiceService) { }

  ngOnInit(): void {
    this.words = this.dictionaryServiceService.getAll();
  }

}
