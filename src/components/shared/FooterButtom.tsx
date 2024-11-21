"use client";

import { useEffect, useState } from "react";

const FooterBottom = () => {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <div className="w-full py-10">
      <p className="text-center text-gray-500 text-base">
        &copy; {`${year}`}. All rights reserved by Md Jaoadul Islam
      </p>
    </div>
  );
};

export default FooterBottom;
