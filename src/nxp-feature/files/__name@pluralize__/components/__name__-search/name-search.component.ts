import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: '<%=dasherize(name)%>-search',
  template: `
    <p>
    <%=dasherize(name)%>-search works!
    </p>
  `,
  styles: [
  ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class <%=classify(name)%>SearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
