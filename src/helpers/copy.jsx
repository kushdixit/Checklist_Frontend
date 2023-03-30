import React, { useRef, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { GetImage } from "redux/actions/task";
import { CopyChecklist } from "redux/actions/checklist/index";
import { store } from "redux/index";

export const CopyHandler = async (pathId, id, navigate) => {
  const res = await store.dispatch(CopyChecklist(pathId, id));
  !res?.error && navigate(`/createChecklist/${res?.data?.data}`);
};

export const ImageWrapper = ({ title, imageId }) => {
  const dispatch = useDispatch();
  const [imagePath, setImagePath] = useState(null);
  const idRef = useRef(null);

  const ImageHandler = async () => {
    const res = await dispatch(GetImage(imageId));
    if (res?.status === 200) setImagePath(res?.data[0]?.imageName);
  };

  useEffect(() => {
    if (imageId !== 0 && idRef?.current !== imageId) ImageHandler();
    idRef.current = imageId;
  }, [imageId]);

  return (
    <div style={{ marginBottom: "30px" }}>
      {imagePath && (
        <img
          src={`http://112.196.2.202:9005/ChecklistImages/${imagePath}`}
          alt="pic"
          style={{ width: "100%", height: "auto" }}
        />
      )}
      <div
        style={{
          fontSize: "12px",
          color: "#aaa",
          fontStyle: "italic",
          display: "flex",
        }}
      >
        {title}
      </div>
    </div>
  );
};
