export const ENDPOINTS = {
  auth: {
    login: "/admin/login",
    logout: "/admin/logout",
  },
  categories: {
    create: "/category/create",
    get: "/category",
    delete: "/category/delete/:id",
    update: "/category/update/:id",
  },
  products: {
    create: "/product/create",
    get: "/product",
    delete: "/product/delete/:id",
    update: "/product/update/:id",
    uploadImage: "/product/image/upload",
    deleteImage: "/product/image/delete",
  },
};
