/*
This is the main configuration for our application module
The imports bring in the components that we're leveraging in this app
*/

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UniversalModule } from 'angular2-universal';
import { AppComponent } from './components/app/app.component'
import { AccountListComponent } from './components/account/account-list/account-list.component';
import { AccountSummaryComponent } from './components/account/account-summary/account-summary.component';
import { AccountDetailComponent } from './components/account/account-detail/account-detail.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FormatAccountNumberPipe } from './components/shared/format-account-number.pipe';
import { AccountActivityComponent } from './components/account/acccount-activity/account-activity.component';
import { AccountService } from './components/shared/account.service';

// The NG module decorator, which is a specific type of function that allows us to attach metadata to our app module
@NgModule({
    bootstrap: [ AppComponent ], // This tells us that we're gonna be launching our app component as our Startup Component
    declarations: [ // This is a list of the components that we're gonna reference inside our module
        AppComponent,
        AccountListComponent,
        AccountDetailComponent,
        AccountSummaryComponent,
        HeaderComponent,
        FormatAccountNumberPipe,
        AccountActivityComponent
    ],
    imports: [
        UniversalModule, // Must be first import. This automatically imports BrowserModule, HttpModule, and JsonpModule too.
        RouterModule.forRoot([ // Path Configuration that set up the Angular Routing
            { path: '', redirectTo: 'account', pathMatch: 'full' },
            { path: 'account', component: AccountListComponent },
            //This is a parameterised route, which can be accessed by AccountDetailComponent
            { path: 'detail/:id', component: AccountDetailComponent },
            { path: '**', redirectTo: 'account' }
        ])
    ],
    // This provide the ability to inject Services in the application
    providers: [AccountService]
})
export class AppModule {
}
