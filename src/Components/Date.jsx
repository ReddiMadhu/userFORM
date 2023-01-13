
import React, {useEffect, useState} from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";



function Date() {
    const [startDate, setStartDate] = useState(null);

    return (
        <div>
      <DatePicker selected={startDate} onChange={date => setStartDate(date) } minDate={new Date()}
       />
       </div>
    );
};
export default Date;