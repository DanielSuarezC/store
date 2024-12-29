import { CommonModule } from '@angular/common';
import { Component, Input, Output, output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Product } from '../../../shared/models/product.model';
import { TimeAgoPipe } from '@shared/pipes/time-ago.pipe';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, TimeAgoPipe],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  // img = 'https://picsum.photos/640/640?r=' + Math.random();
  @Input({required: true}) product!: Product;

  @Output() addToCart = new EventEmitter();

  addToCardHandler(){
    console.log('Add to cart');
    this.addToCart.emit(this.product);
  }
}
