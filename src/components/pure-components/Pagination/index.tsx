/* eslint-disable prefer-spread */
"use client";
import { useState , JSX } from "react";

interface PaginationCustomProps{
  totalPage?: number;
  perPageCount?: number;
  pageCount?: number ;
  pervIconOrString?: JSX.Element;
  nextIconOrString?: JSX.Element;
}


function PaginationCustom(props : PaginationCustomProps) {
  const totalPage = 20;
  const [page, setPage] = useState<number>(1);
  const [totalCountPage] = useState<Array<number>>(
    Array.apply(null, Array(totalPage)).map(function (x, i) {
      return i + 1;
    })
  );

  function getDifference(a: number, b: number) {
    return Math.abs(a - b);
  }

  // for find all page  => totalData  / perPageCount

  return (
    <div className="mx-auto flex h-[50px] w-[310px] flex-row items-center justify-between rounded-2xl bg-blue-800 px-5">
      <button
        disabled={page === 1}
        className="cursor-pointer text-[#fff] disabled:cursor-not-allowed disabled:text-[#ddd]"
        onClick={() => setPage(page - 1)}
      >
        {props.pervIconOrString ? props.pervIconOrString : 'perv' }
      </button>

      <div className="flex flex-row gap-2 text-[#fff]">
        {getDifference(totalCountPage.length, page) <= 3  ? (
          <div className="flex flex-row items-center gap-4 w-11/12 justify-center">
            <span onClick={() => setPage(1)} className="">1</span>
            <span>...</span>
            <span
            onClick={() => setPage(totalCountPage.slice(Math.max(totalCountPage.length as number - 4, 0))[0])}
              className={` ${
                totalCountPage.slice(Math.max(totalCountPage.length as number - 4, 0))[0] === page ? "rounded-full bg-blue-900 px-4 py-2" : ""
              } ${
                getDifference(totalCountPage.length, page) > 2 &&
                getDifference(totalCountPage.length, page) <= 3
                  && "block"
                  
              }`}
            >
              {totalCountPage.slice(Math.max(totalCountPage.length as number - 4, 0))[0] }
            </span>
            {totalCountPage.slice(Math.max(totalCountPage.length as number - 3, 0)).map((item : number) => (
              <div
                key={item}
                className={`flex flex-row items-center gap-2 ${
                  page === item ? "rounded-full bg-blue-900 px-4 py-2" : ""
                }`}
                onClick={() => setPage(item)}
              >
                {item}
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-row items-center gap-4 w-11/12 justify-center">
            {page <= 2 ? <></> : <span>...</span>}
            {page <= 1 ? <></> :<div  onClick={() => setPage(page - 1)}>{page-1}</div>}
            <div className={`${page ?  "rounded-full bg-blue-900 px-4 py-2" : '' }`}>{page}</div>
            <div onClick={() => setPage(page + 1)}>{page+1}</div>
            <span>...</span>
            <span className="" onClick={() => setPage(totalCountPage.length)}>{totalCountPage.length}</span>
          </div>
        )}
      </div>
      <button
        className="cursor-pointer text-[#fff] disabled:cursor-not-allowed disabled:text-[#ddd]"
        disabled={page === totalCountPage.length}
        onClick={() => setPage(page + 1)}
      >
        {props.nextIconOrString ? props.nextIconOrString : 'next' }
      </button>
    </div>
  );
}
export default PaginationCustom;
