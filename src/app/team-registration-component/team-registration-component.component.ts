import { Component } from '@angular/core';
import { TeamService, Team } from '../team-service/team-service.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-team-registration',
  standalone: true,
  templateUrl: './team-registration-component.component.html',
  styleUrls: ['./team-registration-component.component.scss'],
  imports: [CommonModule, FormsModule]
})
export class TeamRegistrationComponent {
  teamName = '';
  logoFile: File | null = null;

  constructor(private teamService: TeamService) {}

  
  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.logoFile = file;
    }
  }

 
  registerTeam() {
    if (this.teamName.trim() && this.logoFile) {
      const reader = new FileReader();

      reader.onload = () => {
        const base64Image = reader.result as string;

        const newTeam: Team = {
          name: this.teamName,
          logoUrl: base64Image
        };

        this.teamService.addTeam(newTeam);

       
        this.teamName = '';
        this.logoFile = null;
      };

      reader.readAsDataURL(this.logoFile);
    }
  }
}
