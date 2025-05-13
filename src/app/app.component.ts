import { Component } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterOutlet } from '@angular/router';
import { LoaderService } from './services/loader-service';
import { LoaderComponent } from "./services/loader/loader.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatProgressSpinnerModule, LoaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  ngOnInit(): void {
    // Ensure the service is used after initialization
  }
  title = 'PKMS_FE';
  // loading$ = this.loaderService.loading$;

  constructor(private loaderService: LoaderService) {}
}
