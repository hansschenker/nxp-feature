import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'nxp-<%=dasherize(pluralize(name))%>',
  template: `
    <p>
    <%=dasherize(pluralize(name))%> works!
    </p>
  `,
  styles: [
  ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class <%=classify(pluralize(name))%>Page implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
