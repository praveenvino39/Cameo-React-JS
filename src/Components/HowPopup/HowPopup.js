import React from 'react'
import { Stepper, Step, StepLabel, Button, IconButton } from '@material-ui/core'
import { CalendarToday, Description, Email, CreditCard, Close } from '@material-ui/icons'

function HowPopup() {
    return (<>
        <div class="modal fade mt-5" id="how" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="text-white modal-dialog">
                <div style={{ backgroundColor: 'rgb(28, 28, 28)' }} class=" modal-content">
                    <div class="modal-header" style={{ borderBottom: '0px', padding: '20px 40px' }}>
                        <h5 class="modal-title" id="exampleModalLabel">What happens when I request a Cameo?</h5>
                        <button type="button" class="btn-close btn-sm" style={{ color: 'white !important', backgroundColor: 'white' }} data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body" style={{ paddingLeft: '50px', paddingRight: '50px' }}>

                        <Stepper style={{ backgroundColor: 'rgb(28, 28, 28)' }} variant="elevation" orientation="vertical">
                            <Step style={{ color: '#FF037C' }}>
                                <StepLabel StepIconComponent={CalendarToday} style={{ color: '#FF037C' }}> <span style={{ color: 'white' }}>Your request will be completed within 7 days</span> </StepLabel>
                            </Step>
                            <Step>
                                <StepLabel StepIconComponent={Description} style={{ color: '#FF037C' }}> <span style={{ color: 'white' }}>Your receipt and order updates will be sent to the email provided under Delivery Information</span></StepLabel>
                            </Step>
                            <Step>
                                <StepLabel StepIconComponent={Email} style={{ color: '#FF037C' }}> <span style={{ color: 'white' }}>When your request is completed, we’ll email and text you a link to view, share, or download your Cameo</span></StepLabel>
                            </Step>
                            <Step>
                                <StepLabel StepIconComponent={CreditCard} style={{ color: '#FF037C' }}> <span style={{ color: 'white' }}>If for some reason your video isn’t completed, the hold on your card will be removed within 5-7 business days</span></StepLabel>
                            </Step>
                        </Stepper>
                    </div>
                </div>
            </div>
        </div>
    </>

    )
}

export default HowPopup
