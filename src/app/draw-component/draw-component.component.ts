import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamService, Team } from '../team-service/team-service.service';

@Component({
  selector: 'app-draw',
  standalone: true,
  templateUrl: './draw-component.component.html',
  styleUrls: ['./draw-component.component.scss'],
  imports: [CommonModule]
})
export class DrawComponent {
  pairs: { teamA: Team; teamB: Team | null }[] = [];

  constructor(private teamService: TeamService) {}

  drawMatches() {
    const teamsCopy = [...this.teamService.getTeams()];
    this.shuffleArray(teamsCopy);
    this.pairs = [];

    for (let i = 0; i < teamsCopy.length; i += 2) {
      const teamA = teamsCopy[i];
      const teamB = teamsCopy[i + 1] || null;
      this.pairs.push({ teamA, teamB });
    }
  }

  private shuffleArray(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
}