import { Box } from '@mui/material'
import React from 'react'

export default function Sidebar() {
  return (
    <Box bgcolor="purple" flex={1} p={2} sx={{display: {xs: "none" , sm: "block"}}}>
      sidebar
    </Box>
  )
}
