import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const products = [
      {
        id: 0,
        price: 1310,
        name: 'HEUMANN KEKFRANKOS 2015',
        description: 'Szárez, fehér, fahordós.',
        imgUrl: 'https://winelovers.cdn.shoprenter.hu/custom/winelovers/image/cache/w900h900wt1/product/15732.jpg?lastmod=1575377367.1575378884',
        type: "white"
      },
      {
        id: 1,
        price: 1310,
        name: 'Pajzos-Megyer Chateau Megyer Tokaji Furmint 2016 (0,75l)',
        description: 'Szárez, fehér, fahordós.',
        imgUrl: 'https://wanderlustwine.co.uk/wp-content/uploads/2019/10/Heumann-Kefrankos-2015-Villany-copy.jpg',
        type: "red"
      },
      {
        id: 2,
        price: 1310,
        name: 'Pajzos-Megyer Chateau Megyer Tokaji Furmint 2016 (0,75l)',
        description: 'Szárez, fehér, fahordós.',
        imgUrl: 'https://secure.ce-tescoassets.com/assets/HU/991/5999557600991/ShotType1_540x540.jpg',
        type: "rose"
      },

      {
        id: 3,
        price: 1310,
        name: 'Pajzos-Megyer Chateau Megyer Tokaji Furmint 2016 (0,75l)',
        description: 'Szárez, fehér, fahordós.',
        imgUrl: 'https://wanderlustwine.co.uk/wp-content/uploads/2019/10/Heumann-Kefrankos-2015-Villany-copy.jpg',
        type: "red"
      },
      {
        id: 4,
        price: 1310,
        name: 'Pajzos-Megyer Chateau Megyer Tokaji Furmint 2016 (0,75l)',
        description: 'Szárez, fehér, fahordós.',
        imgUrl: 'https://secure.ce-tescoassets.com/assets/HU/991/5999557600991/ShotType1_540x540.jpg',
        type: "rose"
      },
      {
        id: 5,
        price: 1310,
        name: 'HEUMANN KEKFRANKOS 2015',
        description: 'Szárez, fehér, fahordós.',
        imgUrl: 'https://winelovers.cdn.shoprenter.hu/custom/winelovers/image/cache/w900h900wt1/product/15732.jpg?lastmod=1575377367.1575378884',
        type: "white"
      },
      {
        id: 6,
        price: 1310,
        name: 'Pajzos-Megyer Chateau Megyer Tokaji Furmint 2016 (0,75l)',
        description: 'Szárez, fehér, fahordós.',
        imgUrl: 'https://wanderlustwine.co.uk/wp-content/uploads/2019/10/Heumann-Kefrankos-2015-Villany-copy.jpg',
        type: "red"
      },

      {
        id: 7,
        price: 1310,
        name: 'HEUMANN KEKFRANKOS 2015',
        description: 'Szárez, fehér, fahordós.',
        imgUrl: 'https://winelovers.cdn.shoprenter.hu/custom/winelovers/image/cache/w900h900wt1/product/15732.jpg?lastmod=1575377367.1575378884',
        type: "white"
      },
      {
        id: 8,
        price: 1310,
        name: 'Pajzos-Megyer Chateau Megyer Tokaji Furmint 2016 (0,75l)',
        description: 'Szárez, fehér, fahordós.',
        imgUrl: 'https://wanderlustwine.co.uk/wp-content/uploads/2019/10/Heumann-Kefrankos-2015-Villany-copy.jpg',
        type: "red"
      },
      {
        id: 9,
        price: 1310,
        name: 'Pajzos-Megyer Chateau Megyer Tokaji Furmint 2016 (0,75l)',
        description: 'Szárez, fehér, fahordós.',
        imgUrl: 'https://secure.ce-tescoassets.com/assets/HU/991/5999557600991/ShotType1_540x540.jpg',
        type: "rose"
      },
      {
        id: 10,
        price: 1310,
        name: 'HEUMANN KEKFRANKOS 2015',
        description: 'Szárez, fehér, fahordós.',
        imgUrl: 'https://winelovers.cdn.shoprenter.hu/custom/winelovers/image/cache/w900h900wt1/product/15732.jpg?lastmod=1575377367.1575378884',
        type: "white"
      },
      {
        id: 11,
        price: 1310,
        name: 'Pajzos-Megyer Chateau Megyer Tokaji Furmint 2016 (0,75l)',
        description: 'Szárez, fehér, fahordós.',
        imgUrl: 'https://wanderlustwine.co.uk/wp-content/uploads/2019/10/Heumann-Kefrankos-2015-Villany-copy.jpg',
        type: "red"
      },
      {
        id: 12,
        price: 1310,
        name: 'Pajzos-Megyer Chateau Megyer Tokaji Furmint 2016 (0,75l)',
        description: 'Szárez, fehér, fahordós.',
        imgUrl: 'https://secure.ce-tescoassets.com/assets/HU/991/5999557600991/ShotType1_540x540.jpg',
        type: "rose"
      },
      {
        id: 13,
        price: 1310,
        name: 'HEUMANN KEKFRANKOS 2015',
        description: 'Szárez, fehér, fahordós.',
        imgUrl: 'https://winelovers.cdn.shoprenter.hu/custom/winelovers/image/cache/w900h900wt1/product/15732.jpg?lastmod=1575377367.1575378884',
        type: "white"
      },
      {
        id: 14,
        price: 1310,
        name: 'Pajzos-Megyer Chateau Megyer Tokaji Furmint 2016 (0,75l)',
        description: 'Szárez, fehér, fahordós.',
        imgUrl: 'https://wanderlustwine.co.uk/wp-content/uploads/2019/10/Heumann-Kefrankos-2015-Villany-copy.jpg',
        type: "red"
      },
      {
        id: 15,
        price: 1310,
        name: 'Pajzos-Megyer Chateau Megyer Tokaji Furmint 2016 (0,75l)',
        description: 'Szárez, fehér, fahordós.',
        imgUrl: 'https://secure.ce-tescoassets.com/assets/HU/991/5999557600991/ShotType1_540x540.jpg',
        type: "rose"
      },
      


    ];
    return { products };
  }

  genId(products: Product[]): number {
    return products.length > 0 ? Math.max(...products.map(product => product.id)) + 1 : 11;
  }
}
