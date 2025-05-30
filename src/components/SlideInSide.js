import React from 'react';
import './InfoBoda.css';
import UbicacionLink from './components/UbicacionLink';
import { Typography, Container, Box, Divider, Avatar } from '@mui/material';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import FadeIn from './components/FadeIn'; // Asegúrate de que FadeIn.js siga existiendo
import SlideInSide from './components/SlideInSide'; // Importa el nuevo componente

function InfoBoda() {
  // ¡REEMPLAZA ESTAS CON TUS URLs REALES DE GOOGLE MAPS!
  const iglesiaMapaUrl = 'https://maps.app.goo.gl/o3HzpkV8cpXeJFJ17';
  const localMapaUrl = 'https://maps.app.goo.gl/LG12MBGwnfWvusW9A';

  const imageUrl = 'https://res.cloudinary.com/dc9bcrbnh/image/upload/v1744156938/daniel/boda-header_yekvbq.jpg';
  const lugarRecepcion = 'Salón de Eventos "La Orquídea", Ciudad Satélite'; // Variable para el lugar de recepción

  return (
    <Container maxWidth="sm" className="info-boda-container">
      <FadeIn delay={100}>
        <Box textAlign="center" mb={3}>
          <Avatar
            alt="Daniel y Paola"
            src={imageUrl}
            sx={{ width: 120, height: 120, margin: '0 auto', marginBottom: 2 }}
          />
          <Typography variant="h4" className="titulo-principal">Daniel y Paola</Typography>
          <Typography variant="subtitle1" className="subtitulo">¡Con gran alegría!</Typography>
        </Box>
      </FadeIn>

      <SlideInSide direction="left" delay={300}>
        <Box mb={3} textAlign="center">
          <Typography variant="body1" className="texto-evento">
            Con la bendición de Dios y el cariño de nuestras familias,
          </Typography>
          <Typography variant="body1" className="texto-evento">
            queremos compartir con ustedes la felicidad de nuestro matrimonio.
          </Typography>
        </Box>
      </SlideInSide>

      <Divider style={{ backgroundColor: '#a78a6d', margin: '20px 0', height: '2px' }} />

      <SlideInSide direction="right" delay={500}>
        <Box mb={4} textAlign="center" id="ubicaciones-section"> {/* Añadimos un ID a la sección */}
          <Typography variant="h6" className="seccion-titulo" align="center">
            Ceremonia Religiosa
          </Typography>
          <Typography variant="body2" align="center" className="detalle-evento">
            Sábado, 26 de Abril de 2025
          </Typography>
          <Typography variant="body2" align="center" className="detalle-evento">
            Iglesia de "San Pedro", Plaza Sucre
          </Typography>
          <UbicacionLink nombre="Ver ubicación de la Iglesia" mapaUrl={iglesiaMapaUrl} />
        </Box>
      </SlideInSide>

      <Divider style={{ backgroundColor: '#89bdd3', margin: '20px 0', height: '2px' }} />

      <SlideInSide direction="left" delay={700}>
        <Box mb={4} textAlign="center">
          <Typography variant="h6" className="seccion-titulo" align="center">
            Recepción <MusicNoteIcon color="primary" sx={{ fontSize: 'inherit', verticalAlign: 'middle', ml: 1 }} />
          </Typography>
          <Typography variant="body2" align="center" className="detalle-evento">
            Al finalizar la ceremonia, los esperamos para celebrar y compartir
          </Typography>
          <Typography variant="body2" align="center" className="detalle-evento">
            momentos inolvidables en {lugarRecepcion}.
          </Typography>
          <UbicacionLink nombre="Ver ubicación de la Recepción" mapaUrl={localMapaUrl} />
        </Box>
      </SlideInSide>

      <Divider style={{ backgroundColor: '#a78a6d', margin: '20px 0', height: '2px' }} />

      <SlideInSide direction="right" delay={900}>
        <Box mb={4} textAlign="center" id="conteo-section">
          <Typography variant="h6" className="seccion-titulo" align="center">
            Conteo de Regalos
          </Typography>
          <Typography variant="body2" align="center" className="detalle-evento">
            El día siguiente, Domingo 27 de Abril a las 13:00,
          </Typography>
          <Typography variant="body2" align="center" className="detalle-evento">
            nos encantaría compartir con ustedes este momento en {lugarRecepcion}.
          </Typography>
          <UbicacionLink nombre="Ver ubicación del Conteo" mapaUrl={localMapaUrl} />
        </Box>
      </SlideInSide>

      <Divider style={{ backgroundColor: '#89bdd3', margin: '20px 0', height: '2px' }} />

      <FadeIn delay={1100}>
        <Box mt={4} textAlign="center">
          <Typography variant="body1" className="texto-agradecimiento">
            Su presencia es el regalo más valioso. ¡Los esperamos con ilusión!
          </Typography>
        </Box>
      </FadeIn>
    </Container>
  );
}

export default InfoBoda;