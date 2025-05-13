// src/app/components/loader/loader.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoaderService } from '../loader-service';


@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [CommonModule, MatProgressSpinnerModule],
  template: `
    <div class="loader-overlay" *ngIf="loader.isLoading$ | async">
      <mat-progress-spinner mode="indeterminate"></mat-progress-spinner>
    </div>
  `,
  styles: [`
    .loader-overlay {
      position: fixed;
      top: 0; left: 0;
      width: 100%; height: 100%;
      background: rgba(255, 255, 255, 0.6);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
    }
  `]
})
export class LoaderComponent {
  constructor(public loader: LoaderService) {}
}
