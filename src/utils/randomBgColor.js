const bgColor = () => {
  // hsl(120,100%,85%)
  const hue = (Math.random() * 360).toFixed(2);
  const saturation = (Math.random() * 100).toFixed(2);
  const lightness = 85;
  return `hsl(${hue},${saturation}%,${lightness}%)`;
};

export default bgColor
