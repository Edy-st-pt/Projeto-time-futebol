import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamService, Team } from '../team-service/team-service.service';

@Component({
  selector: 'app-team-list',
  standalone: true,
  templateUrl: './team-list-component.component.html',
  styleUrls: ['./team-list-component.component.scss'],
  imports: [CommonModule]
})
export class TeamListComponent implements OnInit {
  teams: Team[] = [];

  constructor(private teamService: TeamService) {}

  ngOnInit(): void {
    this.teams = this.teamService.getTeams();
  }
}