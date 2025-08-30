'use client';
import { Box, Card, CardActionArea, Container, Grid, Typography } from '@mui/material';

type Category = {
  title: string;
  image: string;
};

const CATEGORIES: Category[] = [
  { title: 'Wears', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC64jIQzmHEBxnj-askVXB2dkyZsQ4_6bVaHXFmyhGpCINBbzaeZrCR5i3Xo0g7Whnsv_YPh6_OzkESBYLZdYpqbTTENnrseqyvgWDedEjI06KPGvPPNHLw0KQa39DaMGgd2_hwys1iY0-vQnkXTZadGA7lPVZlLZOzmYr2Duw97T2nTZhq39YKM8bnO6bCm7Vg9ZLWF6P5EUQB-qpJj8AfNw-PEtSIuZdGQY6rx9pcJTZdNkqQNEhQ7pQsTgFtH0R5cLu12FzJkAlG' },
  { title: 'Shoes', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDZ3_2ssxWY2i0nINgDY1Ve4-ElzTOV-neqmlu-KehNO8dsfW1S8S3aw4CkP4rfYnuSaqUp0dgn2XHjaXYa3KWneACTA-eIAa27tTBJ3rTZwMV_Sl4AIKYKZoOmJeedNv2N2hXjj2Rr0Jz_0C6Z2PRmGTAmrjm-1mCsrZlzydQ_Lv7OA-r_udhd3YZPTtTxwf3VnFYKXiEopQjDB6hX1ZVwWM3esX-gpEVKVE7QF2yUvouu-touzv436YefL8zD62gWkmQRzLqIti6x' },
  { title: 'Bags', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC6ccsyjuQE8Vzigmabkkcyzg6IovG4y9-tEa-dCVT1vAEAFr8AC7xe7viQiuGkPJLz8nVYNePBq8Bv43E952Gy9kHdcaLzvag0hcEH4e2KMacpFkvlxA3vxWcoou_InvKXzrdMo7iJu7QjtX9y1-obW3Qv1qieBzM_n3nyKkOTH6q5YmG_E8FCh-uhFE1uWJZYOm7lehynH7djNSv9TDEg7kNdwojTPJHDZPN2D-11J2aRzfXwJxZbA24CROdHeKfUzKNyflbHCQU8' },
  { title: 'Accessories', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAF7tFTPs5r54l6z3jsAMajSAdah7KE0XwQNbO5_7v9hl7NhMRLpt7nd-MU0MZ87OBQn-iHIAp6FurDnAqqS-ZlcxbZc5gg3w4oCsUht-s88Nv-IPOKlOwsLZD6-vk5GBfDXkJprHkLxP-Atdtbw8gyi29YlV2BQpE6hfvvn9oihtXy3y_l6hDsPED8Ub8ux8e-Bykiifc0I8heu4f7KqOmcraeMWMKq0UPO6EgQ4iV2KoMgZHjissM9EuAU4rI2uHBn4G8lCmf58eA' },
];

export default function CategoryGrid() {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 } }}>
      <Typography variant="h4" fontWeight={700} align="center" gutterBottom>Shop by Category</Typography>
      <Grid container spacing={2} sx={{ mt: 2 }}>
        {CATEGORIES.map((c) => (
          <Grid item xs={6} md={3} key={c.title}>
            <Card sx={{ position: 'relative', overflow: 'hidden', borderRadius: 2 }}>
              <CardActionArea>
                <Box sx={{ pt: '125%', backgroundImage: `url(${c.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
                <Box sx={{ position: 'absolute', inset: 0, bgcolor: 'rgba(0,0,0,0.2)' }} />
                <Typography variant="subtitle1" fontWeight={700} color="#fff" sx={{ position: 'absolute', bottom: 16, left: 16 }}>
                  {c.title}
                </Typography>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
