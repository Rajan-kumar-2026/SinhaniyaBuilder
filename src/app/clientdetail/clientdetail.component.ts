import { Component, Input, EventEmitter, Output } from '@angular/core';
import { BuilderProfileService } from '../builder-profile.service';
import { ClientDetail } from '../models/clientdetail';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-clientdetail',
  templateUrl: './clientdetail.component.html',
  styleUrls: ['./clientdetail.component.css']
})
export class ClientdetailComponent {

  states: string[] = ['Bihar', 'Jharkhand', 'Assam', 'Uttarpradesh(U.p)', 'Uttrakhand', 'Odisa', 'Maharashtra', 'Karnatak',
    'Rajasthan', 'Meghalay', 'Tamilnaudi', 'Gujrat', 'Meghalay', 'Chattisgarh'];
  districts: string[] = ['Muzaffarpur', 'Motihari', 'Darbhanga', 'Siwan', 'Purniya', 'Arariya', 'Khagariya', 'Nalanda', 'Nawada'];
  ages: number[] = [];
  clientdetail: ClientDetail = new ClientDetail();
  showResult = false;
  @Input() name!: string;
  @Input() village!: string;
  @Input() mobileNumber!: number;
  @Input() state!: string;
  @Input() emailId!: string;
  @Input() date!: string;
  @Input() district!: string;

  @Output() nameChanged: EventEmitter<string> = new EventEmitter<string>();
  @Output() villageChanged: EventEmitter<string> = new EventEmitter<string>();
  @Output() mobileNumberChanged: EventEmitter<number> = new EventEmitter<number>();
  @Output() stateChanged: EventEmitter<string> = new EventEmitter<string>();
  @Output() emailIdChanged: EventEmitter<string> = new EventEmitter<string>();
  @Output() dateChanged: EventEmitter<string> = new EventEmitter<string>();
  @Output() districtChanged: EventEmitter<string> = new EventEmitter<string>();

  constructor(private hc: BuilderProfileService) {
    this.age();
  }

  onNameChanged() {
    this.nameChanged.emit(this.name)
  }

  onVillagedChanged() {
    this.villageChanged.emit(this.village)
  }

  onMobileNumberChanged() {
    this.mobileNumberChanged.emit(this.mobileNumber)
  }

  onStateChanged() {
    this.stateChanged.emit(this.state)
  }

  onEmailIdChanged() {
    this.emailIdChanged.emit(this.emailId)
  }

  onDateChanged() {
    this.dateChanged.emit(this.date)
  }

  onDistrictChanged() {
    this.districtChanged.emit(this.district)
  }

  age() {
    for (let age = 10; age <= 101; age++) {
      this.ages.push(age);
    }
  }

  submit() {
    this.hc.newBuildingProfile(this.clientdetail).subscribe();
    this.showResult = true;
  }
}
