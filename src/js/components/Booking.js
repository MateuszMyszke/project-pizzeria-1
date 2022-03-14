import {select, templates} from '../settings.js';
import utils from '../utils.js';
//import AmountWidget from './AmountWidget.js';


class Booking {
  constructor(element){
    const thisBooking = this;

   
    
    
    thisBooking.render(element);
    thisBooking.initWidgets();

    //console.log('new Cart', thisCart);
  }

  

  render(element){
    const thisBooking = this;

    thisBooking.dom = {};
    thisBooking.dom.wrapper = element;
    thisBooking.dom.hoursAmount = element.querySelector(select.booking.hoursAmount);
    thisBooking.dom.peopleAmount = element.querySelector(select.booking.peopleAmount);
    
    /* generate HTML based on template */
    const generatedHTML = templates.bookingWidget(element);
    /* create element using utils.createElementFromHTML */
    thisBooking.element = utils.createDOMFromHTML(generatedHTML);
    /* find menu container */
    const bookingContainer = document.querySelector(select.containerOf.booking);
    /* add element to menu */
    bookingContainer.appendChild(thisBooking.element).innerHTML;
    
  }

  initWidgets(){
    //const thisBooking = this;
    //thisBooking.amountWidget = new AmountWidget(thisBooking.dom.peopleAmount);
    //thisBooking.peopleAmount = new AmountWidget(select.widgets.amount);
    //thisBooking.hoursAmount = new AmountWidget();

    //thisBooking.dom.hoursAmount.addEventListener('updated', function(){
    //thisBooking.amount = thisBooking.amountWidget.value;
      
      
    //console.log(thisCartProduct.dom.price);
    // });
  }
}


export default Booking;