import React, { ReactElement, useState } from 'react';
//redux
import { useAppSelector } from 'hooks';
import { useGetOrderSheetQuery } from 'redux/services/orderSheet';
import { useDispatch } from 'react-redux';
import { renewalOpenState } from 'redux/slices/modal';
//style
import { Modal as MUIModal, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import * as M from './Modal.styled';

const Modal = (): ReactElement => {
  //redux
  const { data } = useGetOrderSheetQuery(null);
  const modalState = useAppSelector(state => state.modal);
  const dispatch = useDispatch();

  const item = data?.[modalState.modalId];
  const handleClose = () => dispatch(renewalOpenState(true));

  return (
    <>
      <MUIModal open={modalState.isOpen} onClose={handleClose}>
        <M.Wrapper>
          <M.Header>
            <M.Title>데이터 출처</M.Title>
            <Button onClick={handleClose}>
              <CloseIcon />
            </Button>
          </M.Header>
          <M.Item>
            <M.Box>
              <M.Name>데이터 출처</M.Name>
              <M.Text>{item?.source}</M.Text>
              <M.Name>이동상태</M.Name>
              <M.Text>{item?.movementType}</M.Text>
            </M.Box>
            <M.Box>
              <M.Name>출고자 파일명</M.Name>
              <M.Text>{item?.outgoingFileName}</M.Text>
              <M.Name>주문서 양식</M.Name>
              <M.Text>{item?.orderSheetType}</M.Text>
            </M.Box>
            <M.Box>
              <M.Name>주문 번호</M.Name>
              <M.Text>{item?.orderId}</M.Text>
              <M.Name>연동상품ID</M.Name>
              <M.Text>{item?.relativerProductId}</M.Text>
            </M.Box>
            <M.Box>
              <M.Name>주문명</M.Name>
              <M.Text>{item?.orderName}</M.Text>
              <M.Name>파일명</M.Name>
              <M.Text>{item?.orderName}</M.Text>
            </M.Box>
            <M.Box>
              <M.Name>출고상품코드</M.Name>
              <M.Text>{item?.outgoingProductCode}</M.Text>
              <M.Name>출고상품</M.Name>
              <M.Text>{item?.outgoingProductId}</M.Text>
            </M.Box>
            <M.Box>
              <M.Name>주문수량</M.Name>
              <M.Text>{item?.orderCount}</M.Text>
              <M.Name>주문단위</M.Name>
              <M.Text>{item?.orderUnit}</M.Text>
            </M.Box>
            <M.Box>
              <M.Name>출고수량</M.Name>
              <M.Text>{item?.outgoingProductCount}</M.Text>
              <M.Name>출고창고명</M.Name>
              <M.Text>{item?.outgoingContainerName}</M.Text>
            </M.Box>
            <M.Box>
              <M.Name>재고부족여부</M.Name>
              <M.Text>{item?.outOfStockYype}</M.Text>
              <M.Name>수량변경</M.Name>
              <M.Text>{item?.outgoingOrderCancled}</M.Text>
            </M.Box>
            <M.Box>
              <M.Name>출고취소(상품)</M.Name>
              <M.Text>{item?.outgoingProductCancel}</M.Text>
              <M.Name>주문취소ID</M.Name>
              <M.Text>{item?.orderInfoId}</M.Text>
            </M.Box>
            <M.Box>
              <M.Name>주문자</M.Name>
              <M.Text>{item?.ordererName}</M.Text>
              <M.Name>수취인</M.Name>
              <M.Text>{item?.receiverName}</M.Text>
            </M.Box>
            <M.Box>
              <M.Name>수취인전화번호1</M.Name>
              <M.Text>{item?.receiverPhone1}</M.Text>
              <M.Name>수취인전화번호1</M.Name>
              <M.Text>{item?.receiverPhone2}</M.Text>
            </M.Box>
            <M.Box>
              <M.Name>수취인주소1</M.Name>
              <M.Text>{item?.receiverAddress1}</M.Text>
              <M.Name>수취인주소2</M.Name>
              <M.Text>{item?.receiverAddress2}</M.Text>
            </M.Box>
            <M.Box>
              <M.Name>메모</M.Name>
              <M.Text>{item?.memo}</M.Text>
              <M.Name>택배사명</M.Name>
              <M.Text>{item?.courier}</M.Text>
            </M.Box>
          </M.Item>
        </M.Wrapper>
      </MUIModal>
    </>
  );
};

export default Modal;
