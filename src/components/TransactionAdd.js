import React,{useState,useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'

function TransactionAdd() {
    const [text,setText] = useState('')
    const [amount,setAmount] = useState(0)
    const {addTransaction} = useContext(GlobalContext)

    const onSubmit = (e)=>{
            e.preventDefault()
            const newTransaction ={
                id: Math.floor(Math.random() * 1000000),
                text,
                amount : +amount
            }

            addTransaction(newTransaction)
            setText('')
            setAmount(0)
    }
    let styles = {
        'background':'#3d87ff',
        'color':'white',
        "max-width": '250px',
        'margin': 'auto',
        'border-radius': '20px',
    }
    let input ={
            'margin-left': '60px'
        // 'background':'white'
    }
    return (
        <div style={ styles} >
        <h3> Add Transactions</h3>

        <form onSubmit = {onSubmit} >
            <label> Record </label>
            <div style={input} > <input  className='form-control w-75' type ='text' value = {text} onChange = {(e)=>setText(e.target.value)} placeholder='Enter Reason' /> </div>

            <br></br>
            <br></br>
            <label> Amount: Enter "-" if it is expense </label>
            <div style={input} >  <input className='form-control w-75' type ='number' value = {amount} onChange = {(e)=>setAmount(e.target.value)} placeholder='Enter Amount ' /></div>
            <button className='my-4 btn btn-primary' >Add Transaction</button>
        </form>
            
        </div>
        )
}

export default TransactionAdd
