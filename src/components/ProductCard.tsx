'use client';
import { Card, CardContent, CardMedia, Chip, Stack, Typography } from '@mui/material';

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  originalPrice?: number;
}

export default function ProductCard({ product }: { product: Product }) {
  const isOnSale = !!product.originalPrice && product.originalPrice > product.price;
  return (
    <Card sx={{ cursor: 'pointer' }}>
      <CardMedia component="img" image={product.image} alt={product.name} sx={{ aspectRatio: '1 / 1' }} />
      <CardContent>
        <Stack spacing={0.5}>
          <Typography variant="caption" color="text.secondary" sx={{ letterSpacing: 1 }}>{product.category.toUpperCase()}</Typography>
          <Typography variant="subtitle1" fontWeight={600}>{product.name}</Typography>
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography variant="subtitle1" fontWeight={700}>${product.price}</Typography>
            {isOnSale && <Typography variant="body2" color="text.secondary" sx={{ textDecoration: 'line-through' }}>${product.originalPrice}</Typography>}
            {isOnSale && <Chip size="small" color="error" label="SALE" />}
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}
