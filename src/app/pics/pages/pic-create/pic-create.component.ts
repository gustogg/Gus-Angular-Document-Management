import { Component } from '@angular/core';
import { IPic } from '../../../core/interfaces/i-pic';
import { PicService } from '../../../core/services/pic.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { catchError } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pic-create',
  templateUrl: './pic-create.component.html',
  styleUrl: './pic-create.component.css'
})
export class PicCreateComponent {
  pic?: IPic;
  file: any;

  constructor(
    private picService: PicService,
    private router: Router
  ) {}
  onSubmit(form: NgForm) {
    if (form.valid) {
      this.picService
        .uploadPic(this.file)
        .pipe(catchError(this.picService.baseHttp.handleError))
        .subscribe((respPic: IPic) => {
          Swal.fire({
            title: 'Success',
            text: 'Upload successfully!',
            icon: 'success',
          });

          this.pic = respPic;
          this.router.navigate(['/pic']);
        });
    }
  }

  upload(event: any) {
    this.file = event.target.files[0];
  }
}
