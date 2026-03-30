import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Rocket, Cpu, Layers, Github, Sun, Moon, Plus, Minus, RefreshCw, Smartphone } from 'lucide-angular';
import { ThemeService } from './theme.service';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  themeService = inject(ThemeService);
  counterService = inject(CounterService);
  
  readonly Rocket = Rocket;
  readonly Cpu = Cpu;
  readonly Layers = Layers;
  readonly Github = Github;
  readonly Sun = Sun;
  readonly Moon = Moon;
  readonly Plus = Plus;
  readonly Minus = Minus;
  readonly RefreshCw = RefreshCw;
  readonly Smartphone = Smartphone;

  features = [
    {
      title: 'Angular 21+ Signal Store',
      description: 'Zoneless re-activity with Signals for better performance and smaller bundles.',
      icon: Cpu
    },
    {
      title: 'Tailwind CSS 4',
      description: 'Modern and fast styling with the latest Tailwind CSS engine.',
      icon: Layers
    },
    {
      title: 'Hydration Ready',
      description: 'Full SSR and Hydration support for lightning fast first paint.',
      icon: Rocket
    },
    {
      title: 'Responsive Design',
      description: 'Mobile-first components that look great on any screen size.',
      icon: Smartphone
    }
  ];

  toggleTheme(event: MouseEvent) {
    this.themeService.toggleTheme(event);
  }
}
