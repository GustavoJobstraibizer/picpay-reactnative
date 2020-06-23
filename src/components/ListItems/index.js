import React from "react";

import * as L from "./styles";

export default function ListItems({ items, title }) {
  return (
    <>
      <L.Container>
        <L.Title>{title}</L.Title>

        {items.map((item) => (
          <L.ItemContent key={item.key}>
            <L.ItemTitle>{item.itemTitle}</L.ItemTitle>
            <L.ItemValue>{item.itemValue}</L.ItemValue>
          </L.ItemContent>
        ))}
      </L.Container>
    </>
  );
}
