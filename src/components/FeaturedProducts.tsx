'use client';
import { Container, Typography } from '@mui/material';
import { Grid } from '@mui/material';
import ProductCard, { Product } from './ProductCard';

const FEATURED: Product[] = [
  { id: 101, name: 'Elegant Summer Dress', price: 79.99, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCQP0O5LZ1eeCh0HR3J_4jAhHo-2yN8ZyEqKyWH5ICZl9UUjsQmxzFPXvcG_3-iCicNEq3E3n0dNzW6_TCn89lZkhnXlB-KZr2OUPmqvrDVUGYPyZLR2gbX_8IkKgjBU9uQcZ3aFx8OXpkA7DVfIurtXdujYCJ-jHsek3hEk-yHmH41FtAueH-GsXS3hBKl8HdEQ1-nVD2MVz4DX45B0UkvQY_foOD2qI6b0seZl4eOSPddXMtUL7YXxvsFueItbNv5CBihu65zB2IO', category: 'Dresses' },
  { id: 102, name: 'Classic Leather Handbag', price: 149.99, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCZMhIgJSI9CAe542pV_Nw3mPMnIii1H_NHTtt-aQtfEuAfAGcBJFSz4djokZihRlRnadLteuKz28j81JMT0dtWo6kXDETu04QVfARXHaw7DpjQLQ7gTj8FUk0BFoebccnHgyCd1qzAqcWvUyTZLB2vZaU4KIg_1ImcyqLZymr3xlwL8E8yyV8uxYTMaKL0c0sT_OUzMcTLDKUeHd51iLeGi4pX7wyr2YgI8dr6G9bPtbPSTmoPyMBLJaR9AHCr1WG43etnlfo1BT3P', category: 'Bags' },
  { id: 103, name: 'Stylish Ankle Boots', price: 129.99, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDRkKt2RVb3PlhZe19CFLzZx0HplED-wEq2aUsatwDTXjIBgqbZlqvliE3gNncFnWSVzMekz7zSBi5X8l6qgD87xBuZWwveVNkaSWs9I18YjGjQy7iQFd4KOn5cDNiSUgpcfdL2j60bz7woTM0bT3M6xTiNncLdOegzO3AfCbfEA9qT7q__y-yS9dMGi-Chdctgo8V_LbhrMS4NqrIipRh5pAdmJ9Xt5Phbv1qOwmeO6M94T84Vhvrove6eMVKIRjDYGJranQBvGKFd', category: 'Shoes' },
  { id: 104, name: 'Statement Necklace', price: 49.99, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB-8Dcf6b_J3vxCXRmclF4Br0t-3KrRAOWJxg9PROKMyC_VEijfDnzOQBgwidg-OHw4I4DrjtEOcka5mYWwtWcwdlpv5SbMd6id3Ahyqv8vhC1SmTNUOS4FFhHYddqv1qINbf_19VdnpumyWTtvQZrVca3ZxhhP_CZf4FVIbQ9ztcK-Plm0UXjSizcM_lKZlxOorEsCNuKbcrfhYr5AtsVdpQ828m5GL6V8vd9J1wpR0bcIvRybfuiQTBvQHhNVetlOkUnebS3-_DOu', category: 'Accessories' },
];

export default function FeaturedProducts() {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 } }}>
      <Typography variant="h4" fontWeight={700} align="center" gutterBottom>Featured Products</Typography>
      <Grid2 container spacing={3} sx={{ mt: 1 }}>
        {FEATURED.map((p) => (
          <Grid2 xs={12} sm={6} md={3} key={p.id}>
            <ProductCard product={p} />
          </Grid2>
        ))}
      </Grid2>
    </Container>
  );
}
