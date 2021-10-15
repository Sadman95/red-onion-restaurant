import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button, Row } from 'react-bootstrap';
import DisplayMeals from '../../Meals/DisplayMeals/DisplayMeals';


const Breakfast = () => {
    const [items, setItems] = useState([]);

    useEffect(() =>{
        fetch('https://sadman95.github.io/red-onion-data/breakfasts.json')
        .then(res => res.json())
        .then(data => setItems(data))
    }, [] )
    return (
        <Row md={3} sm={1}>
            {
                items.map(item => <DisplayMeals key={item.id} item={item}></DisplayMeals>)
            }
            <Button className='d-table mx-auto my-4' variant='secondary'>Checkout your foods</Button>
        </Row>
    );
};

export default Breakfast;