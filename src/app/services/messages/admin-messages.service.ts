import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {Image} from '../../dto/images/Image';

@Injectable({
  providedIn: 'root'
})
export class AdminMessagesService {

  // Windows

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

  private pImagesPickerWindowShow: Subject<null> = new Subject<null>();
  private pImageHasChoosen: Subject<Image> = new Subject<Image>();

  constructor() {
  }
}
