import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: '<%=dasherize(name)%>-form',
  template: `
    <p>
    <%=dasherize(name)%>-form works!
    </p>
  `,
  styles: [
  ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class <%=classify(name)%>FormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
