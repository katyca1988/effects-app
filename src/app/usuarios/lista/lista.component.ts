import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  usuarios: Usuario[] = [];
  
  constructor(
    public usuarioService: UsuariosService
  ) { }

  ngOnInit(){
    this.usuarioService.gerUsers()
      .subscribe( users => {
        console.log(users);
        this.usuarios = users;
        
      });
  }



}