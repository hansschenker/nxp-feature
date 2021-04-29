import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: '<%=dasherize(name)%>-list',
  template: `
    <p>
    <%=dasherize(name)%>-list works!
    </p>
  `,
  styles: [
  ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class <%=classify(name)%>ListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
