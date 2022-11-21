import React, { memo } from "react";
import PropTypes from "prop-types";

/** 로딩바 컴포넌트 */
// --> https://mhnpd.github.io/react-loader-spinner/
import { MutatingDots } from "react-loader-spinner";

const Spinner = memo(({ loading, width, height }) => {
  return (
    <div>
      {" "}
      <MutatingDots visible={loading} height={height} width={width} color="#4fa94d" secondaryColor="#4fa94d" radius="12.5" ariaLabel="mutating-dots-loading" wrapperStyle={{ position: "absolute", zIndex: 9999, left: "50%", top: "50%", transform: "translate(-50%,-50%)" }} wrapperClass="" />
    </div>
  );
});

/** 기본값 정의 */
Spinner.defaultProps = {
  visible: false,
  width: 100,
  height: 100,
};

/** 데이터 타입 설정 */
Spinner.propTypes = {
  visible: PropTypes.bool.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default Spinner;
