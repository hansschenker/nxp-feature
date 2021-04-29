import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: '<%=dasherize(name)%>-filter',
  template: `
    <p>
    <%=dasherize(name)%>-filter works!
    </p>
  `,
  styles: [
  ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class <%=classify(name)%>FilterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
