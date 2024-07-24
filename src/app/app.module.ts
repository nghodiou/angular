import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InscriptionComponent } from './Compenents/inscription/inscription.component';
import { ConnexionComponent } from './Compenents/connexion/connexion.component';
import { MotsPasseOblierComponent } from './Compenents/mots-passe-oblier/mots-passe-oblier.component';
import { IdentifierComponent } from './Compenents/identifier/identifier.component';
import { FormulaireComponent } from './Compenents/formulaire/formulaire.component';
import { CouleurComponent } from './Compenents/couleur/couleur.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FormsModule } from '@angular/forms';
 
@NgModule({
  declarations: [
    AppComponent,
    InscriptionComponent,
    ConnexionComponent,
    MotsPasseOblierComponent,
    IdentifierComponent,
    FormulaireComponent,
    CouleurComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
