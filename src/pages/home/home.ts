import { Component } from '@angular/core';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  name1= '';
  name2= '';

  get score(){
    const name1 = this.name1.trim().toLowerCase();
    const name2 = this.name2.trim().toLowerCase();
    if( (name1 == 'bogdan' && name2 =='mihaela') || 
      ( name2 == 'bogdan' && name1 =='mihaela' )
    ){
      return 100;
    } else {
      const letters = name1 +name2;
      let sum =0;
      for( let i=0; i< letters.length;i++){
        sum += letters.charCodeAt(i);
      }
      return sum % 101;
      }
  }
}
