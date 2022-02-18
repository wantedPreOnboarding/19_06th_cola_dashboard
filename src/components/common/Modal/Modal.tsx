import React, { ReactElement, useState } from 'react';
import { Modal as MUIModal, Button, Box } from '@mui/material';
import { useGetOrderSheetQuery } from 'redux/services/orderSheet';
import * as M from './Modal.styled';

// 1. 데이터 출처
// 2. 출고자파일명
// 3. 이동상태
// 4, 주문서 양식
// 5. 주문번호
// 6. 연동상품ID
// 7. 주문명
// 8. 출고 상품명
// 9. 출고 상품코드
// 10. 출고 상품
// 11. 주문수량
// 12. 주문단위
// 13. 출고수량
// 14. 출고 창고명
// 15. 재고부족여부
// 16. 수량변경
// 17. 출고 취소 상품
// 18. 주문정보 ID
// 19. 주문자
// 20. 주문자 전화번호
// 21. 수취인
// 22. 수취인 전화번호
// 23. 수취인전화번호2
// 24. 수취인 주소 1
// 25. 수취인 주소 2
// 26. 메모
// 27. 택배사명


const Modal = (): ReactElement => {
  const { data } = useGetOrderSheetQuery(null);
  const item = data?.[4]
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  console.log(item);
  // 행 - 한줄 , col - 열
  return (
    <>
      <Button onClick={handleOpen}>BUTTON</Button>
      <MUIModal open={open} onClose={handleClose}>
        <M.Wrapper>
          <M.Title>데이터 출처</M.Title>
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
}

export default Modal;