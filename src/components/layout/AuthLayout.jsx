import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import authUtils from '../../utils/authUtils'
import Loading from '../common/Loading'
import { Box, Container } from '@mui/material'
import assests from '../../assets'

const AuthLayout = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const checkAuth = async () => {
      const isAuth = await authUtils.isAuthenticated()
      if (!isAuth) {
        setLoading(false)
      }
      else {
        navigate('/')
      }

    }
    checkAuth()
  }, [navigate])

  return (
    loading ? (
      <Loading fullheight></Loading>
    ) : (
      <Container component='main' maxWidth='xs'>
        <Box sx={{
          marginTop: 8,
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column'
        }}>
          <img src={assests.images.logoDark} style={{ width: '100px' }} alt='app logo' />
          <Outlet />
        </Box>

      </Container>
    )
  )
}

export default AuthLayout