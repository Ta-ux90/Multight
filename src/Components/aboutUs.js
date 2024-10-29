import React from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  Grid, 
  Card, 
  CardContent, 
  CardMedia,
  Button,
} from '@mui/material';
import { 
  ShoppingCart, 
  LocalShipping, 
  ThumbUp, 
  EmojiEvents 
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';


const AboutUs = () => {
    const navigate = useNavigate();
  return (
    <Box sx={{ bgcolor: '#f9f9f9', minHeight: '100vh', py: 8 }}>
      <Container maxWidth="lg">
        {/* Hero Section */}
        <Box sx={{ mb: 8, textAlign: 'center' }}>
          <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 2, color: '#2A386E' }}>
            About MULTIGHT
          </Typography>
          <Typography variant="h5" sx={{ mb: 4, color: '#666' }}>
            Your One-Stop Shop for Quality Products
          </Typography>
          <Button variant="contained" size="large" sx={{ 
            bgcolor: '#4CAF50', 
            '&:hover': { bgcolor: '#45a049' },
            borderRadius: 50,
            px: 4
          }}>
            Shop Now
          </Button>
        </Box>

        {/* Our Story Section */}
        <Grid container spacing={4} sx={{ mb: 8 }}>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 3, color: '#2A386E' }}>
              Our Story
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
              Founded in 2010, MULTIGHT began as a small local shop with a big dream: to provide high-quality products at affordable prices. Over the years, we've grown into a leading online retailer, serving customers nationwide with a wide range of products from fashion to electronics.
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              Our commitment to customer satisfaction, innovative solutions, and sustainable practices has made us a trusted name in the e-commerce industry. At <b>MULTIGHT</b> , we're not just selling products; we're building relationships and creating experiences.
            </Typography>
            <Typography variant="body1">
            Our journey is fueled by our customers' trust and the belief that shopping should be fun, accessible, and stress-free. Whether you're here for a quick buy or a deep dive into the latest trends, we’re here to make sure your experience is nothing short of exceptional.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box component="img" src="https://i.pinimg.com/736x/25/37/30/2537303f2c5413588a77fe960c0dbe3f.jpg" alt="Our Store" sx={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover', 
              borderRadius: 2 
            }} />
          </Grid>
        </Grid>

        {/* Our Mission */}
        <Box sx={{ mb: 8, textAlign: 'center' }}>
          <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 3, color: '#2A386E' }}>
            Our Mission
          </Typography>
          <Typography variant="h6" sx={{ maxWidth: '800px', margin: 'auto', color: '#666' }}>
            To empower our customers with high-quality, affordable products while promoting sustainability and innovation in the retail industry.
          </Typography>
        </Box>

        {/* Key Features */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 4, textAlign: 'center', color: '#2A386E' }}>
            Why Choose MULTIGHT?
          </Typography>
          <Grid container spacing={3}>
            {[
              { icon: <ShoppingCart />, title: 'Wide Selection', description: 'Over 100,000 products across various categories' },
              { icon: <LocalShipping />, title: 'Fast Delivery', description: 'Free shipping on orders over $50' },
              { icon: <ThumbUp />, title: 'Quality Guarantee', description: '30-day money-back guarantee on all purchases' },
              { icon: <EmojiEvents />, title: 'Award-Winning Service', description: 'Recognized for excellence in customer support' },
            ].map((feature, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', p: 2 }}>
                  <Box sx={{ m: 2, color: '#4CAF50' }}>{feature.icon}</Box>
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 'bold', textAlign: 'center' }}>
                      {feature.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center' }}>
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Team Section */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 4, textAlign: 'center', color: '#2A386E' }}>
            Meet Our Team
          </Typography>
          <Grid container spacing={4}>
            {[
              { name: 'John Doe', position: 'CEO & Founder', image: 'https://www.shutterstock.com/image-photo/close-portrait-smiling-30s-caucasian-260nw-2246095709.jpg' },
              { name: 'Jane Smith', position: 'Head of Operations', image: 'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxhY2slMjBtYW58ZW58MHx8MHx8fDA%3D' },
              { name: 'Mike Johnson', position: 'Customer Service Manager', image: 'https://img.freepik.com/free-photo/cheerful-indian-businessman-smiling-closeup-portrait-jobs-career-campaign_53876-129416.jpg' },
            ].map((member, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card sx={{ height: '100%' }}>
                  <CardMedia
                    component="img"
                    height="240"
                    image={member.image}
                    alt={member.name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
                      {member.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {member.position}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Call to Action */}
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 3, color: '#2A386E' }}>
            Ready to Start Shopping?
          </Typography>
          <Button variant="contained" size="large" onClick={() => navigate('/collection')} sx={{ 
            bgcolor: '#4CAF50', 
            '&:hover': { bgcolor: '#45a049' },
            borderRadius: 50,
            px: 4
          }}>
            Explore Our Products
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutUs;