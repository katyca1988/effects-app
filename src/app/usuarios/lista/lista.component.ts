import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';
import { Usuario } from '../../models/usuario.model';
import { AppState } from '../../store/app.reducer';
import { Store } from '@ngrx/store';
import * as actions from '../../../app/store/actions';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  usuarios: Usuario[] = [];
  loading: boolean = false;
  error: any;
  
  constructor(
    private store: Store<AppState>,
  ) { }

  ngOnInit(){
    this.store.select('usuarios').subscribe( ({ users, loading, error }) => {
      this.usuarios = users;
      this.loading = loading;
      this.error = error;
    });
    this.store.dispatch(actions.cargarUsuarios());
    // this.usuarioService.gerUsers()
    //   .subscribe( users => {
    //     console.log(users);
    //     this.usuarios = users;
        
    //   });

  }



}
