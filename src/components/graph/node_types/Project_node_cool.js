import { memo, useCallback } from "react";
import { Handle, Position, NodeResizer } from "reactflow";

const CoolFeature = ({
  data,
  isConnectable,
  buttons,
  border_color = "border-indigo-500",
}) => {
  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);

  return (
    <div className="relative cursor-pointer">
      <span
        className={
          "absolute top-0 left-0 w-full h-full mt-1 ml-1 " +
          border_color +
          " rounded-lg"
        }
      ></span>

      <div
        className={
          "relative p-6 bg-white border-2 " +
          border_color +
          " rounded-lg hover:scale-105 transition duration-500"
        }
      >
        <div className="flex items-center">
          <span>🛠️</span>
          <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
            {data.title}
          </h3>
        </div>
        <p className="text-gray-600">{data.description}</p>
        {data?.buttons?.map((button, index) => (
          <div>
            <a href={button.link} key={index} target="_blank">
              <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-pink-500 hover:border-transparent rounded">
                {button.title}
              </button>
            </a>
          </div>
        ))}
      </div>

      <Handle
        id="bottom_source"
        type="source"
        position={Position.Bottom}
        className="Bottom-s"
        isConnectable={isConnectable}
      />
      <Handle
        type="source"
        position={Position.Top}
        id="top_source"
        className="Top-s"
        isConnectable={isConnectable}
      />
      <Handle
        type="source"
        position={Position.Left}
        id="left_source"
        className="Left-s"
        isConnectable={isConnectable}
      />
      <Handle
        type="source"
        position={Position.Right}
        id="right_source"
        className="Right-10"
      />
      <Handle
        type="target"
        position={Position.Right}
        id="right_target"
        className="Right-T"
      />
      <Handle
        type="target"
        position={Position.Left}
        id="left_target"
        className="Left-T"
      />
      <Handle
        type="target"
        position={Position.Top}
        id="top_target"
        className="top-5-T"
      />
      <Handle
        type="target"
        position={Position.Bottom}
        id="bottom_target"
        className="Bottom-s"
      />
    </div>
  );
};

export default memo(CoolFeature);
