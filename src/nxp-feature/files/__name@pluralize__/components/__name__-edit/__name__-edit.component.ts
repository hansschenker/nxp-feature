import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: '<%=dasherize(name)%>-edit',
  template: `
    <p>
      <%= name %>-edit works!
    </p>
  `,
  styles: [
  ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class <%=classify(name)%>EditComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
