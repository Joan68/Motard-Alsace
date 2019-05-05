import { Component, OnInit } from '@angular/core';

import { Balade } from 'src/app/balade';
import { BaladeService } from 'src/app/balade.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  balades: Balade[] = [];
  error = '';
  success = '';

  balade = new Balade('', '','');

  constructor(private baladeService: BaladeService) {
  }

  ngOnInit() {
    this.getBalades();
  }

  getBalades = (): void => {
    this.baladeService.getAll().subscribe(
      (res: Balade[]) => {
        this.balades = res;
      },
      (err) => {
        this.error = err;
      }
    );
  }

  addBalade = (f) => {
    this.resetErrors();

    this.baladeService.store(this.balade)
      .subscribe(
        (res: Balade[]) => {
          // Update the list of balades
          this.balades = res;

          // Inform the user
          this.success = 'Created successfully';

          // Reset the form
          f.reset();
        },
        (err) => this.error = err
      );
  }

  updateBalade(NOM_BALADE, DATE_DEPART, LIEU_RDV, ID_BALADE) {
    this.resetErrors();

    this.baladeService.update({ NOM_BALADE: NOM_BALADE.value, DATE_DEPART: DATE_DEPART.value, LIEU_RDV: LIEU_RDV.value, ID_BALADE: +ID_BALADE })
      .subscribe(
        (res) => {
          this.balades    = res;
          this.success = 'Updated successfully';
        },
        (err) => this.error = err
      );
  }

  deleteBalade(ID_BALADE) {
    this.resetErrors();

    this.baladeService.delete(+ID_BALADE)
      .subscribe(
        (res: Balade[]) => {
          this.balades = res;
          this.success = 'Deleted successfully';
        },
        (err) => this.error = err
      );
  }

  private resetErrors(){
    this.success = '';
    this.error   = '';
  }

}
