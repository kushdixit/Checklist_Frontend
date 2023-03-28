import { CopyChecklist } from "redux/actions/checklist/index";
import { store } from "redux/index";

export const CopyHandler = async (pathId, id, navigate) => {
  const res = await store.dispatch(CopyChecklist(pathId, id));
  !res?.error && navigate(`/createChecklist/${res?.data?.data}`);
};
