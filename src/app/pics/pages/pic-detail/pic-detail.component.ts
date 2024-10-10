import { Component, OnInit } from '@angular/core';
import { IPic } from '../../../core/interfaces/i-pic';
import { PicService } from '../../../core/services/pic.service';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError } from 'rxjs';
import Swal from 'sweetalert2';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-pic-detail',
  templateUrl: './pic-detail.component.html',
  styleUrl: './pic-detail.component.css'
})
export class PicDetailComponent implements OnInit {
  pic! : IPic
  file: any
  id: number = 0

  constructor(
    private picService: PicService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit(): void {
    this.id = parseInt(this.activatedRoute.snapshot.paramMap.get('id') || '0');
    // You can use this also
    // this.id=this._Activatedroute.snapshot.params['id'];
    this.picService
      .getPic(this.id)
      .pipe(catchError(this.picService.baseHttp.handleError))
      .subscribe((respPic: IPic) => {
        this.pic = respPic;
      });
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.picService
        .updatePic(this.id, this.file)
        .pipe(catchError(this.picService.baseHttp.handleError))
        .subscribe((respPic: IPic) => {
          Swal.fire({
            title: 'Success',
            text: 'Edit successfully!',
            icon: 'success',
          });

          this.pic = respPic;
          this.router.navigate(['/pic']);
        });
    }
  }

  onRemove() {
    Swal.fire({
      title: 'Do you want to delete this picture?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Yes',
      denyButtonText: 'No',
      customClass: {
        actions: 'my-actions',
        cancelButton: 'order-1 right-gap',
        confirmButton: 'order-2',
        denyButton: 'order-3',
      },
    }).then((result) => {
      if (result.isConfirmed) {
        // Setuju
        this.picService
          .removePic(this.id)
          .pipe(catchError(this.picService.baseHttp.handleError))
          .subscribe((respPic: null) => {
            Swal.fire({
              title: 'Success',
              text: 'Remove Successed',
            });
            this.router.navigate(['/pic']);
          });
      } else if (result.isDenied) {
        // Ga setuju
      }
    });
  }
  uploadPic(event: any) {
    const file = event.target.files[0];
    //validasi gambar atau tidak
    //jika gambar
    if (file && file.type.startsWith('image/'))
    {
      this.file = file;
    }
    // jika bukan gambar ada muncul alert
    else
    {
      Swal.fire({
        title: 'Error',
        text: 'Please upload a valid image file!',
        icon: 'error',
      });
      //inputnya kosongkan kembali agar tidak disubmit, bro!
      event.target.value = null;
    }
  }

}
