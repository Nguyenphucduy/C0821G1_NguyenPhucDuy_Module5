import { Component, OnInit } from '@angular/core';
import {DictionaryServiceService} from '../dictionary-service.service';
import {IWord} from '../iword';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit {
  wordObj: IWord;
  constructor(private dictionaryServiceService: DictionaryServiceService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    const wordSearch = this.activatedRoute.snapshot.params.word;
    console.log(wordSearch);
    this.wordObj = this.dictionaryServiceService.findByWord(wordSearch);

  }

  ngOnInit(): void {
  }

  back() {
    this.router.navigateByUrl('list');
  }
}
