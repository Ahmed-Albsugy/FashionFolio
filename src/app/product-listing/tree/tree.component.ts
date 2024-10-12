import { FlatTreeControl } from '@angular/cdk/tree';
import { Component } from '@angular/core';
import {
  MatTreeFlatDataSource,
  MatTreeFlattener,
  MatTreeModule,
} from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 */
interface FoodNode {
  name: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Women',
    children: [
      {name: 'Clothhing',
      children:[{name:'Coats'}, {name:'Jackets'}, {name:'Dresses'}, {name:'Shirts & Blouses'}, {name:'Tops'}, {name:'Skirts'}, {name:'jeans'}],
      },
      {name: 'Accessories',
        children: []
      },

      {name: 'Bags',
        children: [{name:'Shoulder Bags'}, {name :'Tote Bags'} , {name :'Clutch Bags'} , {name :'BackPacks Bags'},{name :'Belt Bags'}],
      },
    ],
  },

  {
    name: 'Men',
    children: [
      {
        name: 'Clothing',
        children: [{name: 'Suits'}, {name: 'Blazers'}, {name: 'Shirts'}, {name: 'Pants'}, {name: 'shorts & Swimwear'},{name: 'Sweaters & Hoodies'}],
      },
      {
        name: 'Shoes',
        children: [{name: 'Adidas'}, {name: 'Nike'}, {name: 'New Balance'}, {name: 'vanss'}],
      },
    ],
  },
  {
    name: 'Kids',
    children:[
    {
      name: 'Clothing',
        children: [{name: 'Suits'}, {name: 'Blazers'}, {name: 'Shirts'}, {name: 'Pants'}, {name: 'shorts & Swimwear'},{name: 'Sweaters & Hoodies'}],
    }
      ]

  },
];


/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

/**
 * @title Tree with flat nodes
 */
@Component({
  selector: 'tree-list',
  templateUrl: './tree.component.html',
  standalone: true,
  imports: [MatTreeModule, MatButtonModule, MatIconModule],
})
export class TreeFlatOverviewExample {
  private _transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  };

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    (node) => node.level,
    (node) => node.expandable
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    (node) => node.level,
    (node) => node.expandable,
    (node) => node.children
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
}
