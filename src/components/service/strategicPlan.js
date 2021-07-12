import React from 'react'
import './strategicPlan.css';
import { Grid, Typography } from '@material-ui/core';
import endpoint from '../../helpers/api_service.js'

export default function strategicPlan() {
    return (
        <div>

                    <Typography className='bukra-bold' align='justify' variant='h5' component='h5' style={{ fontWeight: 600 }}>
                        What is strategic planning?
                    </Typography>
                    <Typography align='justify' variant='h6' component='h6' className='bukra-regular lspacing'>
                        Strategic planning is the process of documenting and setting a business strategy by examining where you are now and where you want to go in the future. It entails taking a step back from your tasks and considering where your company is headed and what its purpose should be. When a company is just getting established, strategic planning is essential for the business to improve and come out with their goals and objectives .
                        <br></br>
                    </Typography>
                    <br></br>
                    {/* <br></br> */}
                    <Typography align='justify' className='bukra-bold' variant='h5' component='h5' style={{ fontWeight: 600 }}>
                        Why do we need strategic planning?
                    </Typography>
                    {/* <br></br> */}
                    {/* <br></br> */}
                    <Typography align='justify' variant='h6' component='h6' className='bukra-regular lspacing'>
                        Strategic planning puts your company on the right track. It will also assist it in improving its effort in order to achieve your company's aims. As a result, strategic planning can assist your company in developing the appropriate goals and objectives, as well as assisting the team in focusing more on their objectives in order to achieve them.
                    </Typography>
                    <br></br>
                    <Typography align='justify' variant='h6' component='h6' className='bukra-regular lspacing'>
                        BMC has the aim to provide professional consultancy and assistance for your business in the analysis, conception, and formulation of strategies & plans along with the development of the implementation framework that assure client’s sustained survival and long-term growth & profitability.
                    </Typography>
                    <br></br>
                    <Typography align='justify' className='bukra-bold' variant='h5' component='h5' style={{ fontWeight: 600 }}>
                        BMC will be responsible for the formulation of your
                    </Typography>
                    <Grid container>
                        <Grid item xs={4}>
                            <Typography variant='h6' component='h6' className='bukra-regular lspacing'>
                                ·      Vision
                                <br></br>
                                ·      Mission
                                <br></br>
                                ·      Core values
                                <br></br>
                                ·      Goals
                                <br></br>
                                ·      Objectives
                                <br></br>
                            </Typography>
                        </Grid>
                        <Grid item xs={8}>
                        <Typography variant='h6' component='h6' className='bukra-regular lspacing'>

                                ·      Corporate strategies & plans
                                <br></br>
                                ·      Business strategies & plans
                                <br></br>
                                ·      Functional strategies & plans
                                <br></br>
                                ·      Organization development and strengthening
                                <br></br>
                                ·      Culture, structure, systems, people, facilities & other resources
                                <br></br>
                            </Typography>
                        </Grid>
                    </Grid>
        </div>
    )
}
