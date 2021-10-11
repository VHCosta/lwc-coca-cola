import { LightningElement } from 'lwc';

export default class ProductList extends LightningElement {

    products = [
        {
            id: 0,
            name: "Coca Cola",
            price: 0.70,
            imageUrl: "http://cater-choice.com/media/catalog/product/cache/1/image/1500x/9df78eab33525d08d6e5fb8d27136e95/c/l/classiccokecan330ml.png"
        }, 
        {
            id: 1,
            name: "Coca Cola Zero",
            price: 0.72,
            imageUrl: "http://cater-choice.com/media/catalog/product/cache/1/image/1500x/9df78eab33525d08d6e5fb8d27136e95/z/e/zerosugarcocacolacan330ml.png"
        }, 
        {
            id: 2,
            name: "Dr. Pepper",
            price: 0.75,
            imageUrl: "http://cater-choice.com/media/catalog/product/cache/1/image/1500x/9df78eab33525d08d6e5fb8d27136e95/d/r/drpeppercan330ml.png"
        }, 
        {
            id: 3,
            name: "Diet Coke",
            price: 0.78,
            imageUrl: "http://cater-choice.com/media/catalog/product/cache/1/image/1500x/9df78eab33525d08d6e5fb8d27136e95/d/i/dietcokecan330ml.png"
        }, 
        {
            id: 4,
            name: "Fanta",
            price: 1.00,
            imageUrl: "http://cater-choice.com/media/catalog/product/cache/1/image/1500x/9df78eab33525d08d6e5fb8d27136e95/f/a/fantaorangecan330ml.png"
        }, 
    ]; 




}