import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router'
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { FooterComponent } from './footer/footer.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductItemComponent } from './products/product-list/product-item.component';
import { ValidateService } from '../services/validate.service';
import { ReactiveFormsModule } from '@angular/forms';
import { FlashMessagesModule } from "angular2-flash-messages";
import {AuthService} from "../services/auth.service";
import { CanvasDirective } from '../directives/canvas.directive';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './products/crud/create/create.component';
import { UpdateComponent } from './products/crud/update/update.component';
import { DeleteComponent } from './products/crud/delete/delete.component';
import { SearchComponent } from './products/crud/search/search.component';
import { ListComponent } from './products/crud/list/list.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import {AuthGuard} from "../services/guards/auth.guards";
import {ProductService} from "../services/product.service/product.service";
import { MessagsComponent } from './messags/messags.component';
import {SocketService} from "../services/socket.service";
import { ShopsMapComponent } from './shops-map/shops-map.component';
import { AgmCoreModule } from 'angular2-google-maps/core';
import {GooglMapService} from "../services/google-maps/google-map.service";
import { StatisticsComponent } from './statistics/statistics.component';
import {ChartsModule} from "ng2-charts";
import { AsideComponent } from './aside/aside.component';


const productsRoutes :Routes = [
  {path: '',component:ProductListComponent},
  {path: 'create',component:CreateComponent},

];
const appRoutes :Routes = [
  {path: '', component:LoginPageComponent},
  {path: 'home',component:HomeComponent,children: productsRoutes,canActivate:[AuthGuard]},
  {path: 'profile',component:ProfileComponent,canActivate:[AuthGuard]},
  {path: 'shops-map',component:ShopsMapComponent},
  {path: 'products/statistics',component:StatisticsComponent},
  {path: 'home/products',component:ProductListComponent},
  {path: 'products/create',component:CreateComponent},
  {path: 'products/update/:serial',component:UpdateComponent},
  {path: 'products/search',component:SearchComponent},
  {path: 'products/delete/:serial',component:DeleteComponent},
  {path: 'products/list',component:ListComponent}


];






@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    LoginRegisterComponent,
    FooterComponent,
    ProductListComponent,
    ProductItemComponent,
    CanvasDirective,
    HomeComponent,
    CreateComponent,
    UpdateComponent,
    DeleteComponent,
    SearchComponent,
    ListComponent,
    LoginPageComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    MessagsComponent,
    ShopsMapComponent,
    StatisticsComponent,
    AsideComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    FlashMessagesModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCbtzigsfExbOQQ2_Tdd4GeQhvdHBoOgGk'
    }),
    ChartsModule

  ],
  providers: [ValidateService,AuthService,AuthGuard,ProductService,SocketService,GooglMapService],
  bootstrap: [AppComponent]
})
export class AppModule { }
