export const SOURCE = "SOURCE";
export const SOURCE_PAGE = "SOURCE_PAGE";
export const SOURCE_URL = "SOURCE_URL";

export const source = (page) => {
  return {
    type: SOURCE,
    payload: page,
  };
};

export const sourcePage = (page) => {
  return {
    type: SOURCE_PAGE,
    payload: page,
  };
};

export const sourceUrl = (page) => {
  return {
    type: SOURCE_URL,
    payload: page,
  };
};
