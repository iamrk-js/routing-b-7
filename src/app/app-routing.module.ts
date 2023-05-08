import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboradComponent } from "./shared/component/dashborad/dashborad.component";
import { ProductsComponent } from "./shared/component/products/products.component";
import { UsersComponent } from "./shared/component/users/users.component";
import { UserComponent } from "./shared/component/users/user/user.component";
import { ProductComponent } from "./shared/component/products/product/product.component";
import { PageNotFoundComponent } from "./shared/component/page-not-found/page-not-found.component";


const route: Routes = [
    { path: '', component: DashboradComponent }, // localhost:4200/
    { path: 'users', component: UsersComponent }, // localhost:4200/users
    { path: 'users/:userId', component: UserComponent },
    // { path: 'users/2', component: UserComponent },
    // { path: 'users/3', component: UserComponent },
    { path: 'products', component: ProductsComponent }, // localhost:4200/products
    { path: 'products/:productId', component: ProductComponent }, // localhost:4200/products
    { path: 'page-not-found', component: PageNotFoundComponent },
    { path: "**", redirectTo: 'page-not-found' }, // ** >> any route
]


@NgModule({
    imports: [
        RouterModule.forRoot(route)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}