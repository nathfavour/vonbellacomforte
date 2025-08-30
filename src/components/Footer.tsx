'use client';
import { Container, Grid, Link, Stack, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Container maxWidth="lg" sx={{ py: 6, bgcolor: 'grey.100', mt: 6, borderTop: 1, borderColor: 'divider' }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Typography variant="h6" fontWeight={700}>VonBella</Typography>
          <Typography variant="body2" color="text.secondary">© 2024 VonBella Fashion Palace. All rights reserved.</Typography>
        </Grid>
        <Grid item xs={6} md={2}>
          <Typography fontWeight={600} gutterBottom>Company</Typography>
          <StackedLinks links={['About Us', 'Contact Us', 'Careers']} />
        </Grid>
        <Grid item xs={6} md={3}>
          <Typography fontWeight={600} gutterBottom>Customer Service</Typography>
          <StackedLinks links={['FAQ', 'Shipping & Returns', 'Privacy Policy', 'Terms of Service']} />
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography fontWeight={600} gutterBottom>Follow Us</Typography>
          <StackedLinks links={['Twitter', 'Instagram', 'Facebook']} />
        </Grid>
      </Grid>
    </Container>
  );
}

function StackedLinks({ links }: { links: string[] }) {
  return (
    <Stack spacing={0.5}>
      {links.map((t) => (
        <Typography key={t} variant="body2" color="text.secondary">
          <Link href="#" underline="hover" color="inherit">{t}</Link>
        </Typography>
      ))}
    </Stack>
  );
}
