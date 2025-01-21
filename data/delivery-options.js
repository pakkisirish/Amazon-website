import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';

export const deliveryOptions = [{
  id: '1',
  deliveryDays: 7,
  priceCents: 0
}, {
  id: '2',
  deliveryDays: 3,
  priceCents: 499
}, {
  id: '3',
  deliveryDays: 1,
  priceCents: 999
}];

export function getDeliveryOption(deliveryOptionId) {
  let deliveryOption = '';
  deliveryOptions.forEach((Option) => {
    if (Option.id === deliveryOptionId) {
      deliveryOption = Option;
    }
  });
  return deliveryOption || deliveryOptions[0];
}

export function validateDeliveryOption(deliveryOptionId) {
  let found = false;
  deliveryOptions.forEach((option) => {
    if (option.id === deliveryOptionId) {
      found = true;
    }
  });
  return found;
}

function isWeekend(date) {
  const dayOfWeek = date.format('dddd')
  return dayOfWeek === 'Saturday' || dayOfWeek === 'Sunday';
}

export function calculateDeliveryDate(deliveryOption) {
    let remainingDays = deliveryOptions.deliveryDays;
    let deliveryDate = dayjs(); 

    while (remainingDays > 0) {
      deliveryDate = deliveryDate.add(1, 'day'); 
    }

    if (!isWeekend(deliveryDate)) {
      remainingDays--;
    }
    
    const dateString = deliveryDate.format('dddd, MMMM D');
    return dateString;
}




