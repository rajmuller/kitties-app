import { DNA } from "../../types";
import { animations, colors, eyeShapes, patterns } from "./attributes";

type CatProps = {
  dna: DNA;
  className?: string;
};

const Cat = ({ dna, className }: CatProps) => {
  const {
    animation,
    bodyColor,
    earPawColor: earColor,
    eyeColor,
    eyeShape,
    mouthTailColor,
    pattern,
    patternColor,
  } = dna;

  return (
    <div className={className}>
      <div className="cat__ear">
        <div
          id="leftEar"
          className={`cat__ear--left ${animations[animation].earLeft}`}
          style={{
            backgroundColor: colors[earColor],
          }}
        >
          <div className="cat__ear--left-inside"></div>
        </div>
        <div
          id="rightEar"
          className={`cat__ear--right scale(-1, 1) ${animations[animation].earRight}`}
          style={{
            backgroundColor: colors[earColor],
          }}
        >
          <div className="cat__ear--right-inside"></div>
        </div>
      </div>

      <div
        id="head"
        className={`cat__head ${animations[animation].head}`}
        style={{
          backgroundColor: colors[bodyColor],
        }}
      >
        <div
          id="midDot"
          className="cat__head-dots"
          style={{
            backgroundColor: colors[patternColor],
            ...patterns[pattern].mid,
          }}
        >
          <div
            id="leftDot"
            className="cat__head-dots_first"
            style={{
              backgroundColor: colors[patternColor],
              ...patterns[pattern].left,
            }}
          ></div>
          <div
            id="rightDot"
            className="cat__head-dots_second"
            style={{
              backgroundColor: colors[patternColor],
              ...patterns[pattern].right,
            }}
          ></div>
        </div>
        <div className="cat__eye">
          <div
            className="cat__eye--left"
            style={
              ["4", "5"].includes(eyeShape)
                ? {
                    ...eyeShapes[eyeShape],
                  }
                : {}
            }
          >
            <span
              className="pupil-left"
              style={{
                backgroundColor: colors[eyeColor],
                ...eyeShapes[eyeShape],
              }}
            ></span>
          </div>
          <div
            className="cat__eye--right"
            style={
              ["4", "5"].includes(eyeShape)
                ? {
                    ...eyeShapes[eyeShape],
                  }
                : {}
            }
          >
            <span
              className="pupil-right"
              style={{
                backgroundColor: colors[eyeColor],
                ...eyeShapes[eyeShape],
              }}
            ></span>
          </div>
        </div>
        <div className="cat__nose"></div>

        <div
          className="cat__mouth-contour"
          style={{
            backgroundColor: colors[mouthTailColor],
          }}
        />
        <div className="cat__mouth-left"></div>
        <div className="cat__mouth-right"></div>

        <div className="cat__whiskers-left"></div>
        <div className="cat__whiskers-right"></div>
      </div>

      <div className="cat__body">
        <div
          className="cat__chest"
          style={{
            backgroundColor: colors[bodyColor],
          }}
        ></div>

        <div className="cat__chest_inner"></div>

        <div
          style={{
            backgroundColor: colors[earColor],
          }}
        >
          <div className="cat__paw-left"></div>
          <div className="cat__paw-left_inner"></div>

          <div className="cat__paw-right"></div>
          <div className="cat__paw-right_inner"></div>
        </div>

        <div
          id="tail"
          className={`cat__tail ${animations[animation].tail}`}
          style={{
            backgroundColor: colors[mouthTailColor],
          }}
        ></div>
      </div>
    </div>
  );
};

export default Cat;
