// import { IWeltec } from '@/interface/IWeltec'
import { IWeltec } from "@/interface/IWeltec";
import React, { useEffect, useState } from "react";

export default function userData() {
  const [data, setData] = useState<IWeltec[]>([]);

  useEffect(() => {
    const myFetchdata = async () => {
      const data = await fetch("https://jsonplaceholder.typicode.com/posts");

      const p = (await data.json()) as IWeltec[];

      setData(p);

      console.log(p);
    };

    myFetchdata();
  }, []);

  return <div>
    {data.map((item, index) => (
      <div key={index}>
        <h2>{item.title}</h2>
        
        <p>{item.body}</p>
      </div>
    ))}
  </div>;
}
