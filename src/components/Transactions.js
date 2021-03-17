import React,{useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'


function Transactions(props) {
    const {deleteTransaction} = useContext(GlobalContext)
    return (
        <div >
            <h6>{props.text}   =  {props.amount}  | <button className='btn btn-primary'  onClick ={()=>{deleteTransaction(props.id)}} > X</button></h6>
        </div>
    )
}

export default Transactions
