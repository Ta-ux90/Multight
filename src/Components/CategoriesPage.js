import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Grid, Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';
import categoryData from './data/categoryData';
const CategoryPage = () => {
    const { category } = useParams();
    const categoryItems = categoryData[category] || [];
    return (
        <Container sx={{ py: 4 }}>
            <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 5, mt: 1, textAlign: 'center', color: '#2a386e' }}>
                {category}
            </Typography>
            <Grid container spacing={4}>
                {categoryItems.map((item, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card sx={{ height: '100%', boxShadow: 3, borderRadius: 2, transition: 'transform 0.3s, box-shadow 0.3s', '&:hover': { transform: 'translateY(-5px)', boxShadow: 6 } }}>
                            <CardMedia
                                component="img"
                                height="200"
                                image={item.imageUrl}
                                alt={item.title}
                                sx={{ borderTopLeftRadius: 2, borderTopRightRadius: 2 }} />
                            <CardContent>
                                <Typography variant="h5" gutterBottom sx={{ fontWeight: '600', color: '#333' }}>
                                    {item.title}
                                </Typography>
                                <Typography variant="h6" sx={{ color: '#e91e63', fontWeight: '500' }}>
                                    {item.price}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {item.description}
                                </Typography>
                            </CardContent>
                            <CardActions sx={{ justifyContent: 'center', pb: 2 }}>
                                <Button variant="contained" color="primary" size="medium" sx={{ borderRadius: 1, '&:hover': { backgroundColor: '#d32f2f' }, padding: '10px 20px' }}>
                                    Add To Cart
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};
export default CategoryPage;