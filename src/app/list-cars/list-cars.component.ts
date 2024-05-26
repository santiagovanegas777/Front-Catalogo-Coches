
import { Component } from '@angular/core';
import { RequestService } from '../services/request.service';
import { CharacterInterface, CharacterResponseInterface } from '../models/character.model';

@Component({
  selector: 'app-list-cars',
  templateUrl: './list-cars.component.html',
  styleUrls: ['./list-cars.component.scss']
})
export class ListCarsComponent {
  characterList: CharacterInterface[] = [];

  constructor(private requestService: RequestService) {

  }

  ngOnInit() {
    this.getCharacters();
  }
  private getCharacters() {
    this.requestService.getCharacters().subscribe((data: CharacterResponseInterface) => {
      console.log(data.coches)
      this.characterList =data.coches;
    })
  }

  // private getCharacters() {
  //   this.requestService.getCharacters().subscribe((data: any) => {
  //     console.log(data);
  //   })
  // }

}
