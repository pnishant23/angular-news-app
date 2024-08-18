import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-story-list',
    standalone: true,
    templateUrl: './story-list.component.html',
    styleUrls: ['./story-list-component.css']
})
export class StoryListComponent implements OnInit {
    stories = [
        {
            title: 'Market Update',
            description: 'The stock market saw a sharp rise today.',
            user: 'Analyst1'
        },
        {
            title: 'Oil Prices Surge',
            description: 'Crude oil prices hit a new high.',
            user: 'Analyst2'
        }
    ];

    constructor() { }

    ngOnInit(): void { }
}
