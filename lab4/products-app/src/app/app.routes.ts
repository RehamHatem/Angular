import { Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductsPageComponent } from './products-page/products-page.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CartComponent } from './cart/cart.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    {path:'products',component:ProductsPageComponent , canActivate:[authGuard]},
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent},
    {path:'cart',component:CartComponent},
    {path:'product/:id',component:ProductDetailsComponent},
    {path:'**',component:NotFoundComponent}
];
