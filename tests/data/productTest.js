import {Product, Clothing, Appliance} from '../../data/products.js';

describe('test suite: Product class', () => {
  let product;

  beforeEach(() => {
      product = new Product({
        id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
        image: "images/products/athletic-cotton-socks-6-pairs.jpg",
        name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
        rating: {
          stars: 4.5,
          count: 87
        },
        priceCents: 1090,
        keywords: [
          "socks",
          "sports",
          "apparel"
        ]
      });
    });
  it('has the correct properties', () => {
    expect(product.id).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
  });
  it('does not display any extra info', () => {
    expect(product.extraInfoHTML()).toEqual('');
  });
});

describe('test suite: Clothing class', () => {
  let clothing;

  beforeEach(() => {
    clothing = new Clothing({
      id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
      image: "images/products/athletic-cotton-socks-6-pairs.jpg",
      name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
      rating: {
        stars: 4.5,
        count: 87
      },
      priceCents: 1090,
      keywords: [
        "socks",
        "sports",
        "apparel"
      ]
    });
  });
  it('should display the extra info HTML', () => {
    expect(clothing.extraInfoHTML()).toContain('Size chart');
  });
});

describe('test suite: Appliance class', () => {
  let appliance;

  beforeEach(() => {
    appliance = new Appliance({
      id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
      image: "images/products/athletic-cotton-socks-6-pairs.jpg",
      name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
      rating: {
        stars: 4.5,
        count: 87
      },
      priceCents: 1090,
      keywords: [
        "socks",
        "sports",
        "apparel"
      ]
    });
  });
  it('should display the extra info HTML', () => {
    expect(appliance.extraInfoHTML()).toContain('Instructions');
  });
});

