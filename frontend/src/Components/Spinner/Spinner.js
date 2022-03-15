import React from "react"
import spinner from './../../Images/spinner.svg'

const Spinner = () => <img src={spinner} style={{ position: 'absolute', top: '50%', left: '50%', width: '50px', height: '50px', transform: 'translate(-50%, -50%)' }} alt="Loading..." />

export default Spinner