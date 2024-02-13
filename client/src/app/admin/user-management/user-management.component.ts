import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../_services/admin.service';
import { User } from '../../_models/user';
import { CommonModule } from '@angular/common';
import { BsModalRef, BsModalService, ModalModule } from 'ngx-bootstrap/modal';
import { RolesModalComponent } from '../../modals/roles-modal/roles-modal.component';

@Component({
  selector: 'app-user-management',
  standalone: true,
  imports: [CommonModule, ModalModule, RolesModalComponent],
  templateUrl: './user-management.component.html',
  styleUrl: './user-management.component.css',
})
export class UserManagementComponent implements OnInit {
  users: User[] = [];
  bsModalRef: BsModalRef<RolesModalComponent> =
    new BsModalRef<RolesModalComponent>();
  availableRoles = ['Admin', 'Moderator', 'Member'];

  constructor(
    private adminService: AdminService,
    private modalService: BsModalService
  ) {}

  ngOnInit(): void {
    this.getUsersWithRoles();
  }

  getUsersWithRoles() {
    this.adminService
      .getUsersWithRoles()
      .subscribe((users) => (this.users = users));
  }

  openRolesModal(user: User) {
    console.log(user);
    const config = {
      class: 'modal-dialog-centered',
      initialState: {
        user,
        availableRoles: this.availableRoles,
        selectedRoles: [...user.roles],
      },
    };

    const bsModalRef = this.modalService.show(RolesModalComponent, config);
    const content = bsModalRef.content as RolesModalComponent; //cast to RolesModalComponent to access its properties
    content.updateSelectedRoles.subscribe((selectedRoles) => {
      if (!this.arrayEqual(selectedRoles, user.roles)) {
        this.adminService
          .updateUserRoles(user.username, selectedRoles)
          .subscribe((roles) => {
            user.roles = roles;
          });
      }
    });
  }

  private arrayEqual(arr1: any[], arr2: any[]) {
    return JSON.stringify(arr1.sort()) === JSON.stringify(arr2.sort());
  }
}
