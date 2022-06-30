import React from 'react';
import {
    Avatar,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    IconButton,
    Typography,
} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import FavoriteIcon from '@material-ui/icons/Favorite';


export default function Post() {
    return (
        <Card>
            <CardHeader
                avatar = {<Avatar>A</Avatar>}
                title= "this is title"
                subheaedr = 'Apr 30, 2021'
                action={
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                }
            />
            <CardMedia image="" title="title"/>
            <CardContent>
                <Typography variant='h5' color = 'textPrimary'>This is Title Post</Typography>
                <Typography variant='body2' color = 'textSecondary'>This is Content Post</Typography>
            </CardContent>
            <CardActions>
                <IconButton>
                    <FavoriteIcon />
                    <Typography component='span' color='textSecondary'>10 likes</Typography>
                </IconButton>
            </CardActions>
        </Card>
    )
}

