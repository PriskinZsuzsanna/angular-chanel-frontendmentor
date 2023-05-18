import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ImageContainerComponent } from './components/image-container/image-container.component';
import { TextContainerComponent } from './components/text-container/text-container.component';
import { TextComponent } from './components/text/text.component';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageContainerComponent,
    TextContainerComponent,
    TextComponent,
    ButtonComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
