'use client';
import { useHero } from "@/hooks/useHero";
import { Box, Button, Container, Typography } from '@mui/material';

export default function HeroBanner() {
  const { title, subtitle, cta, backgroundUrl } = useHero();
  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: { xs: 480, md: '80vh' },
        display: 'flex',
        alignItems: 'center',
        color: '#fff',
        backgroundImage: `url(${backgroundUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        '&:before': { content: '""', position: 'absolute', inset: 0, bgcolor: 'rgba(0,0,0,0.3)' },
      }}
    >
      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        <Typography variant="h2" fontWeight={900} gutterBottom>{title}</Typography>
        <Typography variant="h6" gutterBottom>{subtitle}</Typography>
        <Button href={cta.href} variant="contained" color="primary" size="large" sx={{ mt: 2 }}>
          {cta.label}
        </Button>
      </Container>
    </Box>
  );
}
