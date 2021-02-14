import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
import { Constant } from '../Constant';

@Component({
  selector: 'upload-task',
  templateUrl: './upload-task.component.html',
  styleUrls: ['./upload-task.component.scss']
})
export class UploadTaskComponent implements OnInit {

  @Input() file: File;

  task: AngularFireUploadTask;

  percentage: Observable<number>;
  snapshot: Observable<any>;
  downloadURL: string;

  constructor(private storage: AngularFireStorage, private db: AngularFirestore) { }

  ngOnInit() {
    this.startUpload();
  }

  startUpload() {

    // The storage path
    const path = `${this.file.name}`;

    // Reference to storage bucket
    const ref = this.storage.ref(path);

    // The main task
    this.task = this.storage.upload(path, this.file);

    // Progress monitoring
    this.percentage = this.task.percentageChanges();

    this.snapshot   = this.task.snapshotChanges().pipe(
      tap(console.log),
      // The file's download URL
      finalize( async() =>  {
        this.downloadURL = await ref.getDownloadURL().toPromise();
        let fileName=this.file.name.toLowerCase();
        let artistName="";
        for(let name of Constant.names){
          if(fileName.includes(name.toLowerCase())){
            artistName +=name+" ";
          }

        }
        if(artistName==""){
          artistName="Unknown";
          }
        this.db.collection('songs').add( {
           songUrl: this.downloadURL, 
           title: path,
           //date_added: new Date(),
           subtitle:"Tibetan Song",
          // artist:artistName,
          imageUrl:"https://firebasestorage.googleapis.com/v0/b/lhuapp-e71d4.appspot.com/o/ncs.jfif?alt=media&token=1468f736-f9b7-4f9a-8de9-19c465dcdd1c",
           mediaId:Date.now()+'_id'});
      }),
    );
  }

  isActive(snapshot) {
    return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes;
  }

}