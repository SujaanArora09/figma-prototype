"use client";

import { useMemo } from "react";
import Image from "next/image";

import { getShapeInfo } from "@/lib/utils";

const LeftSidebar = ({ allShapes }: { allShapes: Array<any> }) => {
  const memoizedShapes = useMemo(
    () => (
      <section className='no-scrollbar left-0 ml-4 flex h-full  min-w-[227px] select-none flex-col overflow-y-auto rounded-lg bg-white pb-20 text-primary-grey-100 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] max-sm:hidden'>
        <div className='flex flex-col'>
          {allShapes?.map((shape: any) => {
            const info = getShapeInfo(shape[1]?.type);
            return (
              <div
                key={shape[1]?.objectId}
                className='group mx-2 my-1 flex items-center gap-2 rounded-lg px-5 py-2.5 text-base hover:cursor-pointer hover:bg-[#e3f4fe]'
              >
                <Image
                  src={info?.icon}
                  alt='Layer'
                  width={16}
                  height={16}
                  className=''
                />
                <h3 className='text-sm font-semibold capitalize'>
                  {info.name}
                </h3>
              </div>
            );
          })}
        </div>
      </section>
    ),
    [allShapes?.length]
  );

  return memoizedShapes;
};

export default LeftSidebar;
