import React, { useStore } from "@nanostores/react";
import type { ReactNode } from "react";

import { children as storeChildren, site, Child } from "../store/nanoStore";

type Props = {
  children: ReactNode;
};
const Children = ({ children }: Props) => {
  const $children = useStore(storeChildren);

  const handleAddChildToSite = (child: Child) => {
    site.set([...site.get(), child]);
  };

  return (
    <div>
      {$children.map(child => (
        <div key={child.id}>
          <h3>{child.name}</h3>
          <div onClick={() => handleAddChildToSite(child)}>{children}</div>
        </div>
      ))}
    </div>
  );
};

export default Children;
