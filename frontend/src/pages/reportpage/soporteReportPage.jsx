import React, {useState} from 'react' 
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {useMutation} from '@apollo/client'

import {Page, 
        Header,
        Section, 
        Title, 
        Aside,
        ButtonSection,
        ReportNumberText} from './reportpage-styles'

import {UPDATE_STATUS} from '../../graphql/mutation/user-mutations'


import SecundaryText from '../../components/secundary-text-with-images/secundary-text-with-images'
import CustomButton from '../../components/custom-button/custom-button'

function SoporteReportPage({data, params}) {
    console.log(data, params)
    return (
        <Page>
            qlqqqq
        </Page>
    )
}

export default SoporteReportPage