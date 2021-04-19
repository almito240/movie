import React from 'react'
import MUIDataTables from "mui-datatables";

export default function CustomTableComponent(props) {
   
    const options = {
        filterType: 'checkbox',
      };

    const {title,data,columns}=props;


    return (
        <div>
            <MUIDataTables
  title={title}
  data={data}
  columns={columns}
  options={options}
/>
        </div>
    )
}