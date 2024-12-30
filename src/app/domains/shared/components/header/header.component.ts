import { Component, inject, Input, signal, SimpleChange, SimpleChanges } from '@angular/core';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  hideSideMenu = signal(true);

  // @Input({required: true}) cart: Product[] = [];
  // total = signal(0);
  private cartService = inject(CartService);
  cart = this.cartService.cart; //signal<Product[]>([]);
  total = this.cartService.total; //signal(0);


  toogleSideMenu(){
    this.hideSideMenu.update(prevState => !prevState);  
  }

  // ngOnChanges(changes: SimpleChanges){
  //   const cart = changes['cart'];
  //   if(cart){
  //     this.total.set(this.gettotal());
  //   }
  // }  

  // gettotal(){
  //   return this.cart.reduce((acc, product) => acc + product.price, 0);
  // }

}
