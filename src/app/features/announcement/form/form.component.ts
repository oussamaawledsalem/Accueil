import { AnnnouncementService } from './../../../shared/annnouncement.service';
import { Announcement } from './../../../core/models/announcement';
import { Component } from '@angular/core';
import { announcementService } from 'src/app/shared/announcement.service.ts';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  announcement: Announcement = new Announcement();
  constructor(private AnnnouncementService: announcementService) { }
  save(): void {
    console.log(this.announcement);
  }
  ngOnInit(): void {
    this.announcement = new Announcement();
  }
}
