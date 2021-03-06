import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {Image} from '../../dto/images/Image';

@Injectable({
  providedIn: 'root'
})
export class AdminMessagesService {

  private pImagesPickerWindowShow: Subject<null> = new Subject<null>();
  private pImageHasChoosen: Subject<Image> = new Subject<Image>();
  private pDataToServerResponse: Subject<string> = new Subject<string>();
  private pShowServerResponseWindowMessage: Subject<null> = new Subject<null>();
  private pTypeUpdateCreateMessage: Subject<null> = new Subject<null>();
  private pArticlesThemesChangesMessage: Subject<null> = new Subject<null>();
  private pBrandsUpdateCreateMessage: Subject<null> = new Subject<null>();

  constructor() {
  }

  // Windows

  get ShowServerResponseWindowMessage(): Subject<null> {
    return this.pShowServerResponseWindowMessage;
  }

  get dataToServerResponse(): Subject<string> {
    return this.pDataToServerResponse;
  }

  get imagesPickerWindowShowMessage(): Subject<null> {
    return this.pImagesPickerWindowShow;
  }

  get imageHasChoosen(): Subject<Image> {
    return this.pImageHasChoosen;
  }

  public imagesPickerWindowShow() {
    this.pImagesPickerWindowShow.next();
  }

  public imageHasChoosenMessage(image: Image) {
    this.pImageHasChoosen.next(image);
  }

  public ShowServerResponseWindow() {
    this.pShowServerResponseWindowMessage.next();
  }

  public DataToServerResponseData(data: string) {
    this.pDataToServerResponse.next(data);
  }

  // CreateUpdate

  get typeUpdateCreateMessage(): Subject<null> {
    return this.pTypeUpdateCreateMessage;
  }
  get articlesThemesChangesMessage(): Subject<null> {
    return this.pArticlesThemesChangesMessage;
  }
  get brandsUpdateCreateMessage(): Subject<null> {
    return this.pBrandsUpdateCreateMessage;
  }


  public typeUpdateCreate() {
    this.pTypeUpdateCreateMessage.next();
  }
  public brandUpdateCreate() {
    this.pBrandsUpdateCreateMessage.next();
  }
  public articlesThemesChanges() {
    this.pArticlesThemesChangesMessage.next();
  }

}
