const MushroomCap = ({ capColor, capShading, dotColor }) => {
  return (
    <div>
      {/* mushroom cap */}
      <svg
        id="mushroomCap"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -0.5 16 8"
        shape-rendering="crispEdges"
      >
        <metadata>
          Made with Pixels to Svg https://codepen.io/shshaw/pen/XbxvNj
        </metadata>
        <path
          stroke={capColor}
          d="M5 1h6M4 2h8M3 3h10M2 4h12M1 5h14M1 6h14M2 7h12"
        />
        {/* mushroom cap shading*/}
        <svg
          id="mushroomCapShade"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 -0.5 16 7"
          shape-rendering="crispEdges"
        >
          <metadata>
            Made with Pixels to Svg https://codepen.io/shshaw/pen/XbxvNj
          </metadata>
          <path stroke={capShading} d="M5 0h6M4 1h1M3 2h1M2 3h1M1 5h2M2 6h12" />
        </svg>
        {/* mushroom cap dots*/}
        <svg
          id="mushroomCapDots"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 -0.5 16 7"
          shape-rendering="crispEdges"
        >
          <metadata>
            Made with Pixels to Svg https://codepen.io/shshaw/pen/XbxvNj
          </metadata>
          <path
            stroke={dotColor}
            d="M7 1h1M5 2h1M10 2h1M1 4h1M7 4h1M12 4h1M4 5h1M10 5h1M14 5h1"
          />
        </svg>
      </svg>
    </div>
  );
};

export default MushroomCap;
