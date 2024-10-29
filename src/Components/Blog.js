import React from 'react';
import { Container, Grid, Typography, Card, CardContent, CardMedia, Button, Box, Paper } from '@mui/material';

const blogPosts = [
    {
        title: 'The Future of Technology',
        excerpt: 'Explore the latest trends in technology that are shaping the future...',
        image: 'https://imageio.forbes.com/specials-images/imageserve/5ef3f7eec4f2390006f0c356/GUI--Graphical-User-Interface--concept-/960x0.jpg?format=jpg&width=960',
        link: '/blog/future-of-technology',
    },
    {
        title: 'Fashion Trends of 2024',
        excerpt: 'Discover what’s hot and happening in the fashion industry for the upcoming year...',
        image: 'https://i.ytimg.com/vi/B40Q5QWVYyw/maxresdefault.jpg',
        link: '/blog/fashion-trends-2024',
    },
    {
        title: 'Healthy Eating: Tips for a Better Life',
        excerpt: 'Learn how to maintain a healthy diet with these simple tips...',
        image: 'https://oncquest-blog.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2023/07/12043920/a.jpg',
        link: '/blog/healthy-eating-tips',
    },
];


const sidebarLinks = ['Technology', 'Fashion', 'Health', 'Lifestyle', 'Travel'];

const Blog = () => {
    return (
        <Box sx={{ bgcolor: '#f9f9f9', minHeight: '100vh', py: 4 }}>

            <Paper
                elevation={3}
                sx={{
                    bgcolor: '#d9dbda',
                    py: 4,
                    mb: 4,
                    textAlign: 'center',
                    borderRadius: 2,
                }}
            >
                <Container>
                    <Typography variant="h2" sx={{ fontWeight: 'bold', color: '#333' }}>
                        Welcome to Our Blog
                    </Typography>
                    <Typography variant="h6" sx={{ mt: 2, color: '#555' }}>
                        Stay updated with the latest trends, tips, and news.
                    </Typography>
                </Container>
            </Paper>

            <Container>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={8}>
                        {blogPosts.map((post, index) => (
                            <Card key={index} sx={{ display: 'flex', mb: 4, borderRadius: 2, boxShadow: 3 }}>
                                <CardMedia
                                    component="img"
                                    sx={{ width: 200, borderRadius: '8px 0 0 8px' }}
                                    image={post.image}
                                    alt={post.title}
                                />
                                <CardContent sx={{ flex: '1 0 auto' }}>
                                    <Typography component="h5" variant="h5" sx={{ fontWeight: 'bold' }}>
                                        {post.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" sx={{ my: 2 }}>
                                        {post.excerpt}
                                    </Typography>
                                    <Button variant="contained" color="primary" href={post.link} sx={{ mt: 1 }} size='small'>
                                        Read More
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <Paper elevation={3} sx={{ p: 3, mb: 4, borderRadius: 2 }}>
                            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                                Categories
                            </Typography>
                            {sidebarLinks.map((category, index) => (
                                <Typography key={index} variant="body2" sx={{ mb: 1 }}>
                                    <Button href={`/blog/category/${category.toLowerCase()}`} color="primary">
                                        {category}
                                    </Button>
                                </Typography>
                            ))}
                        </Paper>

                        <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
                            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                                Recent Posts
                            </Typography>
                            {blogPosts.slice(0, 3).map((post, index) => (
                                <Typography key={index} variant="body2" sx={{ mb: 1 }}>
                                    <Button href={post.link} color="primary">
                                        {post.title}
                                    </Button>
                                </Typography>
                            ))}
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Blog;
