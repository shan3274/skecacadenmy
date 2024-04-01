import { db } from "@/utils/firebase";
import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";

const Addprograms = () => {
  const [dbname, setDbname] = useState();
  const [h1, setH1] = useState("");
  const [img, setImg] = useState("");
  const [p1, setP1] = useState("");
  const [p2, setP2] = useState("");
  const [pathName, setPathName] = useState("");
  const [s1h1, setS1H1] = useState("");
  const [s1h2, setS1H2] = useState("");
  const [s1h3, setS1H3] = useState("");
  const [s1img, setS1Img] = useState("");
  const [s1p1, setS1P1] = useState("");
  const [s1p2, setS1P2] = useState("");
  const [s1p3, setS1P3] = useState("");
  const [s1title, setS1Title] = useState("");
  const [s2img, setS2Img] = useState("");
  const [s2p1, setS2P1] = useState("");
  const [s2title, setS2Title] = useState("");
  const [s3lh1, setS3LH1] = useState("");
  const [s3limg, setS3LImg] = useState("");
  const [s3lp1, setS3LP1] = useState("");
  const [s3rh1, setS3RH1] = useState("");
  const [s3rimg, setS3RImg] = useState("");
  const [s3rp1, setS3RP1] = useState("");

  const uploadData = async () => {
    if (db !== undefined) {
      await addDoc(collection(db, dbname), {
        h1: h1,
        img: img,
        p1: p1,
        p2: p2,
        pathName: pathName,
        s1h1: s1h1,
        s1h2: s1h2,
        s1h3: s1h3,
        s1img: s1img,
        s1p1: s1p1,
        s1p2: s1p2,
        s1p3: s1p3,
        s1title: s1title,
        s2img: s2img,
        s2p1: s2p1,
        s2title: s2title,
        s3lh1: s3lh1,
        s3limg: s3limg,
        s3lp1: s3lp1,
        s3rh1: s3rh1,
        s3rimg: s3rimg,
        s3rp1: s3rp1,
      }).then(() => {
        alert("done");
      });
    }
  };
  return (
    <div className="w-full flex flex-col items-center justify-center mt-20">
      <input
        type="text"
        name="h1"
        className="w-[300px] h-[40px] pl-5 border border-black input-style"
        placeholder="Database name like mba"
        value={dbname}
        onChange={(e) => setDbname(e.target.value)}
      />
      <input
        type="text"
        name="h1"
        className="w-[300px] h-[40px] pl-5 border border-black input-style"
        placeholder="Heading 1"
        value={h1}
        onChange={(e) => setH1(e.target.value)}
      />
      <input
        type="text"
        name="img"
        className="w-[300px] h-[40px] pl-5 border border-black input-style"
        placeholder="Image URL"
        value={img}
        onChange={(e) => setImg(e.target.value)}
      />
      <input
        type="text"
        name="p1"
        className="w-[300px] h-[40px] pl-5 border border-black input-style"
        placeholder="Paragraph 1"
        value={p1}
        onChange={(e) => setP1(e.target.value)}
      />
      <input
        type="text"
        name="p2"
        className="w-[300px] h-[40px] pl-5 border border-black input-style"
        placeholder="Paragraph 2"
        value={p2}
        onChange={(e) => setP2(e.target.value)}
      />
      <input
        type="text"
        name="pathName"
        className="w-[300px] h-[40px] pl-5 border border-black input-style"
        placeholder="Path Name"
        value={pathName}
        onChange={(e) => setPathName(e.target.value)}
      />
      <input
        type="text"
        name="s1h1"
        className="w-[300px] h-[40px] pl-5 border border-black input-style"
        placeholder="Section 1 Heading 1"
        value={s1h1}
        onChange={(e) => setS1H1(e.target.value)}
      />
      <input
        type="text"
        name="s1h2"
        className="w-[300px] h-[40px] pl-5 border border-black input-style"
        placeholder="Section 1 Heading 2"
        value={s1h2}
        onChange={(e) => setS1H2(e.target.value)}
      />
      <input
        type="text"
        name="s1h3"
        className="w-[300px] h-[40px] pl-5 border border-black input-style"
        placeholder="Section 1 Heading 3"
        value={s1h3}
        onChange={(e) => setS1H3(e.target.value)}
      />
      <input
        type="text"
        name="s1img"
        className="w-[300px] h-[40px] pl-5 border border-black input-style"
        placeholder="Section 1 Image URL"
        value={s1img}
        onChange={(e) => setS1Img(e.target.value)}
      />
      <input
        type="text"
        name="s1p1"
        className="w-[300px] h-[40px] pl-5 border border-black input-style"
        placeholder="Section 1 Paragraph 1"
        value={s1p1}
        onChange={(e) => setS1P1(e.target.value)}
      />
      <input
        type="text"
        name="s1p2"
        className="w-[300px] h-[40px] pl-5 border border-black input-style"
        placeholder="Section 1 Paragraph 2"
        value={s1p2}
        onChange={(e) => setS1P2(e.target.value)}
      />
      <input
        type="text"
        name="s1p3"
        className="w-[300px] h-[40px] pl-5 border border-black input-style"
        placeholder="Section 1 Paragraph 3"
        value={s1p3}
        onChange={(e) => setS1P3(e.target.value)}
      />
      <input
        type="text"
        name="s1title"
        className="w-[300px] h-[40px] pl-5 border border-black input-style"
        placeholder="Section 1 Title"
        value={s1title}
        onChange={(e) => setS1Title(e.target.value)}
      />
      <input
        type="text"
        name="s2img"
        className="w-[300px] h-[40px] pl-5 border border-black input-style"
        placeholder="Section 2 Image URL"
        value={s2img}
        onChange={(e) => setS2Img(e.target.value)}
      />
      <input
        type="text"
        name="s2p1"
        className="w-[300px] h-[40px] pl-5 border border-black input-style"
        placeholder="Section 2 Paragraph 1"
        value={s2p1}
        onChange={(e) => setS2P1(e.target.value)}
      />
      <input
        type="text"
        name="s2title"
        className="w-[300px] h-[40px] pl-5 border border-black input-style"
        placeholder="Section 2 Title"
        value={s2title}
        onChange={(e) => setS2Title(e.target.value)}
      />
      <input
        type="text"
        name="s3lh1"
        className="w-[300px] h-[40px] pl-5 border border-black input-style"
        placeholder="Section 3 Left Heading 1"
        value={s3lh1}
        onChange={(e) => setS3LH1(e.target.value)}
      />
      <input
        type="text"
        name="s3limg"
        className="w-[300px] h-[40px] pl-5 border border-black input-style"
        placeholder="Section 3 Left Image URL"
        value={s3limg}
        onChange={(e) => setS3LImg(e.target.value)}
      />
      <input
        type="text"
        name="s3lp1"
        className="w-[300px] h-[40px] pl-5 border border-black input-style"
        placeholder="Section 3 Left Paragraph 1"
        value={s3lp1}
        onChange={(e) => setS3LP1(e.target.value)}
      />
      <input
        type="text"
        name="s3rh1"
        className="w-[300px] h-[40px] pl-5 border border-black input-style"
        placeholder="Section 3 Right Heading 1"
        value={s3rh1}
        onChange={(e) => setS3RH1(e.target.value)}
      />
      <input
        type="text"
        name="s3rimg"
        className="w-[300px] h-[40px] pl-5 border border-black input-style"
        placeholder="Section 3 Right Image URL"
        value={s3rimg}
        onChange={(e) => setS3RImg(e.target.value)}
      />
      <input
        type="text"
        name="s3rp1"
        className="w-[300px] h-[40px] pl-5 border border-black input-style"
        placeholder="Section 3 Right Paragraph 1"
        value={s3rp1}
        onChange={(e) => setS3RP1(e.target.value)}
      />

      <button
        onClick={() => uploadData()}
        className="w-[300px] h-[40px] pl-5 border border-black input-style"
      >
        Submit
      </button>
    </div>
  );
};

export default Addprograms;
