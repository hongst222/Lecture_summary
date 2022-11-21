/**
 * Redux-Slice에서 반복적으로 사용되는 처리로직을 재사용하기 위해 만든 모듈
 */
export const pending = (state, { payload }) => {
  return { ...state, loading: true };
};

export const fulfilled = (state, { payload }) => {
  return {
    data: payload,
    loading: false,
    error: null,
  };
};

export const rejected = (state, { payload }) => {
  return {
    ...state,
    loading: false,
    error: {
      code: payload?.status ? payload.status : 500,
      message: payload?.statusText ? payload.statusText : "Server Error",
    },
  };
};
