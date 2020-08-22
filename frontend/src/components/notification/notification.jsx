import React from 'react';
import {connect} from 'react-redux'
import reactDOM from 'react-dom'

import {
    Page, 
    NotificationWrapper, 
    NotificationText, 
    LeftSideForNotification} from './notification-styles'


function Notification({notificationData, setNotification}) {
    const handleClick=(id)=>{
        let newData = notificationData.filter( notification =>{
            return notification.id !== id 
        })
        setNotification(newData)
    }
    
    return (
        reactDOM.createPortal(
            <Page>
                {
                    notificationData ? 
                    notificationData.map( ({id, name, type})=>(
                        <NotificationWrapper key={id}  onClick={()=>handleClick(id, name)}>
                            <LeftSideForNotification type={type}  onClick={()=>handleClick(id, name)}/>
                            <NotificationText type={type}>
                                {name}
                            </NotificationText>
                        </NotificationWrapper>
                    ))
                    : ''
                }
            </Page>,
            document.querySelector('#modal')
        )
    )
}

const mapStatetoProps = ({notification: {notificationData}}) => {
    return {
        notificationData
    }
}

const mapDispatchtoProps = (dispatch)=>(
    {
        setNotification: (notificationData)=>{dispatch({type:'SET_NOTIFICATION', payload:notificationData})}
    }
)

export default connect(mapStatetoProps, mapDispatchtoProps) (Notification);
