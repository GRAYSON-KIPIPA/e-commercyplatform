import { CustomerI } from "../modals/Customer";
import { ProductI } from "../modals/Product";

export const paginate = (array: CustomerI[], pageSize: number) => {
  const pageCount = Math.ceil(array.length / pageSize);
  return Array.from({ length: pageCount }, (_, index) =>
    array.slice(index * pageSize, (index + 1) * pageSize)
  );
};

export const paginateProduct = (array: ProductI[], pageSize: number) => {
  const pageCount = Math.ceil(array.length / pageSize);
  return Array.from({ length: pageCount }, (_, index) =>
    array.slice(index * pageSize, (index + 1) * pageSize)
  );
};
