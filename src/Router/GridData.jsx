import React, { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { Button, Stack } from '@mui/material'
import Grid from '@mui/material/Grid'

export const GridData = () => {
  const columns = [
    { field: 'id', headerName: 'ID', width: 60 },
    {
      field: 'firstName',
      headerName: 'First name',
      width: 150,
      editable: true,
    },
    {
      field: 'lastName',
      headerName: 'Last name',
      width: 150,
      editable: true,
    },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 110,
      editable: true,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
  ]

  const news = [{ id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 }]

  const [rows, setRows] = useState(news)

  const addValue = () => {
    const newNews = { id: 2, lastName: 'Jo', firstName: 'Jon', age: 22 }
    setRows([...rows, newNews])
  }

  return (
    <>
    <Grid vontainer item p={5}>

      <Stack spacing={2} direction="row">
        <Button variant="contained" onClick={addValue}>
          新規登録
        </Button>
      </Stack>
      <Grid item p={1}/>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
    </Grid>
      
    </>
  )
}
