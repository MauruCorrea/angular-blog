import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake';
import { catTalk } from '../../data/catTalk';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  // @Input()
  photoCover: string = '';

  // @Input()
  contentTitle: string = '';

  // @Input()
  contentDescription: string = '';

  private id: string | null = '0';
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe((value) => (this.id = value.get('id')));
    this.setValuesToComponent(this.id);
  }

  setValuesToComponent(id: string | null) {
    const result = dataFake.filter((article) => article.id == id)[0];
    this.contentTitle = result.title;
    this.contentDescription = this.descriptionGenerator();
    this.photoCover = result.photoCover;
  }

  descriptionGenerator(): string {
    // Gera um número aleatório entre 4 e 10
    const numCatTalks = Math.floor(Math.random() * 16) + 5;

    const selectedCatTalks: string[] = [];

    for (let i = 0; i < numCatTalks; i++) {
      selectedCatTalks.push(
        catTalk[Math.floor(Math.random() * catTalk.length)]
      );
    }

    return selectedCatTalks.join(' ');
  }
}
