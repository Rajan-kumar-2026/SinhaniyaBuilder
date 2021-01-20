import { Component, OnInit } from '@angular/core';
import { BuilderProfileService } from '../builder-profile.service';
import { ClientDetail } from '../models/clientdetail';

@Component({
  selector: 'app-builderprofile',
  templateUrl: './builderprofile.component.html',
  styleUrls: ['./builderprofile.component.css']
})
export class BuilderprofileComponent {

  clientDetail: ClientDetail = new ClientDetail();

  constructor() { }

  onNameChanged(name: string) {
    this.clientDetail.name = name;
  }

  onVillageChanged(village: string) {
    this.clientDetail.village = village;
  }

  onMobileNumberChanged(mobileNumber: number) {
    this.clientDetail.mobileNumber = mobileNumber;
  }

  onStateChanged(state: any) {
    this.clientDetail.state = state;
  }

  onEmailIdChanged(emailId: string) {
    this.clientDetail.emailId = emailId;
  }

  onDateChanged(date: string) {
    this.clientDetail.date = date;
  }

  onDistrictChanged(district: string) {
    this.clientDetail.district = district;
  }
}

