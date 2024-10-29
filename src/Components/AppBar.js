import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Button from '@mui/material/Button';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import WaterDropOutlinedIcon from '@mui/icons-material/WaterDropOutlined';
import { Avatar } from '@mui/material';

const categories = ['Care Accessories', 'Men Clothing', 'Women Clothing', 'Electronics', 'Kitchens'];

export default function ByminAppBar() {
    const [anchorEl, setAnchorEl] = useState(null);
    const [categoriesAnchorEl, setCategoriesAnchorEl] = useState(null);
    const navigate = useNavigate();

    const handleCategoriesMenuOpen = (event) => {
        setCategoriesAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        setCategoriesAnchorEl(null);
    };

    const handleCategoryClick = (category) => {
        handleMenuClose();
        navigate(`/shop/${category}`);
    };

    const menuId = 'primary-search-account-menu';

    const categoriesMenuId = 'categories-menu';
    const renderCategoriesMenu = (
        <Menu
            anchorEl={categoriesAnchorEl}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            id={categoriesMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }}
            open={Boolean(categoriesAnchorEl)}
            onClose={handleMenuClose}
        >
            {categories.map((category) => (
                <MenuItem key={category} onClick={() => handleCategoryClick(category)}>
                    {category}
                </MenuItem>
            ))}
        </Menu>
    );

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ bgcolor: '#ffffff', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)' }}>
                <Toolbar>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ display: { xs: 'none', sm: 'block' }, color: '#2a386e', fontWeight: 'bold' }}
                    >
                        <WaterDropOutlinedIcon sx={{ mt: 0.3 }} />  MULTIGHT
                    </Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <IconButton size="large" aria-label="show cart">
                            <Badge badgeContent={4} color="error">
                                <ShoppingCartIcon />
                            </Badge>
                        </IconButton>
                        <IconButton
                            size="large"
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                        >
                            <Avatar alt="Remy Sharp" src="https://i.pinimg.com/564x/e0/86/f2/e086f2ef0c20e6bacd9d707c831a165d.jpg" />
                        </IconButton>
                    </Box>
                </Toolbar>
                <Box
                    sx={{
                        bgcolor: '#2a386e',
                        color: 'white',
                        display: 'flex',
                        justifyContent: 'center',
                        p: 1,
                    }}
                >
                    <Button
                        color="inherit"
                        component={Link}
                        to="/"
                        sx={{
                            '&:hover': { bgcolor: '#1f2a4c' },
                            mx: 1,
                        }}
                    >
                        Home
                    </Button>
                    <Button
                        color="inherit"
                        endIcon={<ArrowDropDownIcon />}
                        onClick={handleCategoriesMenuOpen}
                        aria-controls={categoriesMenuId}
                        aria-haspopup="true"
                        sx={{
                            '&:hover': { bgcolor: '#1f2a4c' },
                            mx: 1,
                        }}
                    >
                        Shop
                    </Button>
                    <Button
                        color="inherit"
                        component={Link}
                        to="/collection"
                        sx={{
                            '&:hover': { bgcolor: '#1f2a4c' },
                            mx: 1,
                        }}
                    >
                        Collections
                    </Button>
                    <Button
                        color="inherit"
                        component={Link}
                        to="/blog"
                        sx={{
                            '&:hover': { bgcolor: '#1f2a4c' },
                            mx: 1,
                        }}
                    >
                        Blog
                    </Button>
                    <Button
                        color="inherit"
                        component={Link}
                        to="/about"
                        sx={{
                            '&:hover': { bgcolor: '#1f2a4c' },
                            mx: 1,
                        }}
                    >
                        About Us
                    </Button>
                    <Button
                        color="inherit"
                        component={Link}
                        to="/contact"
                        sx={{
                            '&:hover': { bgcolor: '#1f2a4c' },
                            mx: 1,
                        }}
                    >
                        Contact
                    </Button>
                </Box>
            </AppBar>

            {renderCategoriesMenu}
        </Box>
    );
}
