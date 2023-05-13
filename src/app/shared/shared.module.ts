import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import { FooterContainerComponent } from './components/footer-container/footer-container.component';
import { RouterModule } from '@angular/router';
import { ExplainComponent } from './components/explain/explain.component';
import { CardsComponent } from './components/cards/cards.component';
import { FaqComponent } from './components/faq/faq.component';
import { ContactComponent } from './components/contact/contact.component';
import { FormModule } from './components/contact/components/form/form.module';

@NgModule({
  declarations: [
    NavigationComponent,
    FooterComponent,
    FooterContainerComponent,
    ExplainComponent,
    CardsComponent,
    FaqComponent,
    ContactComponent,
  ],
  imports: [CommonModule, RouterModule, FormModule],
  exports: [
    NavigationComponent,
    FooterComponent,
    FooterContainerComponent,
    ExplainComponent,
    CardsComponent,
    FaqComponent,
    ContactComponent,
  ],
})
export class SharedModule {}
