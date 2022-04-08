const Cat = () => {
  return (
    <div className="cat">
      <div className="cat__ear">
        <div id="leftEar" className="cat__ear--left">
          <div className="cat__ear--left-inside"></div>
        </div>
        <div id="rightEar" className="cat__ear--right">
          <div className="cat__ear--right-inside"></div>
        </div>
      </div>

      <div id="head" className="cat__head">
        <div id="midDot" className="cat__head-dots">
          <div id="leftDot" className="cat__head-dots_first"></div>
          <div id="rightDot" className="cat__head-dots_second"></div>
        </div>
        <div className="cat__eye">
          <div className="cat__eye--left">
            <span className="pupil-left"></span>
          </div>
          <div className="cat__eye--right">
            <span className="pupil-right"></span>
          </div>
        </div>
        <div className="cat__nose"></div>

        <div className="cat__mouth-contour"></div>
        <div className="cat__mouth-left"></div>
        <div className="cat__mouth-right"></div>

        <div className="cat__whiskers-left"></div>
        <div className="cat__whiskers-right"></div>
      </div>

      <div className="cat__body">
        <div className="cat__chest"></div>

        <div className="cat__chest_inner"></div>

        <div className="cat__paw-left"></div>
        <div className="cat__paw-left_inner"></div>

        <div className="cat__paw-right"></div>
        <div className="cat__paw-right_inner"></div>

        <div id="tail" className="cat__tail"></div>
      </div>
    </div>
  );
};

export default Cat;
