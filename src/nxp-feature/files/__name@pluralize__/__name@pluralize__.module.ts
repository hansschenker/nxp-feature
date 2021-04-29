import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



// <%=classify(pluralize(name))%>
@NgModule({
  declarations: [
    <%=pluralize(name)%>Page
  ],
  imports: [
    CommonModule,
    <%=pluralize(name)%>RoutingModule
  ],
  exports: [
    <%=pluralize(name)%>Page
  ]
})
export class <%=classify(pluralize(name))%>Module { }
