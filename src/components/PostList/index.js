import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core'
import Post from './Post';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../redux/actions'

export default function PostList() {
    const dispatch = useDispatch();
    // const posts = useSelector(postsSelector)

    React.useEffect(()=> {
        dispatch(actions.getPosts.getPostRequest())
    },[dispatch]);

    return (
        <Grid container spacing={2} alignItems="stretch">
            <Grid item xs={12} sm={6}>
                <Post />
            </Grid>
            <Grid item xs={12} sm={6}>
                <Post />
            </Grid>
            <Grid item xs={12} sm={6}>
                <Post />
            </Grid>
        </Grid>
    )
}