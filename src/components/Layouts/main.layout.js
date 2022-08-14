import React from 'react';
import Container from 'react-bootstrap/Container';
import Navigation from './navigation.layout';

const MainLayout = ({children}) => {
  return (
    <React.Fragment>
      <Navigation />
      <Container className="mt-5">
        {children}
      </Container>
    </React.Fragment>
  )
}

export default MainLayout