import React, { ReactElement, useState } from 'react';
import { Modal as MuiModal, Box, Typography } from '@mui/material';


const Modal = (): ReactElement => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <MuiModal open={open}>
        <Box>
          <Typography variant="h1">출고 신청 정보</Typography>
        </Box>
      </MuiModal>
    </div>
  );
}

export default Modal;