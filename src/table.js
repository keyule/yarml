import React from 'react';
import { data } from "./data";
import MUIDataTable from 'mui-datatables';
import Chip from '@material-ui/core/Chip';
import {ThemeProvider, createTheme} from '@material-ui/core';


function MyTable() {

  const columns = [
    {
      label: "Level",
      name: "Level",
      options: {
        filter: true,
      }
    }, {
      label: "Name",
      name: "Name",
      options: {
        filter: false,
      }
    }, {
      label: "Type",
      name: "Type",
      options: {
        filter: false,
        display: false,
      }
    },
    {
      label: "Element",
      name: "Element",
      options: {
        filter: false,
        display: false,
      }
    },
    {
      label: "Size",
      name: "Size",
      options: {
        filter: false,
      }
    },
    {
      label: "Size(OB Mod)",
      name: "Size(OB Mod)",
      options: {
        filter: false,
        display: false,
      }
    },
    {
      label: "HP",
      name: "HP",
      options: {
        filter: false,
      }
    },
    {
      label: "Base Exp",
      name: "Base Exp",
      options: {
        filter: false,
      }
    },
    {
      label: "Job Exp",
      name: "Job Exp",
      options: {
        filter: false,
      }
    },
    {
      label: "Base\\Odin",
      name: "Base Per Odin",
      options: {
        filter: false,
      }
    },
    {
      label: "Job\\Odin",
      name: "Job Per Odin",
      options: {
        filter: false,
        
      }
    },
    {
      label: "HP Per Base",
      name: "HP Per Base",
      options: {
        filter: false,
        display: false,
      }
    },
    {
      label: "HP Per Job",
      name: "HP Per Job",
      options: {
        filter: false,
        display: false,
      }
    },
    {
      label: "Zeny",
      name: "Zeny",
      options: {
        filter: false,
      }
    },
    {
      label: "Card",
      name: "Card",
      options: {
        filter: false,
        customBodyRender: (value) => {
          const myArr = value.split("\n");
          return myArr.map((val) => {
            return <div><Chip label={val}/></div>
          });
        },
      }
    },
    {
      label: "Card Slot",
      name: "Card Slot",
      options: {
        filter: true,
      }
    }
  ];

  const myData = data;


  const theme = createTheme({
    palette: {
      type: 'dark',
      background: {
        paper: '#1e1e1e',
      },
    },
  });

  const options = {
    pagination: false,
    selectableRows: "none",
    setTableProps: () => {
      return {
        padding: 'default',
        size: 'small',
      };
    }
  };

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <MUIDataTable title={'Yet Another ROX Monster List'} data={myData} columns={columns} options ={options}/>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default MyTable;