import React from 'react';

export const EnpointMap = ({ text, imagen, onPress }: any) => (
  <div className="relative bottom-0 mb-4" onClick={onPress}>
    <div className="w-full h-full overflow-hidden text-center bg-purple table cursor-pointer">
      <img src="/Pin_map.png" className="w-9 h-15 visible group-hover:hidden" />
      <img
        src={imagen}
        alt={text}
        className="rounded-full object-cover relative bottom-[45px] left-[2px] object-center w-8 h-8 visible group-hover:hidden"
      />
    </div>
  </div>
);