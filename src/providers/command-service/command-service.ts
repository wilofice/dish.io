import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Command } from '../../models/command/command.model';

/*
  Generated class for the CommandServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CommandServiceProvider {

  private commandListRef = this.db.list<Command>('commandes');
  constructor(public db: AngularFireDatabase) {
    //console.log('Hello CommandServiceProvider Provider');
  }


  query(key: string, keyWord: string){
    
    this.commandListRef = this.db.list<Command>('commandes', ref => ref.orderByChild(keyWord).equalTo(key));
    return this.commandListRef;
  }

  add(command: Command){
    this.commandListRef.push(command);
  }

  update(command: Command){
    this.commandListRef.update(command.key, command);
  }

  delete(command: Command){
    this.commandListRef.remove(command.key);
  }
}
