import apiFetchRequest from "./apiFetchRequest";

export const singlePropertyPageLoader = async ({ request, params }) => {
    const res = await apiFetchRequest("/property/" + params.id);
    return res.data;
};

export const listOfPropertyLoader = async ({ request, params }) => {
    const query = request.url.split("?")[1];
    const res = await apiFetchRequest("/property?" + query);
    return res.data;
  };

