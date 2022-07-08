import React from 'react';
import { Grid } from '@material-ui/core'
import Post from './Post';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../redux/actions'
import { postsState$ } from '../../redux/selector';

export default function PostList() {
    const dispatch = useDispatch();
    const posts = useSelector(postsState$);

    console.log('[PostList - posts]', posts);

    // React.useEffect(()=> {
    //     dispatch(actions.getPosts.getPostRequest());
    // },[dispatch]);

    return (
        <Grid container spacing={2} alignItems="stretch">
            <Grid item xs={12} sm={6}>
                <Post />
            </Grid>
        </Grid>
    )
}