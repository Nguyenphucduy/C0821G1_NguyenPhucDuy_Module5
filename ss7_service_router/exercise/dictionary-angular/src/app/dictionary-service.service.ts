import { Injectable } from '@angular/core';
import {IWord} from './iword';

@Injectable({
  providedIn: 'root'
})
export class DictionaryServiceService {
  words: IWord[] = [{word: 'hello', mean: 'Xin chao'},
    {word: 'good', mean: 'tot'},
    {word: 'bad', mean: 'xau'},
    {word: 'beautiful', mean: 'Xinh dep'},
  ];
  getAll() {
    return this.words;
  }
  findByWord(word: string){
    return this.words.find(wordObj => wordObj.word === word);
  }
  constructor() { }
}
