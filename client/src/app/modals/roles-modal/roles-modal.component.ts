import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BsModalRef, BsModalService, ModalModule } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-roles-modal',
  standalone: true,
  imports: [ModalModule, CommonModule, FormsModule],
  templateUrl: './roles-modal.component.html',
  styleUrl: './roles-modal.component.css',
})
export class RolesModalComponent {
  username = '';
  availableRoles: any[] = [];
  selectedRoles: any[] = [];
  @Output() updateSelectedRoles = new EventEmitter<any[]>();

  constructor(
    public bsModalRef: BsModalRef,
    public bsModalService: BsModalService
  ) {}

  updateChecked(checkedValue: string) {
    const index = this.selectedRoles.indexOf(checkedValue);
    index !== -1
      ? this.selectedRoles.splice(index, 1)
      : this.selectedRoles.push(checkedValue);
  }

  //custom onSubmit method to emit the selected roles and hide the modal
  onSubmit() {
    this.updateSelectedRoles.emit(this.selectedRoles);
    this.bsModalRef.hide();
  }
}
