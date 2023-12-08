import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { DividerModule } from 'primeng/divider';

type Vendor = {
  firstname: string,
  lastname: string,
  location: string,
  locationId: string,
  desc: string
}

@Component({
  selector: 'app-find-vendors',
  standalone: true,
  imports: [CommonModule, DividerModule],
  templateUrl: './find-vendors.component.html',
  styleUrls: ['./find-vendors.component.scss']
})
export class FindVendorsComponent {

  /* Load in all the vendors from the firestore database. They are in
   * the uploadedVendors collection. */
  private vendorsCollectionRef = collection(this.firestore, 'uploadedVendors');

  vendorList: Vendor[] = [];

  locationsToVendors: { [key: string]: Vendor[] } = {};

  constructor(
    private firestore: Firestore
  ) { 
    this.fetchVendorList(); // Automatically fetch the data when the service is initialized
  }

  private fetchVendorList(): void {
    collectionData(this.vendorsCollectionRef, {idField: 'id'})
    .subscribe(vendors => {
      this.vendorList = vendors as Vendor[];
      this.vendorList.forEach(vendor => {
        if (this.locationsToVendors[vendor.location]) {
          this.locationsToVendors[vendor.location].push(vendor);
        } else {
          this.locationsToVendors[vendor.location] = [vendor];
        }
      });
      /* Sort the vendors by their locationId. */
      Object.keys(this.locationsToVendors).forEach(key => {
        this.locationsToVendors[key].sort((a, b) => a.locationId.localeCompare(b.locationId));
      });
    });
  }
}
