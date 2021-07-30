import React from 'react';
import { data } from "./data";
import MUIDataTable from 'mui-datatables';
import Chip from '@material-ui/core/Chip';
import {ThemeProvider, createTheme} from '@material-ui/core';
import {
  FormGroup,
  FormLabel,
  TextField,
} from '@material-ui/core';


function MyTable() {

  const columns = [
    {
      label: "Level",
      name: "Level",
      options: {
        filter: true,
        filterType: 'custom',

        // if the below value is set, these values will be used every time the table is rendered.
        // it's best to let the table internally manage the filterList
        //filterList: [25, 50],
        
        customFilterListOptions: {
          render: v => {
            if (v[0] && v[1] ) {
              return `Min Level: ${v[0]}, Max Level: ${v[1]}`;
            } else if (v[0]) {
              return `Min Level: ${v[0]}`;
            } else if (v[1]) {
              return `Max Level: ${v[1]}`;
            }
            return [];
          },
          update: (filterList, filterPos, index) => {
            console.log('customFilterListOnDelete: ', filterList, filterPos, index);

            if (filterPos === 0) {
              filterList[index].splice(filterPos, 1, '');
            } else if (filterPos === 1) {
              filterList[index].splice(filterPos, 1);
            } else if (filterPos === -1) {
              filterList[index] = [];
            }

            return filterList;
          },
        },
        filterOptions: {
          names: [],
          logic(age, filters) {
            if (filters[0] && filters[1]) {
              return age < filters[0] || age > filters[1];
            } else if (filters[0]) {
              return age < filters[0];
            } else if (filters[1]) {
              return age > filters[1];
            }
            return false;
          },
          display: (filterList, onChange, index, column) => (
            <div>
              <FormLabel>Level</FormLabel>
              <FormGroup row>
                <TextField
                  label='min'
                  value={filterList[index][0] || ''}
                  onChange={event => {
                    filterList[index][0] = event.target.value;
                    onChange(filterList[index], index, column);
                  }}
                  style={{ width: '45%', marginRight: '5%' }}
                />
                <TextField
                  label='max'
                  value={filterList[index][1] || ''}
                  onChange={event => {
                    filterList[index][1] = event.target.value;
                    onChange(filterList[index], index, column);
                  }}
                  style={{ width: '45%' }}
                />
              </FormGroup>
            </div>
          ),
        },
        print: false,
      },
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
        setCellProps: value => {
          return {
            style: {
              background: '#3d3d3d',
            }
          };
        }
      }
    },
    {
      label: "Job\\Odin",
      name: "Job Per Odin",
      options: {
        filter: false,
        setCellProps: value => {
          return {
            style: {
              background: '#3d3d3d',
            }
          };
        }
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
    },
  });


  // get max screen height
  var adj = (window.screen.height === window.outerHeight) ? 0 : -15
  var maxScreenHeight = window.innerHeight * (window.screen.Height / (window.outerHeight + adj))
  if (parseInt(maxScreenHeight) !== maxScreenHeight) maxScreenHeight = window.screen.height

  maxScreenHeight = parseInt(maxScreenHeight) - 200;

  const options = {
    pagination: false,
    selectableRows: "none",
    fixedHeader: true,
    tableBodyHeight: maxScreenHeight + 'px',
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