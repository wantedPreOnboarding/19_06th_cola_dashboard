import React, { ReactElement, useState } from 'react';
import { Modal as MUIModal, Button } from '@mui/material';
import * as M from './Modal.styled';


const Modal = (): ReactElement => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Button onClick={handleOpen}>BUTTON</Button>
      <MUIModal open={open} onClose={handleClose}>
        <M.Wrapper>
          <M.Title>출고 신청 정보</M.Title>
          <M.Item>
            <M.Box>
              <M.Name>출고 전표 번호</M.Name>
            </M.Box>
            <M.Box>
              <M.Name>출고 요청일자</M.Name>
            </M.Box>
            <M.Box>
              <M.Name>출고 요청업체</M.Name>
            </M.Box>
            <M.Box>
              <M.Name>출고 요청자</M.Name>
            </M.Box>
            <M.Box>
              <M.Name>출고 방식</M.Name>
            </M.Box>
            <M.Box>
              <M.Name>출고 상태</M.Name>
            </M.Box>
            <M.Box>
              <M.Name>출고 유형</M.Name>
            </M.Box>
            <M.Box>
              <M.Name>파일명</M.Name>
            </M.Box>
          </M.Item>
        </M.Wrapper>
      </MUIModal>
    </>
  );
}

export default Modal;