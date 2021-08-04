import instance from "../instances/instance";

export function listPosts() {
  return instance.get("api/post");
}

export default instance;
