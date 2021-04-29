import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: '<%=dasherize(name)%>-item',
  template: `
    <p>
    <%=dasherize(name)%>-item works!
    </p>
  `,
  styles: [
  ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class <%=classify(name)%>ItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
