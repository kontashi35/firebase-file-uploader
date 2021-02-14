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
  apiKey: "AIzaSyAsqmyHCQ-aJgwQ5OfnW516zuxCOekvuVA",
  authDomain: "lhuapp-e71d4.firebaseapp.com",
  projectId: "lhuapp-e71d4",
  storageBucket: "lhuapp-e71d4.appspot.com",
  messagingSenderId: "490348885803",
  appId: "1:490348885803:web:24a4bea643d7ca0000376e",
  measurementId: "G-7DL5SS9TJ7"
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
