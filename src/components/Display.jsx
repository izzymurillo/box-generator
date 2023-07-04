import React from "react";

const Display = ({ boxes }) => {
  return (
    <div className="card mt-3">
      <div className="card-body">
        <h5 className="card-title">Box Display</h5>
        <div className="d-flex flex-wrap gap-2">
          {boxes.length > 0 &&
            //  ^^ in case there are errors
            boxes.map((box, idx) => {
              // ^^ need the index when we .map
              return (
                <div
                  key={idx}
                  style={{
                    backgroundColor: box.color,
                    width: `${box.dimensions}px`,
                    height: `${box.dimensions}px`,
                  }}
                  // ^^^ need double curly for style
                ></div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Display;
