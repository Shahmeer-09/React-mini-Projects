import { Box } from '@mui/material'
import React from 'react'

export default function Rightbar() {
  return (
    <Box bgcolor="lightblue" flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      Righbar
    </Box>
  )
}
