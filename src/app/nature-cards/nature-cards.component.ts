import { Component } from '@angular/core';

@Component({
  selector: 'app-nature-cards',
  templateUrl: './nature-cards.component.html',
  styleUrls: ['./nature-cards.component.css']
})
export class NatureCardsComponent {
  cards = [
    {
      title: 'Rainforest',
      image: 'https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcS3_b8peo7sJXVdjBxC85D4P_QTQSmHyHHtO4QS_gUQ868-uhwoiQ2zuPBbXObZfF5H',
      description: 'filler text',
      expanded: false
    },
    {
      title: 'Tundra',
      image: 'https://upload.wikimedia.org/wikipedia/commons/1/17/Greenland_scoresby-sydkapp2_hg.jpg',
      description: 'filler text',
      expanded: false
    },
    {
      title: 'Desert',
      image: 'https://cdn.britannica.com/10/152310-050-5A09D74A/Sand-dunes-Sahara-Morocco-Merzouga.jpg',
      description: 'filler text',
      expanded: false
    },
    {
      title: 'Grassland',
      image: 'https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcQ2-N-iwQF1CQiAo_HqaThBKLzBoEiQCW6N9zqB0oUxaclsyg5E_g4xU6FlJ-H5TeAR',
      description: 'filler text',
      expanded: false
    },
    {
      title: 'Tiaga',
      image: 'https://cdn.britannica.com/50/6650-050-E268AC16/coniferous-forest-spruce-trees-forests-boreal-Northern.jpg',
      description: 'filler text',
      expanded: false
    }
  ];

  

  toggleCard(card: any) {
    card.expanded = !card.expanded;
  }
}
