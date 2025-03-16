import { CalendarProps, theme } from 'antd'
import React from 'react'

const Calendar:React.FC = () => {

    const onPanelChange = (value:any, mode: CalendarProps<any>['mode']) => {
        console.log(value.format('YYYY-MM-DD'), mode);
    }
    

    return (  
    <div>
        <Calendar  />
    </div>
  )
}

export default Calendar