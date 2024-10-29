import React from 'react';
import {
    Grid,
    Card,
    CardMedia,
    CardContent,
    Typography,
    Button,
    Container,
    Fade,
    Box

} from '@mui/material';

// -------------------------------------------------------------

const collections = [
    { title: 'Care Accessories', image: 'https://i.pinimg.com/564x/65/a2/90/65a29043435ad5bf78e046fdadc78ae2.jpg', link: '/shop/Care Accessories' },
    { title: 'Men Clothing', image: 'https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', link: '/shop/Men%20Clothing' },
    { title: 'Women Clothing', image: 'https://images.pexels.com/photos/5704722/pexels-photo-5704722.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', link: '/shop/Women%20Clothing' },
    { title: 'Kitchens', image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', link: '/shop/Kitchens' },
    { title: 'Electronics', image: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', link: '/shop/Electronics' },
];

const Collections = () => {
    return (
        <>
            <Box
                sx={{
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh',
                    flexDirection: 'column',
                    textAlign: 'center',
                }}
            >
                <Grid container spacing={2} justifyContent="center" alignItems="center" sx={{ mt: 3 }}>
                    <Grid item xs={6} sm={3}>
                        <img src='https://i.pinimg.com/564x/7d/3e/76/7d3e767fa6b42044c823052f77315d02.jpg' alt="Image01" style={{ width: '100%', height: 600, borderRadius: '8px' }} />
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <img src='https://i.pinimg.com/564x/bc/24/43/bc2443aed63b2db7aff1e9c260b0beee.jpg' alt="Image02" style={{ width: '100%', height: 600, borderRadius: '8px' }} />
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <img src='https://i.pinimg.com/564x/9e/dc/c7/9edcc7a493b83f742c8fd742e6f159aa.jpg' alt="Image02" style={{ width: '100%', height: 600, borderRadius: '8px' }} />
                    </Grid>
                </Grid>

                <Button
                    variant="contained"
                    color="primary"
                    size='large'
                    sx={{ borderRadius: 1, mt: 4 }}
                >
                    DISCOVER
                </Button>
            </Box>
            <Container maxWidth="lg" sx={{ mt: 5, mb: 5 }}>
                <Typography variant="h3" align="center" sx={{ mb: 4, mt: 8, color: '#2a386e', fontWeight: 'bold' }}>
                    Our Collections
                </Typography>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <CardMedia
                            component="img"
                            image="https://i.pinimg.com/564x/27/0c/cf/270ccf81426605ea0176841658377558.jpg"
                            alt="Fragrance"
                            sx={{
                                maxWidth: '100%',
                                height: 'auto',
                                borderRadius: 2,
                                boxShadow: 3,
                            }}
                        />
                    </Grid>

                    <Grid item xs={12} md={6} container direction="column" justifyContent="center">
                        <Typography variant="h3" align="left" sx={{ color: '#2a386e', fontWeight: 'bold', mb: 2 }}>
                            Kids
                        </Typography>
                        <Typography variant="body1" align="left" sx={{ color: '#000', mb: 2 }}>
                            Explore a world of fun and fashion with our exclusive Kids Collection! Designed with comfort, durability, and style in mind, our range of clothing ensures your little ones look their best while staying active and playful. From vibrant colors and trendy patterns to soft fabrics and versatile designs, each piece is crafted to spark joy and creativity. Whether it's for school, playdates, or special occasions, our collection caters to every child’s unique personality and energy. Dress them in outfits they'll love—and you'll love how they look!
                        </Typography>
                    </Grid>
                </Grid>

                <Grid container spacing={4}>
                    <Grid item xs={12} md={6} container direction="column" justifyContent="center">
                        <Typography variant="h3" align="left" sx={{ color: '#2a386e', fontWeight: 'bold', mb: 2 }}>
                            Mens
                        </Typography>
                        <Typography variant="body1" align="left" sx={{ color: '#000', mb: 2 }}>
                            Step into sophistication with our Men's Collection, where classic style meets modern trends. From sharp formal wear to laid-back casuals, our curated range offers something for every occasion. Whether you're dressing for the office, a night out, or a relaxed weekend, you'll find pieces that are both versatile and timeless. With quality fabrics and attention to detail, our collection ensures that you stay comfortable while looking effortlessly stylish. Elevate your wardrobe with our selection of tailored suits, everyday essentials, and trendsetting accessories—because confidence starts with how you dress.
                        </Typography>

                    </Grid>

                    <Grid item xs={12} md={6}>
                        <CardMedia
                            component="img"
                            image="https://i.pinimg.com/564x/24/33/90/243390cdd14cc1a96e0ca0535f78760a.jpg"
                            alt="Fragrance"
                            sx={{
                                maxWidth: '100%',
                                height: 'auto',
                                borderRadius: 2,
                                boxShadow: 3,
                            }}
                        />
                    </Grid>
                </Grid>


                <Typography variant="h3" align="center" sx={{ mb: 4, mt: 8, color: '#2a386e', fontWeight: 'bold' }}>
                    Explore Now
                </Typography>
                <Grid container spacing={4}>
                    {collections.map((collection, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Fade in={true} timeout={(index + 1) * 500}>
                                <Card
                                    sx={{
                                        borderRadius: 2,
                                        boxShadow: 3,
                                        transition: 'transform 0.3s',
                                        '&:hover': {
                                            transform: 'scale(1.05)',
                                            boxShadow: 5,
                                        },
                                    }}
                                >
                                    <CardMedia
                                        component="img"
                                        height="200"
                                        image={collection.image}
                                        alt={collection.title}
                                    />
                                    <CardContent sx={{ textAlign: 'center' }}>
                                        <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', color: '#2a386e' }}>
                                            {collection.title}
                                        </Typography>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            component="a"
                                            href={collection.link}
                                            sx={{ borderRadius: 1 }}
                                        >
                                            Explore
                                        </Button>
                                    </CardContent>
                                </Card>
                            </Fade>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </>
    );
};

export default Collections;
