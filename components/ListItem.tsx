import React from 'react';
import Link from 'next/link';

import { User } from '../interfaces';

type Props = {
  data: User;
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const ListItem = ({ data }: Props) => (
  <Link href="/users/[id]" as={`/users/${data.id}`}>
    <a href=".">
      {data.id}: {data.name}
    </a>
  </Link>
);

export default ListItem;
