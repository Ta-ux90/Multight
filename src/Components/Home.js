import React from 'react';
import { Container, Grid, Typography, Button, Box, Paper, Avatar, Rating } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import { useNavigate } from 'react-router-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AutorenewIcon from '@mui/icons-material/Autorenew';

// --------------------------------------------

const Home = () => {
    const navigate = useNavigate();

    return (
        <Box sx={{ bgcolor: '#f9f9f9', minHeight: '100vh' }}>

            <Carousel
                showArrows={true}
                autoPlay={true}
                infiniteLoop={true}
                interval={3000}
                showThumbs={false}
                showStatus={false}
            >
                <Box sx={{ height: 600 }}>
                    <img
                        src="https://images.pexels.com/photos/3768005/pexels-photo-3768005.jpeg?cs=srgb&dl=pexels-willoworld-3768005.jpg&fm=jpg"
                        alt="Welcome to MULTIGHT"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <p className="legend">Welcome to MULTIGHT</p>
                </Box>
                <Box sx={{ height: 600 }}>
                    <img
                        src="https://images.pexels.com/photos/3965545/pexels-photo-3965545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="New Arrivals"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <p className="legend">New Arrivals Available Now</p>
                </Box>
                <Box sx={{ height: 600 }}>
                    <img
                        src="https://images.pexels.com/photos/5868272/pexels-photo-5868272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="Exclusive Offers"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <p className="legend">Shop Exclusive Offers</p>
                </Box>
            </Carousel>

            <Box sx={{ py: 4, mt: 10, mb: 5 }}>
                <Container>
                    <Grid container spacing={2}>
                        {[
                            {
                                icon: <LocalShippingIcon sx={{ fontSize: 40, color: '#1a1a40' }} />,
                                title: 'Free Shipping',
                                description: 'Above $5 Only',
                            },
                            {
                                icon: <VerifiedUserIcon sx={{ fontSize: 40, color: '#1a1a40' }} />,
                                title: 'Certified Organic',
                                description: '100% Guarantee',
                            },
                            {
                                icon: <AttachMoneyIcon sx={{ fontSize: 40, color: '#1a1a40' }} />,
                                title: 'Huge Savings',
                                description: 'At Lowest Price',
                            },
                            {
                                icon: <AutorenewIcon sx={{ fontSize: 40, color: '#1a1a40' }} />,
                                title: 'Easy Returns',
                                description: 'No Questions Asked',
                            },
                        ].map((service, index) => (
                            <Grid item xs={12} sm={6} md={3} key={index}>
                                <Paper
                                    elevation={0}
                                    sx={{
                                        p: 2,
                                        textAlign: 'center',
                                        bgcolor: '#bebec2',
                                        // color: 'white',
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}
                                >
                                    {service.icon}
                                    <Typography variant="h6" sx={{ fontWeight: 'bold', my: 1 }}>
                                        {service.title}
                                    </Typography>
                                    <Typography variant="body2">
                                        {service.description}
                                    </Typography>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            <Box sx={{ py: 6, textAlign: 'center' }}>
                <Container>
                    <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 2, color: '#2A386E' }}>
                        Welcome to MULTIGHT
                    </Typography>
                    <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
                        Your one-stop destination for the latest trends in fashion, technology, and more.
                    </Typography>
                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        onClick={() => navigate('/collection')}
                        sx={{ borderRadius: 5 }}
                    >
                        Shop Now
                    </Button>
                </Container>
            </Box>

            <Container sx={{ py: 6 }}>
                <Typography variant="h4" sx={{ fontWeight: 'bold', textAlign: 'center', mb: 4, color: '#2A386E' }}>
                    New Arrivals
                </Typography>
                <Grid container spacing={4}>
                    {[
                        {
                            img: 'https://images.pexels.com/photos/206434/pexels-photo-206434.jpeg?auto=compress&cs=tinysrgb&w=600',
                            title: 'Stylish Jacket',
                            description: 'Trendy and comfortable jackets for all.',
                        },
                        {
                            img: 'https://images.pexels.com/photos/994517/pexels-photo-994517.jpeg?auto=compress&cs=tinysrgb&w=600',
                            title: 'Summer Dress',
                            description: 'Light and stylish summer dresses for all.',
                        },
                        {
                            img: 'https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?auto=compress&cs=tinysrgb&w=600',
                            title: 'Modern Handbag',
                            description: 'Premium quality handbags for daily use.',
                        },
                        {
                            img: 'https://images.pexels.com/photos/298864/pexels-photo-298864.jpeg?auto=compress&cs=tinysrgb&w=600',
                            title: 'Casual Shoes',
                            description: 'Comfortable and trendy shoes for all.',
                        },
                    ].map((item, index) => (
                        <Grid item xs={12} md={3} key={index}>
                            <Paper elevation={3} sx={{ p: 2, textAlign: 'center', borderRadius: 3 }}>
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: 3 }}
                                />
                                <Typography variant="h6" sx={{ mt: 2, fontWeight: 'bold' }}>
                                    {item.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {item.description}
                                </Typography>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Container>

            <Box sx={{ py: 6, position: 'relative' }}>
                <Container maxWidth="lg">
                    <Typography variant="h4" sx={{ fontWeight: 'bold', textAlign: 'center', mb: 4 }}>
                        Customers Reviews
                    </Typography>
                    <Grid container spacing={4} alignItems="center">
                        <Grid item xs={12} md={4}>
                            <Paper elevation={3} sx={{ p: 3, height: 500, display: 'flex', flexDirection: 'column' }}>
                                <Rating value={5} readOnly sx={{ mb: 2 }} />
                                <Typography variant="body1" sx={{ flexGrow: 1, mb: 2 }}>
                                    "This shopping app is fantastic! I love how easy it is to find exactly what I'm looking for, thanks to the efficient search feature. The variety of products is impressive, and I especially appreciate the discounts and promotions that pop up regularly. My only minor complaint is that sometimes the app can be a bit slow during peak hours, but the excellent customer support more than makes up for it. I had an issue with my last order, and they resolved it within minutes. I definitely recommend this app for anyone who enjoys online shopping!"
                                </Typography>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <Avatar alt="Mila Kunis" src="https://cdn.openart.ai/published/SHsFC7RezIOFQ4NmmGTh/aLgqS4rP_Srjv_1024.webp" sx={{ mr: 2 }} />
                                    <Typography variant="subtitle1" fontWeight="bold">Mila Kunis</Typography>
                                </Box>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Paper elevation={3} sx={{ p: 3, height: 600, backgroundImage: 'url(https://i.pinimg.com/564x/e1/ac/31/e1ac31c13c0d14c870e60690688623fe.jpg)', backgroundSize: 'cover', color: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                                <Typography variant="h4" fontWeight="bold" sx={{ mb: 2 }}>
                                    Deal Of The Day
                                </Typography>
                                <Typography variant="h5" fontWeight="bold" sx={{ mb: 2 }}>
                                    15% Off On All Categories!
                                </Typography>
                                <Typography variant="body1" sx={{ mb: 3 }}>
                                    Shop what you want
                                </Typography>
                                <Button variant="contained" color="primary" size="large" onClick={() => navigate('/collection')} sx={{ bgcolor: '#4CAF50', '&:hover': { bgcolor: '#45a049' } }}>
                                    SHOP NOW
                                </Button>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Paper elevation={3} sx={{ p: 3, height: 500, display: 'flex', flexDirection: 'column' }}>
                                <Rating value={5} readOnly sx={{ mb: 2 }} />
                                <Typography variant="body1" sx={{ flexGrow: 1, mb: 2 }}>
                                    "I recently started using this shopping app, and I couldn’t be happier with my experience! The user interface is incredibly intuitive, making it easy to browse through a wide variety of products. I was impressed by the detailed product descriptions and high-quality images, which helped me make informed decisions. Additionally, the customer service team was prompt and helpful when I had a question about my order. Overall, this app has become my go-to for online shopping, and I highly recommend it to anyone looking for a hassle-free shopping experience!"
                                </Typography>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <Avatar alt="Mike Sendler" src="https://www.shutterstock.com/image-photo/profile-picture-smiling-successful-young-260nw-2040223583.jpg" sx={{ mr: 2 }} />
                                    <Typography variant="subtitle1" fontWeight="bold">Mike Sendler</Typography>
                                </Box>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            <Container sx={{ py: 6 }}>
                <Typography variant="h4" sx={{ fontWeight: 'bold', textAlign: 'center', mb: 4, color: '#2A386E' }}>
                    Our Featured Services
                </Typography>
                <Grid container spacing={4}>
                    {[
                        {
                            title: 'Free Shipping',
                            description: 'Get free shipping on all orders above $50.',
                        },
                        {
                            title: '24/7 Support',
                            description: 'We are here to assist you at any time of the day.',
                        },
                        {
                            title: 'Secure Payments',
                            description: 'Your payment details are secure with our encrypted systems.',
                        },
                    ].map((service, index) => (
                        <Grid item xs={12} md={4} key={index}>
                            <Paper elevation={3} sx={{ p: 4, textAlign: 'center', borderRadius: 3 }}>
                                <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
                                    {service.title}
                                </Typography>
                                <Typography variant="body1" sx={{ mb: 2 }}>
                                    {service.description}
                                </Typography>
                                <Button variant="contained" color="primary" sx={{ borderRadius: 5 }}>
                                    Learn More
                                </Button>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Container>

            <Box sx={{ py: 6, textAlign: 'center', bgcolor: '#2A386E', color: 'white' }}>
                <Container>
                    <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
                        Join Our Newsletter
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 4 }}>
                        Stay updated with the latest offers and product launches.
                    </Typography>
                    <Button variant="contained" color="primary" size="large" sx={{ borderRadius: 5 }}>
                        Subscribe Now
                    </Button>
                </Container>
            </Box>
        </Box>
    );
};

export default Home;
