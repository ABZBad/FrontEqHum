import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Prospecto } from '../../models/Prospecto.model';
import { ProspectoController } from '../../controllers/Prospecto.controller';

@Component({
  selector: 'app-prospecto-detail',
  templateUrl: './prospecto-detail.component.html',
  styleUrls: ['./prospecto-detail.component.css']
})
export class ProspectoDetailComponent implements OnInit {
  prospecto: Prospecto;

  constructor(
    private route: ActivatedRoute,
    private prospectoController: ProspectoController,
    private location: Location
  ) {
    this.prospecto = {} as Prospecto;
  }

  ngOnInit(): void {
    this.getProspecto();
  }

  getProspecto(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    
    if (idParam !== null) {
      const id = +idParam;
      
      if (!isNaN(id)) {
        this.prospectoController.getProspectoById(id)
          .subscribe(prospecto => this.prospecto = prospecto);
      } else {
        // Manejo del caso en el que el parámetro 'id' no es un número válido
      }
    } else {
      // Manejo del caso en el que no se proporciona un ID
    }
  }

  goBack(): void {
    this.location.back();
  }
}