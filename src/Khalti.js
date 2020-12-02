import React, { useState } from 'react';
import KhaltiCheckout from "khalti-checkout-web";
import {message,Button} from 'antd';
import 'antd/dist/antd.css'; 
const KhaltiIntegration=()=>{
    const [loading,setLoading]=useState(false)
    const khaltiConfigurtaion={
    "publicKey":"test_public_key_c40896fce77745ac90be0b937a882260",
    "productIdentity": "1234567890",
    "productName": "Drogon",
    "productUrl": "http://gameofthrones.com/buy/Dragons",
    "eventHandler": {
        onSuccess (payload) {
            console.log(payload);
            message.success("Payment success");
            setLoading(false)
        },
        onError (error) {
            console.log(error);
            setLoading(false)
        },
        onClose () {
            console.log('widget is closing');
            setLoading(false)
        }
    },
    "paymentPreference": ["KHALTI", "EBANKING","MOBILE_BANKING", "CONNECT_IPS", "SCT"],

    };

    let checkout=new KhaltiCheckout(khaltiConfigurtaion);
    const paymentHandler=async ()=>{
        setLoading(true)
        try {
            await checkout.show({
                amount:400*100
            });
            }catch(err){
                setLoading(false)
            }
       
        
    }
    return(
        <div style={{height:"100vh",display:"flex",justifyContent:"center",alignItems:"center",boxShadow: '0px 0px 16px rgba(0, 0, 0, 0.05)'}}>
            <Button loading={loading} onClick={paymentHandler} style={{width:"40%",height:"70px",background:"#3f51b5",color:"#fff",fontSize:"36px",borderRadius:"8px"}}>
                Pay with KHALTI
            </Button>
        </div>
    )
}
export default KhaltiIntegration;