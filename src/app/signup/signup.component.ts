import { Component } from '@angular/core';
import { MatCard, MatCardActions, MatCardContent } from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatOption } from '@angular/material/core';
import { MatSelect } from '@angular/material/select';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatRadioButton, MatRadioGroup } from '@angular/material/radio';
import Swal from 'sweetalert2'



@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [MatInputModule, MatCardContent, MatCard, MatFormFieldModule, MatOption, MatSelect, MatCardActions, MatCheckbox, MatRadioButton, MatRadioGroup ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  public performSearch() {
    swalWithBootstrapButtons.fire({
      title: "Are you sure?",
      text: "Did you type the correct parameters",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, create account !",
      cancelButtonText: "No, cancel!",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire({
          title: "Account has been successfully created!",
          icon: "success"
        });
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire({
          title: "Cancelled",
          icon: "error"
        });
      }
    });
  }

}

const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: "btn btn-success",
    cancelButton: "btn btn-danger"
  },
  buttonsStyling: false
});
