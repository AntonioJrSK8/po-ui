import { Component, OnInit } from '@angular/core';
import { ModalRefService } from '../modal-ref.service';

@Component({
  selector: 'app-modal-test',
  templateUrl: './modal-test.component.html',
  styleUrls: ['./modal-test.component.css']
})
export class ModalTestComponent implements OnInit {

  constructor(private modalRef: ModalRefService) { }

  ngOnInit(): void {
    console.log(this.modalRef);
    // setTimeout(() => {
    //   this.modalRef.hide();
    // }, 2000);
  }

}
