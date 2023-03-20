import { Component, OnInit } from '@angular/core';
import { MessageService } from '@shared';


@Component({
  selector: 'app-dossier-page',
  templateUrl: './dossier-page.component.html',
  styleUrls: ['./dossier-page.component.scss']
})
export class DossierPageComponent implements OnInit {


  constructor(
    private messageService: MessageService
  ) {
  }

  ngOnInit(): void {
    this.messageService.send();
  }


}
