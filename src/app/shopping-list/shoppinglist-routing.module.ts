import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';

const routes: Routes = [
  {
    path: '',
    component: ShoppingListComponent,
    children: [{ path: 'shopping-edit', component: ShoppingEditComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [],
})
export class ShoppingListRoutingModule {}
