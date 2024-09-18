import React from 'react';
import { CollapseProps } from 'antd';
import collapseText from './faqtext.ts';
import { Collapse } from 'antd';


const itemsNestOnlineOrderAndDeliveryRelated: any =
  collapseText[0].onlineOrderAndDeliveryRelated.children.map(
    (item: any, index: number) => ({
      key: (index + 1).toString(),
      label: item.question,
      children: <p>{item.answer}</p>,
    })
  );

const itemsNestProductRangeAndOtherLimitations: any =
  collapseText[0].productRangeAndOtherLimitations.children.map(
    (item: any, index: number) => ({
      key: (index + 1).toString(),
      label: item.question,
      children: <p>{item.answer}</p>,
    })
  );



const items: CollapseProps['items'] = [
  {
    key: '1',
    label:
      collapseText[0].onlineOrderAndDeliveryRelated.label,
    children: (
      <Collapse
        items={itemsNestOnlineOrderAndDeliveryRelated}
        size='large'
        expandIconPosition='end'
        rootClassName=''
        className=''
        
      />
    ),
  },
  {
    key: '2',
    label: collapseText[0].productRangeAndOtherLimitations.label,
    children: (
      <Collapse 
        items={itemsNestProductRangeAndOtherLimitations}
        size='large'
        expandIconPosition='end'
      />
    ),
  },
  
];
export default items;
