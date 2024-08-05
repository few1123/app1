import React from "react"

export function Header (){
    const aStyle = {
        display:'inline-block',
        color:'blue',
        margin:'7px',
        textDecoration:'none'
    }


return(
    <div style={{backgroundColor:'#ccc'}}>
        <a href=" " style={aStyle}>Home</a>|&nbsp;
        <a href=" " style={aStyle}>React</a>|&nbsp;
        <a href=" " style={aStyle}>React Native</a>|&nbsp;
    </div>
)
}

export function Content(){
    return(
        <div style={{textAlign:'center'}}>
            <h2>Hello<br/>React&React Native</h2>
            <br/><br/><br/>
        </div>
    )
}
export const Footer = ()=>{
    return(
        <div style={{textAlign:'center'}}>
            &copy;{new Date().getFullYear()}All rights reserved
        </div>
    )
}
export default class Calendar extends React.Component{
    getDate(){
        const dayNames=['อาทิตย์','จันทร์','อังคาร','พุธ','พฤหัสบดี','ศุกร์','เสาร์']
        const monthNames=['มกราคม','กุมภาพันธ์','มีนาคม','เมษายน','พฤษภาคม','มิถุนายน','กรกฏาคม','สิงหาคม','กันยายน','ตุลาคม','พฤศจิกายน','ธันวาคม']
        const date = new Date()
        const weekDay = dayNames[date.getDay()]
        const day = date.getDate()
        const month = monthNames[date.getMonth()]
        const year = date.getFullYear()+543
        return `วัน${weekDay} ที่ ${day} ${month} ${year}`

    }
    render(){
        return<div>{this.getDate()}</div>
    }
}