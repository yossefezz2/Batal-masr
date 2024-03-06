import { Component } from '@angular/core';
import { FormControl, FormControlOptions, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { RepresntorService } from 'src/app/core/services/represntor.service';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.scss']
})
export class AddPlayerComponent {
  constructor(
    private _RepresntorService: RepresntorService,
    private _ToastrService: ToastrService,
    private _Router: Router,
  ) {}
  errMessage: string = '';
  isLoading: boolean = false;
  nameArray: any[] = [];
  addPlayer: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(4)]),
    birthOfDate: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    height: new FormControl('', [Validators.required]),
    weight: new FormControl('', [Validators.required]),
    club: new FormControl(''),
    img: new FormControl('', [Validators.required]),
  }
 /*  , {validators:[this.validateImageSize] }as FormControlOptions */
  
  );

  handelForm() {
    const userData = this.addPlayer.value;
    this.isLoading = true;
    if (this.addPlayer.valid) {
      const formData = new FormData();
      formData.append('name', userData.name);
      formData.append('birthOfDate', userData.birthOfDate);
      formData.append('gender', userData.gender);
      formData.append('height', userData.height);
      formData.append('weight', userData.weight);
      formData.append('club', userData.club);

      // Check if img control exists before setting its value
      const imgControl = this.addPlayer.get('img');
      if (imgControl) {
        const file = imgControl.value;
        formData.append('img', file);

        this._RepresntorService.addPlayer(formData).subscribe({
          next: () => {
            this.isLoading = false;
            this._Router.navigate(['/mangePlayer']);
            this._ToastrService.success('The player has been added successfully');
            this.errMessage = '';
          },
          error: (err) => {
            this.isLoading = false;
            this.errMessage = err.error.data;
          },
        });
      }
    }
  }

  onFileSelected(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.addPlayer.get('img')?.setValue(file);
    }
  }
 /*  validateImageSize(group:FormGroup) :void{
    const img = group.get('img');

    if (img?.value === '') {
      img.setErrors({required:true})
      
    }
    else if (img && img.value && img.value.size) {
      const fileSize = img.value.size;
      const validSize = 400 * 600;
      if (fileSize > validSize) {
        img.setErrors({ImgSize:true})
      }
    }
  } */
}
