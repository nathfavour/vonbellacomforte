'use client';
import { Button, Container, Stack, TextField, Typography } from '@mui/material';

export default function Newsletter() {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 } }}>
      <Stack spacing={2} alignItems="center" textAlign="center" sx={{ maxWidth: 560, mx: 'auto' }}>
        <Typography variant="h4" fontWeight={700}>Stay in the Loop</Typography>
        <Typography color="text.secondary">Sign up for our newsletter to receive exclusive offers and updates on new arrivals.</Typography>
        <Stack direction="row" spacing={1} width="100%">
          <TextField fullWidth size="medium" placeholder="Enter your email" type="email" />
          <Button variant="contained">Subscribe</Button>
        </Stack>
      </Stack>
    </Container>
  );
}
