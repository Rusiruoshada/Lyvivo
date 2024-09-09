import React from "react";
import { CollapseProps } from "antd";
import collapseText from "./faqtext.ts";
import Collapse from "antd";

const itemsNest1:any = [
  collapseText[0].onlineOrderAndDeliveryRelated.children.map((item:any,index:number) => (
    {
      key: index,
      label: item.question,
      children: item.answer,
    }
  ))
]



export const itemsOnlineOrderAndDeliveryRelated: CollapseProps['items'] = [
    {
        key: '1',
        label: 'Can I place an order for person residing elsewhere within the delivery grid?',
        children: <Collapse />,
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
      {
        key: '5',
        label: 'This is panel header 3',
        children: 'a',
      },
      {
        key: '6',
        label: 'This is panel header 3',
        children: 'a',
      },
      {
        key: '7',
        label: 'This is panel header 3',
        children: 'a',
      },
      {
        key: '8',
        label: 'This is panel header 3',
        children: 'a',
      },
      {
        key: '9',
        label: 'This is panel header 3',
        children: 'a',
      },
      {
        key: '10',
        label: 'This is panel header 3',
        children: 'a',
      },
      {
        key: '11',
        label: 'This is panel header 3',
        children: 'a',
      },
]