import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [{
    name: "Trunks",
    power: 10
  }]

  @Output()
  public onDelete = new EventEmitter();

  onDeleteCharacter(id: string): void {
    //TODO: Emitir el ID del personaje
    this.onDelete.emit( id)
  }



}
