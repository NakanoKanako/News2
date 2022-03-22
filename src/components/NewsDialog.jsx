import React from 'react'
import { Button, Dialog, TextField, Typography } from '@mui/material'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogActions from '@mui/material/DialogActions'
import Grid from '@mui/material/Grid'

export const NewsDialog = () => {
  const [open, setOpen] = React.useState(false)

  const onClickeNewNews = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <Grid
        container
        justifyContent="center"
      >
      <Button sx={{marginTop: '50px'}} variant="contained" onClick={onClickeNewNews}>
          新規登録
        </Button>
      </Grid>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle sx={{ fontWeight: 'bold' }}>新規ニュース登録</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <div>
              <Typography>タイトル</Typography>
              <TextField margin="dense" />
            </div>
            <div>
              <Typography>内容</Typography>
              <TextField margin="dense" />
            </div>
            <div>
              <Typography>ジャンル</Typography>
              <TextField margin="dense" />
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" autoFocus onClick={handleClose}>
            キャンセル
          </Button>
          <Button variant="contained" onClick={handleClose}>
            新規登録
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
