const Cat = () => {
  return (
    <div className="cat z-50">
      <div className="ears">
        <div className="ear left_ear">
          <div className="inner_ear left_inner_ear"></div>
        </div>
        <div className="ear right_ear">
          <div className="inner_ear right_inner_ear"></div>
        </div>
      </div>
      <div className="head">
        <div className="eyes">
          <div className="eye left_eye left-[34px]">
            <div className="irus"></div>

            <div className="reflection_1"></div>
            <div className="reflection_2"></div>
          </div>
          <div className="eye right_eye left-[90px]">
            <div className="irus"></div>

            <div className="reflection_1"></div>
            <div className="reflection_2"></div>
          </div>
        </div>
        <div className="snout"></div>
        <div className="nose"></div>
        <div className="mouth-left"></div>
        <div className="mouth-right"></div>
        <div className="forehead_markings_middle"></div>
        <div className="forehead_markings_left"></div>
        <div className="forehead_markings_right"></div>
        <div className="whisker whisker_mid_left"></div>
        <div className="whisker whisker_top_left"></div>
        <div className="whisker whisker_bottom_left"></div>
        <div className="whisker whisker_mid_right"></div>
        <div className="whisker whisker_top_right"></div>
        <div className="whisker whisker_bottom_right"></div>
        <div className="chest"></div>
        <div className="stomach"></div>
        <div className="paw_front_left">
          <div className="paw_stripe"></div>
          <div className="paw_stripe bottom_stripe"></div>
        </div>
        <div className="paw_front_right">
          <div className="paw_stripe"></div>
          <div className="paw_stripe bottom_stripe"></div>
        </div>
        <div className="paw_back_right"></div>
        <div className="paw_back_left"></div>
        <div className="tail">
          <div className="tail_markings top_marking"></div>
          <div className="tail_markings bottom_marking"></div>
        </div>
      </div>
    </div>
  );
};

export default Cat;
