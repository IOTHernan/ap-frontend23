import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { BannerComponent } from './components/banner/banner.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { SkillsComponent } from './components/skills/skills.component';
import { SoftskillsComponent } from './components/softskills/softskills.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LoginComponent } from './components/login/login.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { InterceptorService } from './services/interceptor.service';
import { AcercadeComponent } from './components/acercade/acercade.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PortfolioService } from './services/portfolio.service';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    BannerComponent,
    NavbarComponent,
    ExperienciaComponent,
    EducacionComponent,
    PortfolioComponent,
    SkillsComponent,
    SoftskillsComponent,
    ProyectosComponent,
    PageNotFoundComponent,
    LoginComponent,
    AcercadeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	ReactiveFormsModule,
    HttpClientModule,
	FormsModule,
    NgCircleProgressModule.forRoot({})
  ],
  providers: [PortfolioService, { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true}  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
