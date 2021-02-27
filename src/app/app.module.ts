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
  apiKey: "AIzaSyBJeXdnQk_fH40qtk0tT5wScBP1HYrUaWA",
  authDomain: "lhuapp-eca3c.firebaseapp.com",
  projectId: "lhuapp-eca3c",
  storageBucket: "lhuapp-eca3c.appspot.com",
  messagingSenderId: "156536025838",
  appId: "1:156536025838:web:f2e8eb87ec680aa9cbf9ff",
  measurementId: "G-ZEN6DS1J9R"
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
