import axios from "@/axios/accounts-service";

export const RolesApi = {
  list(ids?: string) {
    return axios({
      url: "/api/roles/list",
      method: "get",
      params: {
        ids,
      },
    });
  },
  edit(data: object) {
    return axios({
      url: "/api/roles/edit",
      method: "post",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data,
    });
  },
};
