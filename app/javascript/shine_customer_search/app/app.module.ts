import { NgModule         } from '@angular/core';
import { BrowserModule    } from '@angular/platform-browser';
import { HttpModule       } from '@angular/http';
import { FormsModule      } from '@angular/forms';

import { AppComponent          } from './app.component';
import { CustomerSearchService } from "./customer-search.service";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    declarations: [ AppComponent ],
    providers: [ CustomerSearchService ],
    bootstrap: [ AppComponent ]
})

export class AppModule {}