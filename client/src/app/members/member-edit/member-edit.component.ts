import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { Member } from '../../_models/member';
import { User } from '../../_models/user';
import { AccountService } from '../../_services/account.service';
import { MembersService } from '../../_services/members.service';
import { take } from 'rxjs';
import { CommonModule } from '@angular/common';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { FormsModule, NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { BusyService } from '../../_services/busy.service';
import { PhotoEditorComponent } from '../photo-editor/photo-editor.component';

@Component({
  selector: 'app-member-edit',
  standalone: true,
  imports: [CommonModule, TabsModule, FormsModule, PhotoEditorComponent],
  templateUrl: './member-edit.component.html',
  styleUrl: './member-edit.component.css'
})
export class MemberEditComponent implements OnInit{
  // If the user tries to navigate away from the page, the browser will prompt them with a message to confirm if they want to leave the page. If the form is dirty, the user will be prompted to confirm if they want to leave the page and lose their changes. 
  // If the form is not dirty, the user will be allowed to leave the page without any prompt.
  @ViewChild('editForm') editForm: NgForm | undefined; 

  // The @HostListener decorator listens for the window:beforeunload event, which is triggered when the user tries to navigate away from the page.
  @HostListener('window:beforeunload', ['$event']) unloadNotification($event: any) {
    this.editForm?.dirty ? $event.returnValue = true : null;
  }
  member: Member | undefined;
  user: User | null = null;

  constructor(private accountService: AccountService, private memberService: MembersService, private toastr: ToastrService, public busyService: BusyService) {
    this.accountService.currentUser$.pipe(take(1)).subscribe({
      next: user => this.user = user
    });
  }

  ngOnInit(): void {
    this.loadMember();
  }

  loadMember() {
    if (!this.user) return;
    this.memberService.getMember(this.user.username).subscribe({
      next: member => {
        this.member = member;
      }
    });
  }

  updateMember() {
    if (!this.member) return;
    //this.busyService.busy();
    this.memberService.updateMember(this.editForm?.value).subscribe({
      next: () => {
        this.toastr.success('Profile updated successfully');
        this.editForm?.reset(this.member); // This will reset the form to its original state after the user has submitted the form.
        this.busyService.idle();
      },
      error: () => this.toastr.error('Failed to update profile'),
      complete: () => this.busyService.idle()
      
    });
  }

}
