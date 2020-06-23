import React from "react";
import { Ionicons } from "@expo/vector-icons";

import * as L from "./styles";

export default function ListItems({ items, title }) {
  return (
    <>
      <L.Container>
        <L.Title>{title}</L.Title>

        {items.map((item) => (
          <L.ItemContent key={item.key} activeOpacity={0.8}>
            <L.ItemTitle>{item.itemTitle}</L.ItemTitle>

            <L.ItemValueContainer>
              <L.ItemValue>{item.itemValue ? item.itemValue : ""}</L.ItemValue>

              <Ionicons
                name="ios-arrow-forward"
                size={20}
                color="#5C5F66"
                style={{ marginLeft: 2 }}
              />
            </L.ItemValueContainer>
          </L.ItemContent>
        ))}
      </L.Container>
    </>
  );
}
