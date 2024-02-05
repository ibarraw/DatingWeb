import { Component } from '@angular/core';
import { Member } from '../../_models/member';
import { MembersService } from '../../_services/members.service';
import { CommonModule } from '@angular/common';
import { MemberCardComponent } from '../member-card/member-card.component';

@Component({
  selector: 'app-member-list',
  standalone: true,
  imports: [CommonModule, MemberCardComponent],
  templateUrl: './member-list.component.html',
  styleUrl: './member-list.component.css'
})
export class MemberListComponent {
  members: Member[] = [];

  constructor(private memberSerivce: MembersService) { }

  ngOnInit() {
    this.loadMembers();
  }

  loadMembers() {
    this.memberSerivce.getMembers().subscribe({
      next: members => this.members = members
    });
  }
}
