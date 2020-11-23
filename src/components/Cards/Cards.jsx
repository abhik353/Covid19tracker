import React from 'react'
import styles from './Cards.module.css'
import {Card, CardContent, Typography, Grid, StylesProvider} from '@material-ui/core'

const Cards = ({data: {confirmed, recovered, deaths, lastUpdate}}) => {
    if(!confirmed){
        return 'Loading...'
    }
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Infected
                        </Typography>
                        <Typography variant="h5">
                            {confirmed.value}
                        </Typography>
                        <Typography color="textSecondary">
                            date
                        </Typography>
                        <Typography variant="body2">
                            No of activecases
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Recovered
                        </Typography>
                        <Typography variant="h5">
                            data
                        </Typography>
                        <Typography color="textSecondary">
                            date
                        </Typography>
                        <Typography variant="body2">
                            No of recovered cases
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Deaths
                        </Typography>
                        <Typography variant="h5">
                            data
                        </Typography>
                        <Typography color="textSecondary">
                            date
                        </Typography>
                        <Typography variant="body2">
                            No of Deaths
                        </Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards
