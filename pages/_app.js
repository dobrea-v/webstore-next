/* eslint-disable react/no-children-prop */
import '../styles/globals.css'

import React from 'react'
import App from 'next/app'
import SiteLayout from '../components/MainLayout'
import { ChakraProvider } from '@chakra-ui/react'


class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props
    
    const getLayout =
      Component.getLayout || (page => <SiteLayout children={page} />)

    return getLayout(<ChakraProvider>
      <Component {...pageProps} />    </ChakraProvider>
    )
  }
}

export default MyApp
