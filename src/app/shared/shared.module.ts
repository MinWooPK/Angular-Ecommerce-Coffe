import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import { FooterContainerComponent } from './components/footer-container/footer-container.component';
import { RouterModule } from '@angular/router';
import { ExplainComponent } from './components/explain/explain.component';
import { CardsComponent } from './components/cards/cards.component';
import { FaqComponent } from './components/faq/faq.component';

@NgModule({
  declarations: [
    NavigationComponent,
    FooterComponent,
    FooterContainerComponent,
    ExplainComponent,
    CardsComponent,
    FaqComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    NavigationComponent,
    FooterComponent,
    FooterContainerComponent,
    ExplainComponent,
    CardsComponent,
    FaqComponent,
  ],
})
export class SharedModule {}
