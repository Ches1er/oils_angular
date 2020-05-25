import { Component, OnInit } from '@angular/core';
import {ImagesService} from '../../../services/goods/images/images.service';
import {AdminMessagesService} from '../../../services/messages/admin-messages.service';
import {Image} from '../../../dto/images/Image';

@Component({
  selector: 'app-images-picker',
  templateUrl: './images-picker.component.html',
  styleUrls: ['./images-picker.component.less']
})
export class ImagesPickerComponent implements OnInit {
  get images(): any[] {
    return this.pImages;
  }

  set images(value: any[]) {
    this.pImages = value;
  }
  get imageUploaded(): any {
    return this.pImageUploaded;
  }

  set imageUploaded(value: any) {
    this.pImageUploaded = value;
  }
  selectedFile: File = null;
  private pImageUploaded = null;
  visible = false;
  private pImages = [];
  constructor(private imgService: ImagesService, private adminMessageService: AdminMessagesService) { }

  ngOnInit() {
    this.imageUploaded = null;
    this.adminMessageService
      .imagesPickerWindowShowMessage
      .subscribe(resp => this.visible = true);
    this.updateImages();
  }
  private updateImages() {
    this.imgService.images.subscribe(images => {
      this.images = images;
    });
  }
  public cancel() {
    this.visible = false;
  }
  chooseImage(image: Image) {
    this.adminMessageService.imageHasChoosenMessage(image);
    this.cancel();
  }

  // Upload image

  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
  }

  onUpload() {
    this.imgService.uploadImage(this.selectedFile).subscribe(resp => {
      this.updateImages();
      this.imageUploaded = 'Uploaded';
      this.selectedFile = null;
    });
  }
}
