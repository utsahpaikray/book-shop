import { Injectable } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
@Injectable({
  providedIn: 'root'
})
export class CameraService {

  constructor(private camera: Camera) { }
  public options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.FILE_URI,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }
  
public grtPicture(){
  this.camera.getPicture(this.options).then((imageData) => {
    let base64Image = 'data:image/jpeg;base64,' + imageData;
    console.log(base64Image)
   }, (err) => {
    // Handle error
   });
}
}
