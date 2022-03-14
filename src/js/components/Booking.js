import {select, templates} from '../settings.js';
import utils from '../utils.js';
import AmountWidget from './AmountWidget.js';


class Booking {
  constructor(element){
    const thisBooking = this;

   
    
    
    thisBooking.render(element);
    thisBooking.initWidgets();

    //console.log('new Cart', thisCart);
  }

  

  render(element){
    const thisBooking = this;

    /* generate HTML based on template */
    const generatedHTML = templates.bookingWidget();
    /* create element using utils.createElementFromHTML */
    thisBooking.element = utils.createDOMFromHTML(generatedHTML);
    /* find menu container */
    const bookingContainer = document.querySelector(select.containerOf.booking);
    /* add element to menu */
    bookingContainer.appendChild(thisBooking.element).innerHTML;
    

    thisBooking.dom = {};
    thisBooking.dom.wrapper = element;
    thisBooking.dom.hoursAmount = element.querySelector(select.booking.hoursAmount);
    thisBooking.dom.peopleAmount = element.querySelector(select.booking.peopleAmount);
    //console.log(thisBooking.dom.peopleAmount);

  }

  initWidgets(){
    const thisBooking = this;
    

    thisBooking.peopleAmountElem = new AmountWidget(thisBooking.dom.peopleAmount);
    thisBooking.hoursAmountElem = new AmountWidget(thisBooking.dom.hoursAmount);


    console.log('EASY :D');
  }
}


export default Booking;