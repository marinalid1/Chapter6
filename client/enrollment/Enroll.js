import React, {useState} from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import {makeStyles} from '@material-ui/core/styles'
import {create} from './api-enrollment'
import auth from './../auth/auth-helper'
import {Redirect} from 'react-router-dom'

const useStyles = makeStyles(theme => ({
    form: {
        minWidth: 500
    }
}))

// Pg 268, the enroll component
export default function Enroll(props) {
  const classes = useStyles()
  const [values, setValues] = useState({
    enrollmentId: '',
    error: '',
    redirect: false
  })
  const jwt = auth.isAuthenticated()
  // Pg 268, when the enroll button is clicked the create enrollment api will be fetched with the provided couse ID
  const clickEnroll = () => {
    create({
      courseId: props.courseId
    }, {
      t: jwt.token
    }).then((data) => {
      if (data && data.error) {
        setValues({...values, error: data.error})
      } else {
        setValues({...values, enrollmentId: data._id, redirect: true})
      }
    })
  }

    if(values.redirect){
        return (<Redirect to={'/learn/'+values.enrollmentId}/>)
    }

  return (
      <Button variant="contained" color="secondary" onClick={clickEnroll}> Enroll </Button>
  )
}

// Pg 269, PropType validation for the component
Enroll.propTypes = {
  courseId: PropTypes.string.isRequired
}
