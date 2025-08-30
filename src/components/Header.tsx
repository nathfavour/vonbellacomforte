'use client';
import { AppBar, Toolbar, Typography, IconButton, Stack, Container } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

export default function Header() {
  return (
    <AppBar position="sticky" color="inherit" elevation={0} sx={{ backdropFilter: 'blur(6px)', borderBottom: 1, borderColor: 'divider' }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography variant="h6" fontWeight={700}>VonBella</Typography>
          </Stack>
          <Stack direction="row" spacing={3} sx={{ display: { xs: 'none', md: 'flex' } }}>
            {['New Arrivals', 'Wears', 'Shoes', 'Bags', 'Accessories'].map((label) => (
              <Typography key={label} variant="body2" sx={{ cursor: 'pointer' }}>{label}</Typography>
            ))}
          </Stack>
          <Stack direction="row" spacing={1}>
            <IconButton size="small"><SearchIcon /></IconButton>
            <IconButton size="small"><AccountCircleIcon /></IconButton>
            <IconButton size="small"><ShoppingBagIcon /></IconButton>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
