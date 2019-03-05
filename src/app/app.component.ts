import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'song-shuffler';
  items = ['Song 1','Song 2','Song 3','Song 4','Song 5','Song 6','Song 7','Song 8','Song 9','Song 10']

  constructor() {}
  ngOnInit() {}

  public shuffle(event) {
    var l = this.items.length, current, index;
    // We use the back of the array to store the shuffled elements, and the front of the array to store the remaining elements
    while (l) {

      // pick a random remaining element (from the front) and place in its new location (in the back).
      index = Math.floor(Math.random() * l--);

      // And swap it with the current element.
      current = this.items[l];
      this.items[l] = this.items[index];
      this.items[index] = current;
    }
  }
  public ngOnDestroy() {}
}
