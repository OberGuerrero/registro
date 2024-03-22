import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  styles: [`
    body {
      background-color: lightblue;
    }

    h1 {
      color: red;
    }
  `]
})
export class AppComponent {
  title = 'registro';
}
export class Peticion {
  constructor(
    public cli_nombre: string,
    public cli_apellido: string,
    public cli_RUT: string,
    public cli_correo: string,
    public cli_peticion: string,
    public cli_desc_peticion: string,
    public id?: number,
    //public fechaRegistro?: Date,
    //public documentos?: File[],
    //public estado?: string
  ) {}
}
