import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap } from "rxjs/operators";
import * as usuariosActions from "../actions/usuarios.actions";
import { UsuariosService } from '../../services/usuarios.service';
import { of } from "rxjs";


@Injectable()
export class UsuariosEffects {

    constructor(
        private actions$: Actions,
        private usuariosService: UsuariosService,
    ){}

    cargarUsuarios$ = createEffect(
        () => this.actions$.pipe(
            ofType( usuariosActions.cargarUsuarios ),
            mergeMap(
                () => this.usuariosService.getUsers()
                    .pipe(
                        map( users => usuariosActions.cargarUsuariosSuccess({ usuarios: users }) ),
                        catchError( err => of(usuariosActions.cargarUsuariosError({ payload: err })) )
                    )
            )
        )
    );



}