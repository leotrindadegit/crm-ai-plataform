import { DOCUMENT } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent {
  private readonly document = inject(DOCUMENT);
  protected readonly isRailExpanded = signal(false);
  protected readonly theme = signal<'light' | 'dark'>('light');

  constructor() {
    const storedTheme = this.getStoredTheme();
    const initialTheme = storedTheme === 'dark' ? 'dark' : 'light';
    this.theme.set(initialTheme);
    this.document.body.classList.toggle('dark-theme', initialTheme === 'dark');
  }

  protected toggleRail(): void {
    this.isRailExpanded.update((value) => !value);
  }

  protected toggleTheme(): void {
    const nextTheme = this.theme() === 'dark' ? 'light' : 'dark';
    this.theme.set(nextTheme);
    this.document.body.classList.toggle('dark-theme', nextTheme === 'dark');
    this.storeTheme(nextTheme);
  }

  private getStoredTheme(): string | null {
    try {
      return localStorage.getItem('crm-theme');
    } catch {
      return null;
    }
  }

  private storeTheme(theme: 'light' | 'dark'): void {
    try {
      localStorage.setItem('crm-theme', theme);
    } catch {
      // Ignore storage errors (private mode/restricted contexts)
    }
  }
}
