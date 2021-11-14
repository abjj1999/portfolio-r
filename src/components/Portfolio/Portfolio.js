import React from 'react'
import { Grid, Card, CardContent, Typography, Button } from '@material-ui/core';
import cryptobarin from '../../assets/project/cryptobrain.PNG';
import reploy from '../../assets/project/reploy.jpg'
import Moive from '../../assets/project/moviewiki1.jpg'
import todo from '../../assets/project/todo.PNG'
import './portfolio.css';
function Portfolio() {
    return (
        <div className = 'container'>
            <Grid container spacing = {2} justify = 'center' >
                <Grid item className = 'cardStyle  m-1 ' component = {Card} xs = {12} md = {3} lg = {4} >
                    <CardContent>
                    <Typography className="text-center" variant = 'h5' color= "textPrimary" gutterBottom> CryptoBrain</Typography>
                    <img src={cryptobarin} alt="" className = "img-fluid mb-3" />
                    <a className = 'item-link' href="https://github.com/abjj1999/cryptoApp" gutterBottom>
                        <Button color = 'primary' variant="contained">Visit Repo</Button>
                    </a>
                    </CardContent>
                </Grid>
                <Grid item className = 'cardStyle  m-1' component = {Card} xs = {12} md = {3} lg = {4}>
                    <CardContent>
                    <Typography className="text-center" variant = 'h5' color= "textPrimary" gutterBottom> Reploy</Typography>
                    <img src={reploy} alt="" className = "img-fluid mb-3" />
                    <a className = 'item-link' href="https://github.com/abjj1999/job-tracker" gutterBottom>
                        <Button color = 'primary' variant="contained">Visit Repo</Button>
                    </a>
                    </CardContent>
                </Grid>
                <Grid item className = 'cardStyle m-1' component = {Card} xs = {12} md = {3} lg = {4}>
                    <CardContent>
                    <Typography className="text-center" variant = 'h5' color= "textPrimary" gutterBottom> MovieWiki</Typography>
                    <img src={Moive} alt="" className = "img-fluid mb-3" />
                    <a className = 'item-link' href="https://github.com/abjj1999/moviewiki" gutterBottom>
                        <Button color = 'primary' variant="contained">Visit Repo</Button>
                    </a>
                    </CardContent>
                </Grid>
                <Grid item className = 'cardStyle m-1' component = {Card} xs = {12} md = {3} lg = {4}>
                    <CardContent>
                    <Typography className="text-center" variant = 'h5' color= "textPrimary" gutterBottom> MovieWiki</Typography>
                    <img src={todo} alt="" className = "img-fluid mb-3" />
                    <a className = 'item-link' href="https://github.com/abjj1999/to-do-list" gutterBottom>
                        <Button color = 'primary' variant="contained">Visit Repo</Button>
                    </a>
                    </CardContent>
                </Grid>
                
            </Grid>
        </div>
    )
}

export default Portfolio
