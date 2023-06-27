import { Box } from '@mui/material';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import { PAGE_MARGIN_TOP } from '../constants';

import Page from './Page';

const Portfolio = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <Box mt={`${PAGE_MARGIN_TOP}px`}>
        <Page />
      </Box>
    </DndProvider>
  );
};

export default Portfolio;
