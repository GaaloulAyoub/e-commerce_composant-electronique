import React from  'react';
import Grid from '@material-ui/core';
const products = [
    {id : 1, name: 'shoes', description: 'Running shoes' , price: '$5'},
    {id : 2, name: 'Mackbook', description: 'Apple macbook' , price: '$10'},
];
const Products = () => {
    <main> 
        <Grid container justify='center' spacing={4}>
            {products.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Products/>

                </Grid>

            ))

            }
        </Grid>
    </main>
}