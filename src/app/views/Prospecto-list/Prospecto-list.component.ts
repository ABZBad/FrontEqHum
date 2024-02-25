import { Component, OnInit } from '@angular/core';
import { Prospecto } from '../../models/Prospecto.model';
import { ProspectoController } from '../../controllers/Prospecto.controller';
import { CommonModule } from '@angular/common'; // Importa CommonModule
@Component({
  selector: 'app-prospecto-list',
  templateUrl: './prospecto-list.component.html',
  styleUrls: ['./prospecto-list.component.css']
})
export class ProspectoListComponent implements OnInit {
  prospectos: Prospecto[];

  constructor(private prospectosController: ProspectoController) {
    this.prospectos = [];
  }

  ngOnInit(): void {
    this.getProspectos();
  }

  getProspectos(): void {
    this.prospectosController.getAllProspectos()
      .subscribe(prospectos => this.prospectos = prospectos);
  }
}