import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';
import { CommonModule } from '@angular/common';

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

@Component({
    selector: 'app-homepage',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './homepage.component.html',
    styleUrls: ['./homepage.component.css']
})

export class HomepageComponent implements OnInit {
    title = 'ng-client';
    posts: Post[] = [];
    errorMessage!: string;

    constructor(private data_service: DataService) { }

    ngOnInit() {
        this.data_service.getAllPosts().subscribe({
            next: (posts) => {
                this.posts = posts;
                console.log(this.posts);
            },
            error: (error) => {
                this.errorMessage = error;
            },
        });
    }
}
