import { Component } from '@angular/core';
import { Firestore, collection, collectionData, orderBy, query, where } from '@angular/fire/firestore';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  vendorSpacesRef = collection(this.firestore, 'vendorSpaces');

  loading = true;
  availableGymSpaces: any[] = [];
  availableLargeCafeSpaces: any[] = [];
  availableSmallCafeSpaces: any[] = [];

  constructor(
    private firestore: Firestore
  ) {
    let availableSpacesQuery = query(this.vendorSpacesRef, 
      where('vendor', '==', null));
    let availableSpaces$ = collectionData(
      availableSpacesQuery,
      {idField: 'id'} // This allows us to access the document id
    );
    availableSpaces$.subscribe( spaces => {
      for (let space of spaces) {
        switch (space['location']) {
          case 'GYM':
            this.availableGymSpaces.push(space);
            break;
          case 'LARGE CAFE':
            this.availableLargeCafeSpaces.push(space);
            break;
          case 'SMALL CAFE':
            this.availableSmallCafeSpaces.push(space);
            break;
          default:
            console.log('Unknown space location: ' + space['location'], space)
        }
      }
      this.loading = false;
    });
  }

  openGymMap() {
    let gymMapFile = '/assets/floor-maps/gym.pdf';
    window.open(gymMapFile, '_blank');
  }

  openLargeCafeMap() {
    let largeCafeMapFile = '/assets/floor-maps/large-cafe.pdf';
    window.open(largeCafeMapFile, '_blank');
  }

  openSmallCafeMap() {
    let smallCafeMapFile = '/assets/floor-maps/small-cafe.pdf';
    window.open(smallCafeMapFile, '_blank');
  }

}
