import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import OrderConfirmation from './OrderConfirmation';


function ConfirmationPage() {
    const [confirmation, setConfirmation] = useState({name: "", address: "", items: [], id: ""});
    // const [name, setName] = useState("");
    // const [address, setAddress] = useState("");
    // const [items, setItems] = useState([]);

    const id = useParams();
    const getConfirmation = async () => {
        console.log(id);
        const response = await fetch(`/api/orders/${id.id}`);
        const data = await response.json();

        console.log(data);
        setConfirmation(data);
        // setAddress(data.address);
        // setName(data.name);
        // setItems(data.items);

      };

      useEffect(() => {
        getConfirmation();
        }, []);
   
  return (
    <div><OrderConfirmation confirmation={confirmation} /></div>
  )
}

export default ConfirmationPage