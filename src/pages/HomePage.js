import React from 'react';
import { Container } from '@material-ui/core'

import Header from '../components/Header'
import PostList from '../components/PostList';

function HomePage(props) {
    return (
        <Container maxWith='lg'>
            <div>
                <Header />
                <PostList />
            </div>
        </Container>
    );
}

export default HomePage;