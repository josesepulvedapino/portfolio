import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';

  selectedItem: string = 'Sobre mi';
  menuItems: string[] = ['Sobre mi', 'Proyectos', 'Contacto'];
  selectedItemIndex: number = 0;
  
  selectItem(selectedItem : string) {
    this.selectedItem = selectedItem;
  }

  onMouseWheel(event: WheelEvent) {
    if (event.deltaY > 0) {
      // Desplazamiento hacia abajo
      this.selectNextItem();
    } else {
      // Desplazamiento hacia arriba
      this.selectPreviousItem();
    }
    // Evita el desplazamiento predeterminado de la página
    event.preventDefault();
  }
  
  selectNextItem() {
    this.selectedItemIndex = (this.selectedItemIndex + 1) % this.menuItems.length;
    this.selectedItem = this.menuItems[this.selectedItemIndex];
  }
  
  selectPreviousItem() {
    this.selectedItemIndex = (this.selectedItemIndex - 1 + this.menuItems.length) % this.menuItems.length;
    this.selectedItem = this.menuItems[this.selectedItemIndex];
  }

}
