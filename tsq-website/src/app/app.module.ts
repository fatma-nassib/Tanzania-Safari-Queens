import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore }    from '@angular/fire/firestore';
import { provideAuth, getAuth }              from '@angular/fire/auth';
import { provideStorage, getStorage }        from '@angular/fire/storage';

import { AppRoutingModule }       from './app-routing.module';
import { AppComponent }           from './app.component';
import { SharedModule }           from './shared/shared.module';
import { HttpErrorInterceptor }   from './core/interceptors/http-error.interceptor';
import { LoadingInterceptor }     from './core/interceptors/loading.interceptor';
import { environment }            from '../environments/environment';

@NgModule({
  declarations:[AppComponent],
  imports:[
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
  ],
  providers:[
    provideFirebaseApp(()=>initializeApp(environment.firebase)),
    provideFirestore(()=>getFirestore()),
    provideAuth(()=>getAuth()),
    provideStorage(()=>getStorage()),
    { provide:HTTP_INTERCEPTORS, useClass:HttpErrorInterceptor, multi:true },
    { provide:HTTP_INTERCEPTORS, useClass:LoadingInterceptor,   multi:true },
  ],
  bootstrap:[AppComponent]
})
export class AppModule {}
