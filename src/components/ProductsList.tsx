import React from 'react';
import cn from 'classnames';
import { GatheredProduct } from '../types/type';

type Props = {
  product: GatheredProduct | undefined;
};

export const ProductsList: React.FC<Props> = ({ product }) => {
  return (
    <tr data-cy="Product">
      <td className="has-text-weight-bold" data-cy="ProductId">
        {product?.id}
      </td>

      <td data-cy="ProductName">{product?.name}</td>
      <td data-cy="ProductCategory">
        {`${product?.category.icon} - ${product?.category.title}`}
      </td>

      <td
        data-cy="ProductUser"
        className={cn(
          { 'has-text-link': product?.owner.sex === 'm' },
          { 'has-text-danger': product?.owner.sex === 'f' },
        )}
      >
        {product?.owner.name}
      </td>
    </tr>
  );
};
