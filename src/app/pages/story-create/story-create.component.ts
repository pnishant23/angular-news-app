import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DataService } from '../../service/data.service';

@Component({
    standalone: true,
    selector: 'app-story-create',
    templateUrl: './story-create.component.html',
    imports: [FormsModule, CommonModule],
    styleUrls: ['./story-create.component.css']
})
export class StoryCreateComponent {
    story = {
        title: '',
        description: '',
        user: ''
    };

    constructor(private dataService: DataService) { }

    // Method triggered on form submission
    onSubmit() {
        this.dataService.sendData(this.story).subscribe({
            next: (response) => {
                console.log('Data sent successfully:', response);
                // Handle success, e.g., show a success message or redirect
            },
            error: (error) => {
                console.error('There was an error sending the data:', error);
                // Handle error, e.g., show an error message
            }
        });
    }
}
