import { Component, ElementRef, HostListener, Inject, ViewChild } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.less'
})
export class CalendarComponent {
  @ViewChild('calendar') calendar!: ElementRef<HTMLIFrameElement>;

  SRC_MONTH = 'https://calendar.google.com/calendar/embed?height=810&wkst=1&ctz=Europe%2FRome&showPrint=0&showTitle=0&showTabs=0&showCalendars=0&showTz=0&src=Y2EyZG83MGVzaTdxZmJ0dHRzMHY5b2tpMzhAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%23E4C441';
  SRC_PROGRAM = 'https://calendar.google.com/calendar/embed?height=810&wkst=2&ctz=Europe%2FRome&showPrint=0&showTitle=0&showTabs=0&showCalendars=0&showTz=0&mode=AGENDA&src=Y2EyZG83MGVzaTdxZmJ0dHRzMHY5b2tpMzhAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%23E4C441';

  calendarSrc: SafeResourceUrl;

  window: Window;

  constructor(@Inject(DOCUMENT) private document: Document, private sanitizer: DomSanitizer) {
    this.window = <any>this.document.defaultView;
    const calendarSrc = this.window.innerWidth > this.window.innerHeight ? this.SRC_MONTH : this.SRC_PROGRAM;
    this.calendarSrc = this.sanitizer.bypassSecurityTrustResourceUrl(calendarSrc);
  }

  @HostListener('window:orientationchange')
  onOrientationChange() {
    window.location.reload();
  }
}
