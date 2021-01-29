import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ArticlesService} from '../../../../../../services/articles/articles.service';
import {AdminMessagesService} from '../../../../../../services/messages/admin-messages.service';
import {Image} from '../../../../../../dto/images/Image';

@Component({
  selector: 'app-admin-articles-themes',
  templateUrl: './admin-articles-themes.component.html',
  styleUrls: ['./admin-articles-themes.component.less']
})
export class AdminArticlesThemesComponent implements OnInit {
  get themes(): any {
    return this.pThemes;
  }

  set themes(value: any) {
    this.pThemes = value;
  }
  private pThemes = null;
  private whatHaveToDo = 'add';
  get choosenImg(): Image {
    return this.pChoosenImg;
  }

  set choosenImg(value: Image) {
    this.pChoosenImg = value;
  }
  private pChoosenImg: Image = null;
  addChangeTheme: FormGroup = new FormGroup({
    id: new FormControl(''),
    imgId: new FormControl(''),
    name: new FormControl('', Validators.required),
  });
  constructor(private articleService: ArticlesService, private adminMessageService: AdminMessagesService) { }

  ngOnInit() {
    this.updateThemes();
  }
  private updateThemes() {
    this.articleService.themes.subscribe(resp => {
      this.themes = resp;
    });
  }
  clearFields(e?) {
    if (e) { e.preventDefault(); }
    this.addChangeTheme.patchValue({
      id: '',
      name: '',
      imgId: ''
    });
    this.whatHaveToDo = 'add';
  }

  onThemeSubmit() {
    this.articleService.addTheme(this.addChangeTheme.value, this.whatHaveToDo).subscribe(resp => {
      this.adminMessageService.ShowServerResponseWindow();
      if (resp === 'update success') {
        const data = ['обновление темы', 'Данные успешно обновлены'];
        this.adminMessageService.DataToServerResponseData(data.join(';'));
        this.clearFields();
      }
      if (resp === 'insert success') {
        const data = ['добавление новой темы', 'Данные успешно добавлены'];
        this.adminMessageService.DataToServerResponseData(data.join(';'));
        this.clearFields();
      }
      if (resp === 'error') {
        const data = ['добавление новой темы', 'Ой, что-то пошло не так! Повторите попытку.'];
        this.adminMessageService.DataToServerResponseData(data.join(';'));
      }
      if (resp === 'this object exists') {
        const data = ['добавление новой темы',
          'Такая тема уже существует! Если хотите изменить ее, выберите из списка.'];
        this.adminMessageService.DataToServerResponseData(data.join(';'));
      }
      this.adminMessageService.articlesThemesChanges();
      this.updateThemes();
    });
  }

  fillInTheme(id: any) {
    this.themes.filter(th => {
      if (th.id == id) {
        this.addChangeTheme.patchValue({
          id: th.id,
          name: th.name,
          imgId: th.imgId
        });
        this.choosenImg = new Image(th.imgId, 'name', th.img);
      }
    });
    this.whatHaveToDo = 'update';
  }
  imagesPickerShow(e) {
    this.adminMessageService.imagesPickerWindowShow();
    e.preventDefault();
  }
}
