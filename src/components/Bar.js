import React from "react";

function Bar({ value: { icon, name, level } }) {
  const bar_width = `${level}%`;
  return (
    <div className="bar">
      <div
        className="bar-wrapper"
        style={{
          width: bar_width,
        }}
      >
        <span className="bar-name">{name}</span>
      </div>
    </div>
  );
}

export default Bar;
