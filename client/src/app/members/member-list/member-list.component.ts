import { Component } from '@angular/core';
import { Member } from '../../_models/member';
import { MembersService } from '../../_services/members.service';
import { CommonModule } from '@angular/common';
import { MemberCardComponent } from '../member-card/member-card.component';
import { Observable, take } from 'rxjs';
import { Pagination } from '../../_models/pagination';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { FormsModule } from '@angular/forms';
import { UserParams } from '../../_models/userParams';
import { AccountService } from '../../_services/account.service';
import { User } from '../../_models/user';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

@Component({
  selector: 'app-member-list',
  standalone: true,
  imports: [
    CommonModule,
    MemberCardComponent,
    PaginationModule,
    FormsModule,
    ButtonsModule,
  ],
  templateUrl: './member-list.component.html',
  styleUrl: './member-list.component.css',
})
export class MemberListComponent {
  // members$: Observable<Member[]> | undefined;
  members: Member[] = [];
  pagination: Pagination | undefined;
  userParams: UserParams | undefined;
  genderList = [
    { value: 'male', display: 'Males' },
    { value: 'female', display: 'Females' },
  ];

  constructor(private memberSerivce: MembersService) {
    this.userParams = this.memberSerivce.getUsersParams();
  }

  ngOnInit() {
    // this.members$ = this.memberSerivce.getMembers();
    this.loadMembers();
  }

  loadMembers() {
    if (this.userParams) {
      this.memberSerivce.setUsersParams(this.userParams);
      this.memberSerivce.getMembers(this.userParams).subscribe({
        next: (response) => {
          if (response.result && response.pagination) {
            this.members = response.result;
            this.pagination = response.pagination;
          }
        },
      });
    }
  }

  resetFilters() {
    this.userParams = this.memberSerivce.resetUserParams();
    this.loadMembers();
  }

  pageChanged(event: any) {
    if (this.userParams && this.userParams?.pageNumber !== event.page) {
      this.userParams.pageNumber = event.page;
      this.memberSerivce.setUsersParams(this.userParams);
      this.loadMembers();
    }
  }

  onFilterChange() {
    if (!this.userParams) return;
    this.userParams.pageNumber = 1;
    this.memberSerivce.setUsersParams(this.userParams);
    this.loadMembers();
  }
}
