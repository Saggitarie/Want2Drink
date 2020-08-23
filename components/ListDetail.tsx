import * as React from 'react';

import { User } from '../interfaces';

type ListDetailProps = {
  item: User;
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const ListDetail = ({ item: user }: ListDetailProps) => (
  <div>
    <h1>Detail for {user.name}</h1>
    <p>ID: {user.id}</p>
  </div>
);

export default ListDetail;
