import api from "src/utils/api";

export const _sampleGetCount = async (count: number) => {
  // const data = await api.get("/test", {});
  const data = { status: 200, result: { count: count } };

  if (data.status === 200) {
    return data.result;
  } else {
    return { count: -1 };
  }
};
