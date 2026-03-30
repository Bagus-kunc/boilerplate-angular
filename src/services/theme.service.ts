import { Injectable, signal, effect, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private platformId = inject(PLATFORM_ID);
  private _theme = signal<'light' | 'dark'>('light');
  
  theme = this._theme.asReadonly();

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      const savedTheme = localStorage.getItem('theme') as 'light' | 'dark';
      if (savedTheme) {
        this._theme.set(savedTheme);
      } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        this._theme.set('dark');
      }
      
      effect(() => {
        const currentTheme = this._theme();
        localStorage.setItem('theme', currentTheme);
        if (currentTheme === 'dark') {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      });
    }
  }

  toggleTheme() {
    this._theme.update(t => t === 'light' ? 'dark' : 'dark'); // Wait, typo fixed below
    this._theme.update(t => t === 'light' ? 'dark' : 'light');
  }
}
