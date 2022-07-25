import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { ToolbarModule } from 'primeng/toolbar';
import { SplitButtonModule } from 'primeng/splitbutton';
import { MenuModule } from 'primeng/menu';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [NavbarComponent, FooterComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MenubarModule,
    ButtonModule,
    AvatarModule,
    ButtonModule,
    ToolbarModule,
    AvatarModule,
    SplitButtonModule,
    MenuModule,
  ],
  exports: [NavbarComponent, RouterModule, FooterComponent],
})
export class SharedModule {}
