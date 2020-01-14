import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DropzoneDirective } from './dropzone.directive';
import { UploaderComponent } from './uploader/uploader.component';
import { UploadTaskComponent } from './upload-task/upload-task.component';
// 1. Import the libs you need
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
var firebaseConfig = {
  apiKey: "AIzaSyA1syvbF-LuEK937af2qXuwakWKP2aYOdM",
  authDomain: "techtibetmusic.firebaseapp.com",
  databaseURL: "https://techtibetmusic.firebaseio.com",
  projectId: "techtibetmusic",
  storageBucket: "techtibetmusic.appspot.com",
  messagingSenderId: "423225161491",
  appId: "1:423225161491:web:5454c9c811b4e4e6264ce6"
};
@NgModule({
  declarations: [
    AppComponent,
    DropzoneDirective,
    UploaderComponent,
    UploadTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule // storage

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
