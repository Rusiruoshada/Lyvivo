import React from 'react';
import { CollapseProps } from 'antd';
import collapseText from './faqtext.ts';
import { Collapse } from 'antd';


const itemsNest: any =
  collapseText[0].onlineOrderAndDeliveryRelated.children.map(
    (item: any, index: number) => ({
      key: (index + 1).toString(),
      label: item.question,
      children: <p>{item.answer}</p>,
    })
  );

console.log(itemsNest);

const items: CollapseProps['items'] = [
  {
    key: '1',
    label:
      collapseText[0].onlineOrderAndDeliveryRelated.label,
    children: (
      <Collapse
        items={itemsNest}
        size='large'
        expandIconPosition='end'
        
      />
    ),
  },
  {
    key: '2',
    label: 'This is panel header 2',
    children: 'a',
  },
  {
    key: '3',
    label: 'This is panel header 3',
    children: 'a',
  },
  {
    key: '4',
    label: 'This is panel header 3',
    children: 'a',
  },
];
export default items;
