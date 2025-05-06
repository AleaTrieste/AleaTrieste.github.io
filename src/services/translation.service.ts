import { Injectable, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TranslationService implements OnInit {
  private translations: any = {};
  private currentLang: string | undefined;

  constructor(private http: HttpClient, @Inject(DOCUMENT) private document: Document) {
    this.setLanguageDefault();
  }

  public ngOnInit(): void {
    this.setLanguageDefault();
  }

  setLanguageDefault(): void {
    this.setLanguage(navigator.language.startsWith('it') ? 'it' : 'en');  
  }

  setLanguage(lang: string): void {
    if (this.document) {
      this.document.querySelector('html')?.setAttribute('lang', lang);
    }
    if (lang === undefined) {
      lang = 'en';
    }
    if (this.currentLang !== lang) {
      this.currentLang = lang;
      this.loadTranslations();
    }
  }

  private loadTranslations() {
    this.http.get(`/assets/i18n/${this.currentLang}.json`).subscribe(
      (translations) => {
        this.translations = translations;
      },
      (error) => {
        console.error("Errore nel caricamento delle traduzioni", error);
      }
    );
  }

  public get(key: string): any {
    return this.translations[key];
  }

  translate(key: string): string {
    return this.translations[key] || key;
  }
}
