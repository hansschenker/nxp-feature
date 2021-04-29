import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { <%=classify(pluralize(name))%>Page } from './<%=pluralize(name)%>.page';

const routes: Routes = [{ path: '', component: <%=classify(pluralize(name))%>Page }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class <%=classify(pluralize(name))%>RoutingModule { }
