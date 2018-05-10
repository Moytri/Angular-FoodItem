import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { AppComponent }   from './app.component';

import { HomeComponent }        from './home/home.component';
import { AboutComponent }        from './about/about.component';
import { routing }        from './app.routing';
import { DetailComponent } from './detail/detail.component';

@NgModule({
    imports: [BrowserModule, FormsModule, routing],
    declarations: [AppComponent, 
        HomeComponent, AboutComponent, DetailComponent ],
    bootstrap: [AppComponent],
})
export class AppModule { }
