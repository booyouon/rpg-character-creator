const MushroomFace = ({ faceColor, faceShading, eyeColor, cheeksColor }) => {
  return (
    <div
      style={{ padding: "0", margin: "0", position: "relative", top: "-3px" }}
    >
      {/* mushroom face*/}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -0.5 14 8"
        shape-rendering="crispEdges"
        style={{ padding: "0", margin: "0" }}
        x="110"
      >
        <metadata>
          Made with Pixels to Svg https://codepen.io/shshaw/pen/XbxvNj
        </metadata>
        <path
          stroke={faceColor}
          d="M2 0h10M1 1h12M1 2h12M1 3h12M1 4h12M1 5h12M2 6h10"
        />
        {/* mushroom eyes*/}
        <rect fill={`${eyeColor}`} x={5} y={1} width={1} height={1.5} />
        <rect fill={`${eyeColor}`} x={8} y={1} width={1} height={1.5} />
        {/* mushroom cheeks*/}
        <rect fill={cheeksColor} x={4} y={2.5} width={1} height={1} />
        <rect fill={cheeksColor} x={9} y={2.5} width={1} height={1} />

        {/* mushroom face shading*/}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 -0.5 14 7"
          shape-rendering="crispEdges"
        >
          <metadata>
            Made with Pixels to Svg https://codepen.io/shshaw/pen/XbxvNj
          </metadata>
          <path stroke={faceShading} d="M1 4h1M12 4h1M1 5h2M11 5h2M2 6h10" />
        </svg>
      </svg>
    </div>
  );
};

export default MushroomFace;
