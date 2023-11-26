import { SearchBox } from "@fluentui/react";
import React from "react";

type FluentSearchProps = {
  userOnSearch?: boolean;
  onSearch: (search: string) => void;
};

export function FluentSearch({ onSearch, userOnSearch }: FluentSearchProps) {
  function handleKeyPress(event: any) {
    if (event?.key === "Enter") {
      onSearch(event.target.value);
    }
  }

  if (userOnSearch) {
    return <SearchBox onKeyUp={handleKeyPress} />;
  }

  return <SearchBox onSearch={onSearch} />;
}
