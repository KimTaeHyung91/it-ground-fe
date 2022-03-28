import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCount, initCount, onChangeCount } from "../modules/slices/sample";

// redux sample custom hooks
const useSample = () => {
  // 카운트 수
  const count = useSelector((state) => state.sample.count);
  const dispatch = useDispatch();

  // 서버통신 - 카운트 수 가져오기
  const tempCount = useCallback(async () => {
    dispatch(getCount(3));
  }, [dispatch]);

  // 카운트 수 변경
  const onChange = useCallback(
    (num: number) => {
      dispatch(onChangeCount(count + num));
    },
    [dispatch, count],
  );

  // 카운트 수 초기화
  const init = useCallback(() => {
    dispatch(initCount());
  }, [dispatch]);

  return {
    count,
    tempCount,
    onChange,
    init,
  };
};

export default useSample;
